import { defineComponent } from 'vue';

const Component = defineComponent({

  setup() {
    return {

    };
  },

  components: {
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
        console.log('sport');
        this.$store.commit('setNextFlow', 'basicFlow');
      }
    },
    triggerGeneral(e:any) {
      if (e.target.value === 'general') {
        console.log('general');
        this.$store.commit('setNextFlow', 'generalFlow');
      }
    },
  },
});

export default Component;
