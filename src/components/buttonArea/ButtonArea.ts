import { defineComponent } from 'vue';
import OnboardingController from '@/controllers/OnboardingController';
// eslint-disable-next-line import/named
import { buttonEventClick } from '@/controllers/FlowSwitcher';

export default defineComponent({
  setup() {
    const controller = new OnboardingController();

    return {
      controller,

    };
  },

  methods: {
    back():void { this.$store.commit('decrement'); },
    // clicked():void { buttonEventClick(); },
  },
});
