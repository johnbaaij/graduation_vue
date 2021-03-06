import { defineComponent } from 'vue';

const Component = defineComponent({

  components: {
  },
  props: {
  },
  data() {
    return {
      url: '',

    };
  },

  methods: {

    onFileSelected(event:any): void{
      const selectedFile = event.target.files[0];
      this.url = URL.createObjectURL(selectedFile);
      console.log(this.url);
    },

  },

  computed: {

    displayPhoto() {
      return this.$store.state.displayPhoto;
    },

    displayFile() {
      return this.$store.state.displayFile;
    },
  },
});

export default Component;
