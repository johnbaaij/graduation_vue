import {
  computed, defineComponent,
} from 'vue';
import { useStore } from 'vuex';
import QuickResponseItem from './quickResponseItem/QuickResponseItem.vue';
// eslint-disable-next-line camelcase
import Gear from '@/controllers/ApiCalls';

const Component = defineComponent({

  setup() {
    const store = useStore();

    // const scubaGearlist:string[] = ['Regulator', 'BCD', 'Cylinder ', 'Wetsuit', 'Drysuit', 'Scooter', 'Other'];
    // const scubaBrands:string[] = ['Apeks', 'Aqualung', 'Cressi', 'Mares', 'Scubapro', 'Seac sub', 'Tusa'];
    // const bcds:string[] = ['Hydros Pro', 'Hydros X', 'Seahawk 2', 'Equalizer'];

    return {
      count: computed(() => store.state.count),
    };
  },

  data() {
    return {
      elements: [],
      variable: '',
    };
  },
  components: {
    QuickResponseItem,
  },
  props: {

  },

  methods: {
    getApiData() {
      Gear.getModels('scuba diving', 'bcd', 'mares')
        .then((data) => {
          this.$store.commit('changeApiResult', data);
          return data;
        });
    },
  },

  async mounted() {
    console.log(this.variable);
  },

  async created() {
    this.getApiData();
  },
  computed: {

    items() {
      let list = [];

      switch (this.$store.state.type) {
        case 'talentpool': {
          list = this.$store.state.apiResults;
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
          // list = this.bcds;
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
