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
});

export default Component;
