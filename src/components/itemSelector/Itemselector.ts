import { defineComponent } from 'vue';

// svg files
import gloveSVG from '@/svg/glove.svg.vue';
import skateSVG from '@/svg/skate.svg.vue';
import skiShoeSVG from '@/svg/ski_shoe.svg.vue';
import skiSVG from '@/svg/ski.svg.vue';

const Component = defineComponent({

  setup() {
    return {

    };
  },

  components: {
    gloveSVG,
    skateSVG,
    skiShoeSVG,
    skiSVG,
  },

  props: {
  },
  data() {
    return {
    };
  },

  methods: {
    triggerSport(e:any) {
      if (e.target.value === 'sport') {
        this.$store.commit('setNextFlow', 'basicFlow');
      }
    },
    triggerGeneral(e:any) {
      if (e.target.value === 'general') {
        this.$store.commit('setNextFlow', 'generalFlow');
      }
    },
  },
});

export default Component;
