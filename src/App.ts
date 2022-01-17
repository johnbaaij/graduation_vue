import { defineComponent, reactive } from 'vue';
import { useStore } from 'vuex'
import Pages from './models/Pages';

//vue components 
import Header from './components/header/Header.vue';
import ButtonArea from './components/buttonArea/ButtonArea.vue';
import OnboardingText from './components/onboardingText/OnboardingText.vue';
import ProgressBar from './components/progressBar/ProgressBar.vue';
import TextInput from './components/textInput/TextInput.vue';
import FileInput from './components/fileInput/FileInput.vue';
import QuickResponseCheckbox from './components/quickResponseCheckbox/QuickResponseCheckbox.vue'
import { onboardingService } from './service/onboardingService';

function getComponentCondition(type:string){
  let i = Object(Pages.screens)[type] 
  return (i)
}

service: onboardingService;


export default defineComponent({

  



  setup(){
    const store = useStore();

    const service = new onboardingService();
    service.insertOnboarding();
    return {
    }

  },
    components: {
      Header,
      ButtonArea,
      OnboardingText,
      ProgressBar,
      TextInput,
      FileInput,
      QuickResponseCheckbox
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


