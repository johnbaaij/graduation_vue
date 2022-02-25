import { defineComponent, ref } from 'vue';
import { Vue } from 'vue-class-component';
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const store = useStore();
    const searchTerm = ref('');
    return {
      searchTerm,
    };
  },

  data() {
    return {
    };
  },

  props: {
    key: {
      default: 0,
    },

  },

  methods: {
    methodThatForcesUpdate() {
      // ...
      this.$forceUpdate(); // Notice we have to use a $ here
      // ...
    },

  },

  watch: {

  },

  computed: {

    searchCountries() {
      const values = this.$store.state.apiResults.data;
      const basicList = this.$store.state.apiResults.data;
      const list:string[] = [];

      if (this.searchTerm === '') {
        return this.$store.state.apiResults.data;
      }
      let matches = 0;
      this.$store.commit('addOption', list);
      return values.filter((item:any) => {
        if (item.item.toLowerCase().includes(this.searchTerm.toLowerCase()) && matches < 6) {
          // eslint-disable-next-line no-plusplus
          matches++;
          list.push(item);
        }
        return item;
      });
    },

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
