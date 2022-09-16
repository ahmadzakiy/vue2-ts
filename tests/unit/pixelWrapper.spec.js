import { mount } from "@vue/test-utils";
import PixelWrapper from "@/components/PixelWrapper.vue";

const pixelThemeFunction = require("@mekari/pixel-theme/dist/mekari-pixel-theme.cjs.dev");

describe("App.vue", () => {
  it("Should be name App", () => {
    const wrapper = mount(PixelWrapper, {
      stubs: {
        ThemeProvider: {
          template: "<div><slot></slot></div>",
        },
        MpReset: {
          template: "<div />",
        },
      },
      computed: {
        theme() {
          return jest.fn().mockReturnValue(pixelThemeFunction);
        },
      },
      provide: () => ({
        $pixelTheme: jest.fn().mockReturnValue(pixelThemeFunction),
        $pixelColorMode: jest.fn().mockReturnValue({}),
        $pixelIcons: jest.fn().mockReturnValue({}),
      }),
    });
    expect(wrapper.vm.$options.name).toBe("PixelWrapper");
  });
});
