
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
      return this.$store.state.count * 16.7;
    }

  },
});

export default Component;
