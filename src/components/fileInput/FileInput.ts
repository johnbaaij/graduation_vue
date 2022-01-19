import { defineComponent } from 'vue';

const Component = defineComponent({

  components: {
  },
  props: {
  },
  data() {

    return {
      url: ""

    }
  },
  mounted() {
  },

  methods: {

    onFileSelected(event:any): void{
      const selectedFile = event.target.files[0];
      this.url = URL.createObjectURL(selectedFile);



    }

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