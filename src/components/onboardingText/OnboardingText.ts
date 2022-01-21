import { defineComponent } from 'vue';
import i18n from '@/i18n';
import  {titles}  from '@/models/Titles';
import { subTitles } from '@/models/SubTitles';


//this function gets a value from the Vuex state and passes it through the object to get the proper title 
function getTitle(type:string){
  let i = Object(titles)[type] 
  return (i)
}

//this function gets a value from the Vuex state and passes it through the object to get the proper description/subtitle
function getText(type:string){
  let i = Object(subTitles)[type] 
  return (i)
}

const Component = defineComponent({
  props: {
  },

  computed: {
    heading() {
      return getTitle(this.$store.state.type);
    },

    text() {
      return getText(this.$store.state.type); 
    }
  },
});

export default Component;
