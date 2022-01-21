import { defineComponent, reactive } from 'vue';
import { useStore } from 'vuex'
import Pages from './models/Pages';
import { OnboardingController } from './controllers/OnboardingController';
import { Motion, Presence } from "motion/vue"



//vue components 
import Header from './components/header/Header.vue';
import ButtonArea from './components/buttonArea/ButtonArea.vue';
import OnboardingText from './components/onboardingText/OnboardingText.vue';
import ProgressBar from './components/progressBar/ProgressBar.vue';
import TextInput from './components/textInput/TextInput.vue';
import FileInput from './components/fileInput/FileInput.vue';
import QuickResponseCheckbox from './components/quickResponseCheckbox/QuickResponseCheckbox.vue'
import QuickResponseRadio from './components/quickResponseRadio/QuickResponseRadio.vue';
import YearInput from './components/yearInput/YearInput.vue';

function getComponentCondition(type:string){

  let i = Object(Pages.screens)[type] 
  return (i)
}

export default defineComponent({
  setup(){
    const store = useStore();

    let uname = document.querySelector("#uname");
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
      QuickResponseCheckbox,
      QuickResponseRadio, 
      Motion,
      Presence,
      YearInput
    },

    props: {
    },

    data() {

      return{

      }
     
    },

    mounted() {
    },

    methods:{

      checkForm: function(){
        this.$store.commit('increment');
      },

    },

    computed:{

      current(){
        return this.$store.state.count
      },

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
    }, 

    updated(){
      let i = Object(Pages.screens)[this.$store.state.type].dataType;
      this.$store.commit('alterDataType', i)
    },

    beforeUnmount(){
      let data = {
        gear:'test',
        brand:'test2',
        model:'test3'
      }
      const controller = new OnboardingController();
      controller.onboardingSafe(data);
      console.log("this runs");

    }
});


