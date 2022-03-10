import { computed, defineComponent, ref } from 'vue';
import { Vue } from 'vue-class-component';
import { useStore } from 'vuex';

export default defineComponent({

  setup() {
    const date = new Date();

    const store = useStore();
    const now = computed(() => '18-10-1995');
    console.log(now.value);

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
