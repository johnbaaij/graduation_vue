import { defineComponent } from 'vue';
import { Motion, Presence } from 'motion/vue';
import Pages from './models/Pages';
import OnboardingController from './controllers/OnboardingController';

// vue components
import Header from './components/header/Header.vue';
import ButtonArea from './components/buttonArea/ButtonArea.vue';
import OnboardingText from './components/onboardingText/OnboardingText.vue';
import ProgressBar from './components/progressBar/ProgressBar.vue';
import TextInput from './components/textInput/TextInput.vue';
import FileInput from './components/fileInput/FileInput.vue';
import QuickResponseCheckbox from './components/quickResponseCheckbox/QuickResponseCheckbox.vue';
import QuickResponseRadio from './components/quickResponseRadio/QuickResponseRadio.vue';
import YearInput from './components/yearInput/YearInput.vue';
import getUser from './controllers/TestApi';

function getComponentCondition(type:string) {
  const i = Object(Pages.screens)[type];
  return (i);
}

export default defineComponent({
  setup() {
    getUser();
    return {

    };
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
    YearInput,
  },

  props: {
  },

  data() {
    return {

    };
  },

  methods: {

    checkForm() {
      this.$store.commit('increment');
    },

  },

  computed: {

    current() {
      return this.$store.state.count;
    },

    showQuickResponseSingle() {
      return getComponentCondition(this.$store.state.type).showQuickResponseSingle;
    },

    showQuickResponseMultiple() {
      return getComponentCondition(this.$store.state.type).showQuickResponseMultiple;
    },

    showTextArea() {
      return getComponentCondition(this.$store.state.type).showTextArea;
    },

    showFileInput() {
      return getComponentCondition(this.$store.state.type).showFileInput;
    },
  },

  updated() {
    const i = Object(Pages.screens)[this.$store.state.type].dataType;
    this.$store.commit('alterDataType', i);
  },

  beforeUnmount() {
    const data = {
      gear: 'test',
      brand: 'test2',
      model: 'test3',
    };
    const controller = new OnboardingController();
    controller.onboardingSafe(data);
    console.log('this runs');
  },
});
