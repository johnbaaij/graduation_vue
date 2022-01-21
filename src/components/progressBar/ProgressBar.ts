
import Flows from '@/models/Flows';
import { defineComponent } from 'vue';

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
    width(){

      let number = 100  / (Flows.items.basicFlow.length);
      return (this.$store.state.count +1) * number;
    }

  },
});

export default Component;
