import { defineComponent } from 'vue';
import QuickResponseSingle from '@/components/quickResponseSingle/QuickResponseSingle.vue';

const Component = defineComponent({

  data() {
    return {
      talents: [{ message: 'Kite surfing' }, { message: 'Snowboarding' }, { message: 'Scuba diving' }, { message: 'Surfing' }],
    };
  },
  components: {
    QuickResponseSingle,
  },
  props: {
  },

  computed: {
  },
});

export default Component;
