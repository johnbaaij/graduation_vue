// store.ts
import { InjectionKey } from 'vue';
import { createStore, useStore as baseUseStore, Store } from 'vuex';

export interface State {
  count: number,
  showQuickSelect: boolean

}

export const key: InjectionKey<Store<State>> = Symbol('');

export const store = createStore<State>({

  strict: true,

  state: {
    count: 1,
    showQuickSelect: true,
  },

  mutations: {
    increment(state) {
      // mutate state

      if (state.count < 6) {
        state.count += 1;
      }
    },
    flipShowQuickSelect(state) {
      state.showQuickSelect = !state.showQuickSelect;
    },
  },

});

// define your own `useStore` composition function
export function useStore(): Store<State> {
  return baseUseStore(key);
}
