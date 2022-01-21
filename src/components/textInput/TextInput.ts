import { defineComponent, ref, computed, watch } from 'vue';
import countries from '../../data/countries.json';
import { useStore } from 'vuex'


export default defineComponent({
  setup() {
    const store = useStore();
    let searchTerm = ref('')

    const selectCountry = (country:any) => {
      selectedCountry.value = country
      searchTerm.value = ''
    }

    let selectedCountry = ref('')
    return {
      countries,
      searchTerm,
      selectCountry,
      selectedCountry,    
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
      searchCountries(){
        let list:string[] = [];

        if (this.searchTerm === '') {
          this.$store.commit('addOption', []);

          return []
        }
        let matches = 0
        console.log(list)
        this.$store.commit('addOption', list);
      
        return countries.filter(country => {
          if (country.name.toLowerCase().includes(this.searchTerm.toLowerCase()) && matches < 6) {
            matches++;
            list.push(country.name);
            return country
          }
        })
      },

    message: {
      get () {
        return this.$store.state.generalOnboarding[this.$store.state.dataType];
      },
      set (value:string) {
        this.$store.commit('updateOnboardingValue', value)
      }
    },
}
})