import { defineComponent, reactive } from 'vue';
import { useStore } from 'vuex'
import Header from './components/header/Header.vue';
import ButtonArea from './components/buttonArea/ButtonArea.vue';
import OnboardingText from './components/onboardingText/OnboardingText.vue';
import QuickResponseArea from './components/quickResponseArea/QuickResponseArea.vue';
import ProgressBar from './components/progressBar/ProgressBar.vue';
import TextInput from './components/textInput/TextInput.vue';
import FileInput from './components/fileInput/FileInput.vue';
import {OnboardingScreen} from './models/OnboardingScreen';
import Pages from './models/Pages';




function getDisplay(type:string){
  let i = Object(Pages.screens)[type] 
  return (i)
}


export default defineComponent({

  setup(){
    const store = useStore()


    let onboarding = getDisplay("Talent")

    return {onboarding}

  },
    components: {
      Header,
      ButtonArea,
      OnboardingText,
      QuickResponseArea,
      ProgressBar,
      TextInput,
      FileInput
    },

    props: {
    },

    data() {
    },


    mounted() {
    },

    computed:{
      showTextArea(){
        return getDisplay(this.$store.state.type).showTextArea;
      }


      
    }
});


