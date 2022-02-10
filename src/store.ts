// store.ts
import { InjectionKey } from 'vue';
import { createStore, useStore as baseUseStore, Store } from 'vuex';
import Flows from './models/Flows';
import Gear from './models/interfaces/Gear.interface';
import { Tag } from './models/interfaces/Tag';
import { Datatype, Flow } from './models/Types';

interface ButtonEvent {
  state: boolean,
  payload: Flow
}

export interface State {
  count: number,
  showQuickSelect: boolean,
  type: string,
  displayPhoto: boolean,
  selectedFlow:Flow,
  tag:Tag,
  dataType:Datatype,
  flowArray:Flow[],
  apiResults:Gear[],
  buttonEvent:ButtonEvent,
  nextFlow:Flow
}

let array: string [];

export const key: InjectionKey<Store<State>> = Symbol('');

export const store = createStore<State>({

  state: {
    count: 0,
    showQuickSelect: true,
    displayPhoto: true,
    selectedFlow: 'extendedFlow',
    type: Object(Flows.items).beginningFlow[0],
    tag: {
      talent: '',
      gear: '',
      brand: '',
      model: '',
      uid: '04702A22717180',
    },
    dataType: null,
    flowArray: Object(Flows.items).beginningFlow,
    apiResults: [],
    buttonEvent: { state: true, payload: '' },
    nextFlow: 'basicFlow',
  },

  mutations: {
    changeApiResult(state, payload:any):void {
      state.apiResults = payload;
    },

    increment(state): void {
      const i = state.selectedFlow;
      array = state.flowArray;
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

    setPage(state): void {
      state.type = 'model';
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

    alterFlow(state, payload:Flow):void{
      state.count = 0;
      state.selectedFlow = payload;
      state.flowArray = Object(Flows.items)[state.selectedFlow];
      // eslint-disable-next-line prefer-destructuring
      state.type = state.flowArray[0];
      state.buttonEvent = { state: false, payload: 'basicFlow' };
    },

    setNextFlow(state, payload:Flow):void{
      state.nextFlow = payload;
    },

    changeButtonEvent(state, payload:Flow):void{
      const i:ButtonEvent = { state: true, payload };
      state.buttonEvent = i;
    },
  },
});

// define your own `useStore` composition function
export function useStore(): Store<State> {
  return baseUseStore(key);
}
