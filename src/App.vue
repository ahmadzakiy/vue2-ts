<template>
  <PixelWrapper>
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </PixelWrapper>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import PixelWrapper from "./components/PixelWrapper.vue";

export default Vue.extend({
  name: "App",
  components: {
    HelloWorld,
    PixelWrapper,
  },
});
</script>
