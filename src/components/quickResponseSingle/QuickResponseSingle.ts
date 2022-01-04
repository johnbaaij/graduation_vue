import { defineComponent } from 'vue';

const Component = defineComponent({

  components: {
  },
  props: {
    title: String,
  },
  data() {
    return {
      uid: 0,
    };
  },
  mounted() {
    this.uid = Date.now() * Math.random();
  },
});

export default Component;
