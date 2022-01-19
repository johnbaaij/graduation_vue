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
  flowInitiated:boolean,
  generalOnboarding:{
    gear:string,
    brand:string,
    model:string
  },
  dataType:string
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
    flowInitiated: false,
    generalOnboarding:{
      gear:'',
      brand:'',
      model:''
    },
    dataType:'brand'
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

    updateOnboardingValue(state, payload:string){

      switch(state.dataType) { 
        case 'gear': { 
          state.generalOnboarding.gear = payload;
          break; 
        } 
        case 'model': { 
          state.generalOnboarding.model = payload;
           break; 
        }
        case 'brand': { 
          state.generalOnboarding.brand = payload;
          break; 
       } 
        default: { 
           //statements; 
           break; 
        } 
     }

    }, 

    alterDataType(state, payload:string):void{
      state.dataType = payload;
    }
  },
});

// define your own `useStore` composition function
export function useStore(): Store<State> {
  return baseUseStore(key);
}