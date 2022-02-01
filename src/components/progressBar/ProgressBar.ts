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
      const number = 100 / (Flows.items.basicFlow.length);
      return (this.$store.state.count + 1) * number;
    },

  },
});

export default Component;
