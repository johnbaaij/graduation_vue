import { defineComponent } from 'vue';
import i18n from '@/i18n';

//Text object. This object contains every title that is displayed on a page 
const titles ={
  talentpool: i18n.global.t('talentpool.title'),
  gear:       i18n.global.t('gear.title'),
  brand:      i18n.global.t('brand.title'),
  model:      i18n.global.t('model.title'),
  picture:    i18n.global.t('picture.title'),
  almost:     i18n.global.t('almost.title')  
}

//Text object. This object contains every subtitle/description that is displayed on a page 
const text ={
  talentpool: i18n.global.t('talentpool.text'),
  gear:       i18n.global.t('gear.text'),
  brand:      i18n.global.t('brand.text'),
  model:      i18n.global.t('model.text'),
  picture:    i18n.global.t('picture.text'),
  almost:     i18n.global.t('almost.text')  
}

//this function gets a value from the Vuex state and passes it through the object to get the proper title 
function getTitle(type:string){
  let i = Object(titles)[type] 
  return (i)
}

//this function gets a value from the Vuex state and passes it through the object to get the proper description/subtitle
function getText(type:string){
  let i = Object(text)[type] 
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
