import { defineComponent, ref } from 'vue';
import { useStore } from 'vuex';
import countries from '../../data/countries.json';

export default defineComponent({
  setup() {
    const store = useStore();
    const searchTerm = ref('');
    return {
      countries,
      searchTerm,
    };
  },

  data() {
    return {
    };
  },

  methods: {

  },

  watch: {

  },

  computed: {

    message: {
      get() {
        return this.$store.state.generalOnboarding[this.$store.state.dataType];
      },
      set(value:string) {
        this.$store.commit('updateOnboardingValue', value);
      },
    },
  },
});
