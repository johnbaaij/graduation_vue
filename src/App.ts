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




function getComponentCondition(type:string){
  let i = Object(Pages.screens)[type] 
  return (i)
}


export default defineComponent({

  setup(){
    const store = useStore();

    return {
    }

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

      showQuickResponseSingle(){
        return getComponentCondition(this.$store.state.type).showQuickResponseSingle;
      },

      showQuickResponseMultiple(){
        return getComponentCondition(this.$store.state.type).showQuickResponseMultiple;
      },

      showTextArea(){
        return getComponentCondition(this.$store.state.type).showTextArea;
      }, 

      showFileInput(){
        return getComponentCondition(this.$store.state.type).showFileInput;
      }, 
    }
});


