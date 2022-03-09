import { computed, defineComponent, ref } from 'vue';
import { useStore } from 'vuex';
// eslint-disable-next-line import/named

export default defineComponent({
  setup() {
    const store = useStore();

    return {
      store,
      longBtnIsActive: computed(() => store.state.hasLongButton),
    };
  },

  methods: {
    back():void { this.$store.commit('decrement'); },
    // clicked():void { buttonEventClick(); },
  },
});
