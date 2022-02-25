import { defineComponent, onMounted } from 'vue';
import { Motion, Presence } from 'motion/vue';
import { useStore } from 'vuex';
import Pages from './models/Pages';
import OnboardingController from './controllers/OnboardingController';
import { buttonEventClick } from './controllers/FlowSwitcher';

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
import ItemSelector from './components/itemSelector/Itemselector.vue';
import TextInputMulti from './components/textInputMulti/TextInputMulti.vue';
// eslint-disable-next-line import/no-named-as-default

function getComponentCondition(type:string) {
  const i = Object(Pages.screens)[type];
  return (i);
}

export default defineComponent({
  setup() {
    const store = useStore();

    return {
      flowSelect: () => store.commit('setPage'),

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
    ItemSelector,
    TextInputMulti,
  },

  props: {
  },

  data() {
    return {

    };
  },

  methods: {

    checkForm() {
      // this.$store.commit('increment');
      buttonEventClick();
    },
    setFlow() {
      this.$store.commit('setPage');
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

    showItemSelector() {
      return getComponentCondition(this.$store.state.type).showItemSelector;
    },

    showTextInputMulti() {
      return getComponentCondition(this.$store.state.type).showTextInputMulti;
    },
  },

  updated() {
    const location = this.$store.state.type;

    if (typeof Object(Pages.screens)[location].buttonClick !== 'undefined') {
      console.log('this is undefined');
    }

    const type = Object(Pages.screens)[location].dataType;
    this.$store.commit('alterDataType', type);
    const cat = Object(Pages.screens)[location].apiCategory;
    this.$store.commit('alterCategory', cat);
    this.$store.commit('callApi');
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
