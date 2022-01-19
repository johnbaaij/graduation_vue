import { computed, defineComponent } from 'vue';
import QuickResponseItem from './quickResponseItem/QuickResponseItem.vue';
import i18n from '@/i18n';
import en_us from '../../locales/en-US.json';
import {  useStore } from 'vuex';

function getSports(list: string[]):string[] {
  for (var i = 0; i < en_us.sports.length; i++) {
    let arrayItem = 'sports[' + i + '].name';
      list.push(i18n.global.t(arrayItem))
  }
    return list ;
}

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

    const scubaGearlist:string[] = ['Regulator', 'BCD', 'Cylinder ', 'Wetsuit', 'Drysuit', 'Scooter', 'Other'];
    const scubaBrands:string[] =['Apeks', 'Aqualung', 'Cressi', 'Mares','Scubapro', 'Seac sub', 'Tusa'];
    const bcds:string[] = ['Hydros Pro', 'Hydros X', 'Seahawk 2', 'Equalizer'];

    let list: string[] =[]
    //let items = getGear(list, 0);

    return {
      count: computed(() => store.state.count),
      //items : getGear(list, 1)
      //items: getSports(list),
      scubaGearlist,
      scubaBrands,
      bcds
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

    items: function(){

      let list:string[] =[];
      
      switch(this.$store.state.type){
        case 'talentpool':{
          list = getSports(list)
          break
        }
        case 'gear':{
          list = this.scubaGearlist;
          break
        }
        case 'brand':{
          list = this.scubaBrands;
          break
        }
        case 'model':{
          list= this.bcds;
          break
        }
      }
      return list
    
    },

  },
});

export default Component;
