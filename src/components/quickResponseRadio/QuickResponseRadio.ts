import {
  computed, defineComponent,
} from 'vue';
import { useStore } from 'vuex';
import QuickResponseItem from './quickResponseItem/QuickResponseItem.vue';

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
      list = this.$store.state.quickSelectOptions;
      return list;
    },

  },
});

export default Component;
