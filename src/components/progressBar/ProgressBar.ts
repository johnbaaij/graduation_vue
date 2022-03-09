import { defineComponent } from 'vue';
import Flows from '@/models/Flows';

const Component = defineComponent({

  data() {
    return {
    };
  },
  components: {
  },
  props: {
  },

  computed: {
    width() {
      const k = Flows.items.extendedFlow.length / this.$store.state.flowArray.length;
      const number = 100 / (Flows.items.basicFlow.length);
      return (this.$store.state.count + 1) * number * k;
    },

  },
});

export default Component;
