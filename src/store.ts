// store.ts
import { InjectionKey } from 'vue';
import { createStore, useStore as baseUseStore, Store } from 'vuex';
import Flows from './models/Flows';

export interface State {
  count: number,
  showQuickSelect: boolean,
  type: string,
  displayPhoto: boolean,
  selectedFlow:string,
  flowInitiated:boolean
}

let array: string [];



export const key: InjectionKey<Store<State>> = Symbol('');

export const store = createStore<State>({

  strict: true,

  state: {
    count: 0 ,
    showQuickSelect: true,
    type:'talentpool', 
    displayPhoto: true, 
    selectedFlow: 'flow1',
    flowInitiated: false
  },
  
  mutations: {

    increment(state) {
      array = Object(Flows.items)[state.selectedFlow];

      if (state.count < array.length -1 ){
        state.count = state.count +1;
        state.type = array[state.count];
      }  
    },

    decrement(state){

      if (state.count != 0){
        state.count = state.count -1;
        state.type = array[state.count];
      }

    },
  },
});

// define your own `useStore` composition function
export function useStore(): Store<State> {
  return baseUseStore(key);
}