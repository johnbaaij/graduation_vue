import { Options, Vue } from 'vue-class-component';

@Options({

  data() {
    return {
    };
  },
  components: {

  },

  props: {

  },

  methods: {
    start():void { this.$store.commit('increment'); },
    back():void { this.$store.commit('decrement'); },

  },

})
export default class ButtonArea extends Vue {}
