import { Options, Vue } from 'vue-class-component';
import Header from './components/header/Header.vue';
import ButtonArea from './components/buttonArea/ButtonArea.vue';
import OnboardingText from './components/onboardingText/OnboardingText.vue';
import QuickResponseArea from './components/quickResponseArea/QuickResponseArea.vue';
import ProgressBar from './components/progressBar/ProgressBar.vue';

@Options({
  components: {
    Header,
    ButtonArea,
    OnboardingText,
    QuickResponseArea,
    ProgressBar,
  },

  props: {

  },

})

export default class App extends Vue {

}
