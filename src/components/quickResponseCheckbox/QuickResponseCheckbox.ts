import { computed, defineComponent } from 'vue';
import QuickResponseItem from './quickResponseItem/QuickResponseItem.vue';
import i18n from '@/i18n';
import en_us from '../../locales/en-US.json';
import { Store, useStore } from 'vuex';





const getSports = (list: string[]):string[] => {
  for (var i = 0; i < en_us.sports.length; i++) {
    let arrayItem = 'sports[' + i + '].name';
      list.push(i18n.global.t(arrayItem))
  }
    return list ;
};

const getGear = (list: string[], value:number):string[] => {
  for (var i = 0; i < en_us.sports[value].gear.length; i++) {
    let arrayItem = `sports[${0}].gear[${i}].type`;
      list.push(i18n.global.t(arrayItem))
  }
    return list ;
};

//Todo fix this issue 
const getManufacturers = (list: string[], value:number):string[] => {

  list = ["Xcel", "Vissla", "Quicksilver", "O'Neil","Patagonia", "Rip Curl", "Sisstrevolution"];
    return list ;
};



const Component = defineComponent({

  setup(){

    const store = useStore();

  

    let list: string[] =[]
    let items = getGear(list, 0);

    return {
      count: computed(() => store.state.count),
      items : getGear(list, 1)
    }

  },

  data() {
    return {
    };
  },
  components: {
    QuickResponseItem,
  },
  props: {
    
  },

  computed: {
  },
});

export default Component;
