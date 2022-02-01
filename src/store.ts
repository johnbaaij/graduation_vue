// store.ts
import { InjectionKey } from 'vue';
import { createStore, useStore as baseUseStore, Store } from 'vuex';
import Flows from './models/Flows';
import { Tag } from './models/interfaces/Tag';
import { Datatype, Flow } from './models/Types';

export interface State {
  count: number,
  showQuickSelect: boolean,
  type: string,
  displayPhoto: boolean,
  selectedFlow:Flow,
  flowInitiated:boolean,
  tag:Tag,
  dataType:Datatype,
    quickSelectOptions:string[],
}

let array: string [];

export const key: InjectionKey<Store<State>> = Symbol('');

export const store = createStore<State>({

  state: {
    count: 0,
    showQuickSelect: true,
    type: 'talentpool',
    displayPhoto: true,
    selectedFlow: 'basicFlow',
    flowInitiated: false,
    tag: {
      talent: '',
      gear: '',
      brand: '',
      model: '',
      uid: '04702A22717180',
    },
    dataType: 'brand',
    quickSelectOptions: [],

  },

  mutations: {

    increment(state): void {
      array = Object(Flows.items)[state.selectedFlow];

      if (state.count < array.length - 1) {
        state.count += 1;
        state.type = array[state.count];
      }
    },

    decrement(state): void{
      if (state.count !== 0) {
        state.count -= 1;
        state.type = array[state.count];
      }
    },

    addOption(state, payload:string[]): void{
      console.log(payload);
      state.quickSelectOptions = payload;
    },

    updateOnboardingValue(state, payload:string) {
      switch (state.dataType) {
        case 'gear': {
          state.tag.gear = payload;
          break;
        }
        case 'model': {
          state.tag.model = payload;
          break;
        }
        case 'brand': {
          state.tag.brand = payload;
          break;
        }
        default: {
          // statements;
          break;
        }
      }
    },

    alterDataType(state, payload:Datatype):void{
      state.dataType = payload;
    },
  },
});

// define your own `useStore` composition function
export function useStore(): Store<State> {
  return baseUseStore(key);
}
