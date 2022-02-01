import {
  computed, defineComponent, onMounted, ref,
} from 'vue';
import { useStore } from 'vuex';
import axios from 'axios';
import QuickResponseItem from './quickResponseItem/QuickResponseItem.vue';
import i18n from '@/i18n';
// eslint-disable-next-line camelcase
import en_us from '../../locales/en-US.json';
import useAxios from '@/api/use-axios';

function getSports(list: string[]):string[] {
  for (let i = 0; i < en_us.sports.length; i += 1) {
    const arrayItem = `sports[${i}].name`;
    list.push(i18n.global.t(arrayItem));
  }
  return list;
}

const getGear = (list: string[], value:number):string[] => {
  for (let i = 0; i < en_us.sports[value].gear.length; i += 1) {
    const arrayItem = `sports[${0}].gear[${i}].type`;
    list.push(i18n.global.t(arrayItem));
  }
  return list;
};

// Todo fix this issue
const getManufacturers = (list: string[], value:number):string[] => {
  // eslint-disable-next-line no-param-reassign
  list = ['Xcel', 'Vissla', 'Quicksilver', "O'Neil", 'Patagonia', 'Rip Curl', 'Sisstrevolution'];
  return list;
};

const Component = defineComponent({

  setup() {
    const result = ref<any>(null);

    const store = useStore();
    console.log(useAxios('Aqualung'));

    const scubaGearlist:string[] = ['Regulator', 'BCD', 'Cylinder ', 'Wetsuit', 'Drysuit', 'Scooter', 'Other'];
    const scubaBrands:string[] = ['Apeks', 'Aqualung', 'Cressi', 'Mares', 'Scubapro', 'Seac sub', 'Tusa'];
    const bcds:string[] = ['Hydros Pro', 'Hydros X', 'Seahawk 2', 'Equalizer'];

    function apiCall():any {
      // eslint-disable-next-line no-return-assign
      axios.get('http://136.144.205.146:3000/gear/scubapro').then((data) => result.value = data);
    }

    onMounted(() => {
      // the DOM element will be assigned to the ref after initial render
      console.log(result.value); // <div>This is a root element</div>
    });

    // const list: string[] = [];
    // let items = getGear(list, 0);

    return {
      count: computed(() => store.state.count),
      // items : getGear(list, 1)
      // items: getSports(list),
      scubaGearlist,
      scubaBrands,
      bcds,
      apiCall,
    };
  },

  data() {
    return {
      elements: [],
    };
  },
  components: {
    QuickResponseItem,
  },
  props: {

  },

  methods: {

  },

  computed: {

    items() {
      let list = [];

      switch (this.$store.state.type) {
        case 'talentpool': {
          // this.apiCall();
          list = this.apiCall();
          break;
        }
        case 'gear': {
          list = this.$store.state.quickSelectOptions;
          break;
        }
        case 'brand': {
          // getPokemon();
          break;
        }
        case 'model': {
          list = this.bcds;
          break;
        }

        default: {
          break;
        }
      }
      return list;
    },

  },
});

export default Component;
