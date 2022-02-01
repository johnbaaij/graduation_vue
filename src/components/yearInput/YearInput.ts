import {
  defineComponent,
} from 'vue';

export default defineComponent({
  setup() {
    const currentYear = new Date().getFullYear();
    const earliestYear = 1990;
    const items:string[] = [];

    for (let i = earliestYear; i <= currentYear; i += 1) {
      items.push(i.toString());
    }
    return {
      items: items.reverse(),
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

  },
});
