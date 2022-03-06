import { computed, defineComponent, onMounted } from 'vue';
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
import DateInput from './components/dateInput/DateInput.vue';
// eslint-disable-next-line import/no-named-as-default

function getComponentCondition(type:string) {
  const i = Object(Pages.screens)[type];
  return (i);
}

export default defineComponent({
  setup() {
    const store = useStore();
    const location = store.state.type;

    const current = computed(() => store.state.count);
    // form elements
    const showQuickResponseSingle = computed(() => getComponentCondition(store.state.type).showQuickResponseSingle);
    const showQuickResponseMultiple = computed(() => getComponentCondition(store.state.type).showQuickResponseMultiple);
    const showTextArea = computed(() => getComponentCondition(store.state.type).showTextArea);
    const showFileInput = computed(() => getComponentCondition(store.state.type).showFileInput);
    const showItemSelector = computed(() => getComponentCondition(store.state.type).showItemSelector);
    const showTextInputMulti = computed(() => getComponentCondition(store.state.type).showTextInputMulti);
    const showDateInput = computed(() => getComponentCondition(store.state.type).showDateInput);
    return {
      flowSelect: () => store.commit('setPage'),
      location,
      current,
      showQuickResponseSingle,
      showQuickResponseMultiple,
      showTextArea,
      showFileInput,
      showItemSelector,
      showTextInputMulti,
      showDateInput,
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
    DateInput,
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

  updated() {
    const location = this.$store.state.type;

    if (getComponentCondition(location).buttonClick?.changable) {
      this.$store.commit('changeButtonEvent', getComponentCondition(this.$store.state.type).buttonClick.destination);
    }

    if (getComponentCondition(location).hasLongButton) {
      this.$store.commit('changeLongButtonState', true);
    } else {
      this.$store.commit('changeLongButtonState', false);
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
