import { defineComponent } from 'vue';

const Component = defineComponent({

  components: {
  },
  props: {
  },
  data() {
  },
  mounted() {
  },

  computed:{
    displayPhoto(){
      return this.$store.state.displayPhoto
    }, 

    displayFile(){
      return this.$store.state.displayFile
    }
  }
});

export default Component;