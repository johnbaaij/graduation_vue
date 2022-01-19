import { OnboardingController } from '@/controllers/OnboardingController';
import { defineComponent } from 'vue';


export default defineComponent({
  setup(){

    const controller = new OnboardingController();
    
    return{
      controller

    }
  },

  methods:{
    next():void {   },
    back():void { this.$store.commit('decrement') ; },
  }
})