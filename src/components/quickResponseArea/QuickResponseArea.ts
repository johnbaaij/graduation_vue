import { defineComponent } from 'vue';
import QuickResponseSingle from '@/components/quickResponseArea/quickResponseSingle/QuickResponseSingle.vue';
import QuickResponseMultiple from '@/components/quickResponseArea/quickResponseMultiple/QuickResponseMultiple.vue';

const Component = defineComponent({

  data() {
    return {
      talents: [{ message: 'Kite surfing' }, { message: 'Snowboarding' }, { message: 'Scuba diving' }, { message: 'Surfing' }],
      gears:[{message: 'Wetsuit'}, {message:'Boards'}, {message: 'Kites'}],
      type: this.$store.state.type
    };
  },
  components: {
    QuickResponseSingle,
    QuickResponseMultiple
  },
  props: {
    
  },

  computed: {
  },
});

export default Component;
