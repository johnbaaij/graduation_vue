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

  computed: {

  },

  methods: {
    updateMessage (e:any) {
      this.$store.commit('updateOnboardingValue', e.target.value)
    }
  },
  
  mounted() {
    this.uid = "checkbox" +  Date.now() * Math.random() ;
  },
});

export default Component;