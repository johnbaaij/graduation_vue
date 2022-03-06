import { defineComponent } from 'vue';

const Component = defineComponent({

  components: {
  },

  props: {
    title: Object,
  },
  data() {
    return {
      uid: '',
      test: this.title,
    };
  },
  mounted() {
    this.uid = `radio${Date.now() * Math.random()}`;
  },

  methods: {
    updateMessage(e:any) {
      if (this.title?.flow !== undefined && this.title?.flow !== null) {
        this.$store.commit('setNextFlow', this.title?.flow);
        this.$store.commit('changeButtonEvent', this.title?.flow);
      }
      this.$store.commit('updateOnboardingValue', this.title?.item);
    },
  },
});

export default Component;
