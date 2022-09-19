<template>
  <mp-flex h="100vh" align-items="center" justify-content="center">
    <mp-box text-align="center" max-width="sm">
      <mp-avatar
        name="Default"
        backgroundColor="gray"
        showBorder
        borderColor="red"
      />
      <mp-icon name="mekari-brand" size="xl" />
      <mp-heading>{{ msg }}</mp-heading>
      <mp-text font-size="lg" py="5">
        Mekari Design is a collection of design resources, reusable components
        and guidelines for creating Mekari products. So good news, we are
        finally here.
      </mp-text>
      <mp-button @click="showSuccessToast">Get Started</mp-button>
      <mp-toggle id="toggle-ezsCsI" default="Default">Default</mp-toggle>
    </mp-box>
  </mp-flex>
</template>

<script lang="ts">
import Vue from "vue";
import {
  MpBox,
  MpText,
  MpHeading,
  MpButton,
  MpFlex,
  MpIcon,
  MpToggle,
  MpAvatar,
} from "@mekari/pixel";

export default Vue.extend({
  name: "HelloWorld",
  components: {
    MpBox,
    MpText,
    MpHeading,
    MpButton,
    MpFlex,
    MpIcon,
    MpToggle,
    MpAvatar,
  },
  props: {
    msg: String,
  },
  methods: {
    showSuccessToast() {
      this.$toast({
        variant: 0,
        title: "Success",
        position: "top",
      });
    },
  },
});
</script>
