import { defineComponent } from 'vue';


export default defineComponent({
  setup(){
    return{

    }
  },

  data(){

    return{
    }
  },

  methods:{
    
  }, 

  computed: {
    message: {
      get () {
        return this.$store.state.generalOnboarding[this.$store.state.dataType];
      },
      set (value:string) {
        this.$store.commit('updateOnboardingValue', value)
      }
    },
}
})