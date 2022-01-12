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
    this.uid = "checkbox" +  Date.now() * Math.random() ;
  },
});

export default Component;