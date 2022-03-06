import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';
import QuickResponseItem from './quickResponseItem/QuickResponseItem.vue';

const Component = defineComponent({

  setup() {
    const store = useStore();

    const list: string[] = [];

    return {
      count: computed(() => store.state.count),
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
