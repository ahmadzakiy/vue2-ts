import Vue from 'vue'

declare module "vue/types/vue" {
  interface Vue {
    // eslint-disable-next-line @typescript-eslint/ban-types
    $toast: Function
  }
}
