import { mount } from "@vue/test-utils";
import PixelWrapper from "@/components/PixelWrapper.vue";

import { theme } from "@mekari/pixel-theme";
import { iconAssets } from "@mekari/pixel-icon";

describe("App.vue", () => {
  it("Should be name App", () => {
    const wrapper = mount(PixelWrapper, {
      mocks: {
        $pixel: {
          theme: theme,
          icons: {
            ...iconAssets
          }
        }
      },
    });
    expect(wrapper.vm.$options.name).toBe("PixelWrapper");
  });
});
