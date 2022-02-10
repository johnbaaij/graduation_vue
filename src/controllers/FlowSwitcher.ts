import { Flow } from '@/models/Types';
import { store } from '@/store';

export function changeFlow(payload:Flow):void {
  store.commit('alterFlow', payload);
}

export function buttonEventClick():void {
  if (store.state.buttonEvent.state === true) {
    changeFlow(store.state.nextFlow);
  } else {
    store.commit('increment');
    console.log('else');
  }
  //  store.commit('increment');
}

export function changeButtonEvent(payload:Flow):void {
  store.commit('changeButtonEvent', payload);
}
