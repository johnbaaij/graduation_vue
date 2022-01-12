// store.ts
import { InjectionKey } from 'vue';
import { createStore, useStore as baseUseStore, Store } from 'vuex';

export interface State {
  count: number,
  showQuickSelect: boolean,
  type: string,
  displayPhoto: boolean,
  page: string

}

export const key: InjectionKey<Store<State>> = Symbol('');

export const store = createStore<State>({

  strict: true,

  state: {
    count: 1,
    showQuickSelect: true,
    type:'talent', 
    displayPhoto: false, 
    page: ''
  },
  
  mutations: {
    increment(state) {
      // mutate state

      if (state.count < 6) {
        state.count += 1;
      }
    },

    changeScreentype(state){

    },

    decrement(state){
      if (state.count > 1){
        state.count -=1;
      }
    },
  },
});

// define your own `useStore` composition function
export function useStore(): Store<State> {
  return baseUseStore(key);
}