import { mount } from "@vue/test-utils";
import App from "@/App.vue";

import { theme } from "@mekari/pixel-theme";
import { iconAssets } from "@mekari/pixel-icon";

describe("App.vue", () => {
  let wrapper
  
  beforeEach(() => {
    wrapper = mount(App, {
      // stubs: {
      //   PixelWrapper: {
      //     template: "<div><slot></slot></div>",
      //   },
      //   MpToggle: {
      //     template: "<div></div>",
      //   },
      // },
      mocks: {
        $pixel: {
          theme: theme,
          icons: {
            ...iconAssets
          }
        }
      },
      provide: () => ({
        $pixelTheme: jest.fn().mockReturnValue(theme),
        $pixelColorMode: jest.fn().mockReturnValue({}),
        $pixelIcons: jest.fn().mockReturnValue({
          ...iconAssets
        }),
      }),
  });
  })
  
  it("Should be name App", () => {
    expect(wrapper.vm.$options.name).toBe("App");
  })
});
