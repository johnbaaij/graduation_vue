import { Store } from 'vuex';

declare module '@vue/runtime-core' {
    console.log('runt dit ');
  // declare your own store states
  interface State {
    count: number
  }

  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store;
  }
}
