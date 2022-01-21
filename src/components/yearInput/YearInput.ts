import { defineComponent, ref, computed, watch } from 'vue';
import { useStore } from 'vuex'


export default defineComponent({
  setup() {

    let currentYear = new Date().getFullYear();  
    let earliestYear = 1990;    
    let items:string[] =[]
    
    for (let i = earliestYear; i <= currentYear; i++) {
        items.push(i.toString())
    }
    return {
        items :items.reverse()
    }
  },

  data(){

    return{
    }
  },

  methods:{
    
  }, 

  watch:{

  },

  computed: {
      
}
})