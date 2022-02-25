// store.ts
import { InjectionKey } from 'vue';
import { createStore, useStore as baseUseStore, Store } from 'vuex';
import Calls from './controllers/ApiCalls';
import Flows from './models/Flows';
import Gear from './models/interfaces/Gear.interface';
import { Tag } from './models/interfaces/Tag';
import { Datatype, Flow } from './models/Types';

interface ButtonEvent {
  state: boolean,
  payload: Flow
}

function changeApi(state:any) {
  let returnable;

  Calls.getRequest({
    category: state.category,
    sport: state.tag.talent,
    brand: state.tag.brand,
    type: state.tag.gear,
    model: state.tag.model,
  }).then((data) => {
    state.apiResults = data;
    //  state.quickSelectOptions = data.data?.map(({ item }) => item);
    state.quickSelectOptions = data.data;
  });
  return returnable;
}

export interface State {
  count: number,
  showQuickSelect: boolean,
  type: string,
  displayPhoto: boolean,
  selectedFlow:Flow,
  tag:Tag,
  dataType:Datatype,
  category:string,
  flowArray:Flow[],
  apiResults:Gear,
  quickSelectOptions:any,
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
      talent: undefined,
      gear: undefined,
      brand: undefined,
      model: undefined,
      uid: '04702A22717180',
    },
    dataType: 'talent',
    category: '',
    flowArray: Object(Flows.items).beginningFlow,
    apiResults: {},
    quickSelectOptions: [],
    buttonEvent: { state: true, payload: '' },
    nextFlow: 'basicFlow',
  },

  mutations: {
    increment(state): void {
      const i = state.selectedFlow;
      array = state.flowArray;
      if (state.count < array.length - 1) {
        state.count += 1;
        state.type = array[state.count];
      }
    },

    addOption(state, payload:string[]): void{
      console.log(payload);
      state.quickSelectOptions = payload;
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

    callApi(state): void {
      changeApi(state);
    },

    updateOnboardingValue(state, payload:string) {
      switch (state.dataType) {
        case 'gear': {
          state.tag.gear = payload;
          break;
        }
        case 'talent': {
          state.tag.talent = payload;
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

    alterCategory(state, payload:string):void{
      state.category = payload;
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
