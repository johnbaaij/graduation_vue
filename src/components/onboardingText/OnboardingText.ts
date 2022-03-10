import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';

const Component = defineComponent({

  setup() {
    const store = useStore();
    const talent = computed(() => store.state.tag.talent);
    const gear = computed(() => store.state.tag.gear);

    return {
      talent,
      gear,
    };
  },

  props: ['titleText', 'subtitleText'],
  data() {
    return {
    };
  },
});

export default Component;
