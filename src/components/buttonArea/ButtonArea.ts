import { defineComponent } from 'vue';
import OnboardingController from '@/controllers/OnboardingController';

export default defineComponent({
  setup() {
    const controller = new OnboardingController();

    return {
      controller,

    };
  },

  methods: {
    back():void { this.$store.commit('decrement'); },
  },
});
