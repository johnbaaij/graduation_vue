import { defineComponent } from 'vue';

const Component = defineComponent({

  components: {
  },
  
  props: {
    title: String,
  },
  data() {
    return {
      uid: "",
    };
  },
  mounted() {
    this.uid = "radio" +  Date.now() * Math.random() ;
  },

  methods: {
    updateMessage (e:any) {
      this.$store.commit('updateOnboardingValue', e.target.value)
    }
  },
});

export default Component;
