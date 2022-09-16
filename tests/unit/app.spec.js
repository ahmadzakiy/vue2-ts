import { mount } from "@vue/test-utils";
import App from "@/App.vue";

const pixelThemeFunction = require("@mekari/pixel-theme/dist/mekari-pixel-theme.cjs.dev");

describe("App.vue", () => {
  it("Should be name App", () => {
    const wrapper = mount(App, {
      stubs: {
        PixelWrapper: {
          template: "<div><slot></slot></div>",
        },
        MpToggle: {
          template: "<div></div>",
        },
      },
      provide: () => ({
        $pixelTheme: jest.fn().mockReturnValue(pixelThemeFunction),
        $pixelColorMode: jest.fn().mockReturnValue({}),
        $pixelIcons: jest.fn().mockReturnValue({}),
      }),
    });

    expect(wrapper.vm.$options.name).toBe("App");
  });
});
