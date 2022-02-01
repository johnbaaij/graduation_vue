import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';
import QuickResponseItem from './quickResponseItem/QuickResponseItem.vue';
import i18n from '@/i18n';
// eslint-disable-next-line camelcase
import en_us from '../../locales/en-US.json';

const getSports = (list: string[]):string[] => {
  for (let i = 0; i < en_us.sports.length; i += 1) {
    const arrayItem = `sports[${i}].name`;
    list.push(i18n.global.t(arrayItem));
  }
  return list;
};

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
    const store = useStore();

    const list: string[] = [];
    const items = getGear(list, 0);

    return {
      count: computed(() => store.state.count),
      items: getGear(list, 1),
    };
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
