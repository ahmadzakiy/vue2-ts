<template>
  <ThemeProvider>
    <MpReset />
    <slot></slot>
  </ThemeProvider>
</template>

<script lang="ts">
import Vue from "vue";
import { ThemeProvider, MpReset } from "@mekari/pixel";

export default Vue.extend({
  name: "PixelWrapper",
  components: {
    ThemeProvider,
    MpReset,
  },
});
</script>
