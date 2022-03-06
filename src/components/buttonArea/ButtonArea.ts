import { computed, defineComponent, ref } from 'vue';
import { useStore } from 'vuex';
import OnboardingController from '@/controllers/OnboardingController';
// eslint-disable-next-line import/named

export default defineComponent({
  setup() {
    const store = useStore();
    const controller = new OnboardingController();

    return {
      store,
      controller,
      longBtnIsActive: computed(() => store.state.hasLongButton),
    };
  },

  methods: {
    back():void { this.$store.commit('decrement'); },
    // clicked():void { buttonEventClick(); },
  },
});
