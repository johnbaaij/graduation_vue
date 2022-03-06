import { computed, defineComponent, ref } from 'vue';
import { Vue } from 'vue-class-component';
import { useStore } from 'vuex';

export default defineComponent({

  setup() {
    const date = new Date();

    const store = useStore();
    const now = computed(() => date.toLocaleDateString());
    console.log(now);

    return {
      store,
      now,
    };
  },

  data() {
    return {
    };
  },

  props: {

  },

  methods: {

  },

  watch: {

  },

  computed: {

  },
});
