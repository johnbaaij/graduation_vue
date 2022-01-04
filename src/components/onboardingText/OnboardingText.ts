import { defineComponent } from 'vue';
import i18n from '@/i18n';

function getTitle(count:number):string {
  let value = '';
  switch (count) {
    case 1:
      value = i18n.global.t('talentpool.title');
      break;
    case 2:
      value = i18n.global.t('gear.title');
      break;
    case 3:
      value = i18n.global.t('brand.title');
      break;
    case 4:
      value = i18n.global.t('model.title');
      break;
    case 5:
      value = i18n.global.t('picture.title');
      break;
    case 6:
      value = i18n.global.t('almost.title');
      break;
    default:
      // code block
  }
  return value;
}

function getText(count:number):string {
  let value = '';
  switch (count) {
    case 1:
      value = i18n.global.t('talentpool.text');
      break;
    case 2:
      value = i18n.global.t('gear.text');
      break;
    case 3:
      value = i18n.global.t('brand.text');
      break;
    case 4:
      value = i18n.global.t('model.text');
      break;
    case 5:
      value = i18n.global.t('picture.text');
      break;
    case 6:
      value = i18n.global.t('almost.text');
      break;
    default:
      // code block
  }
  return value;
}

const Component = defineComponent({
  props: {
  },

  computed: {
    heading() {
      return getTitle(this.$store.state.count);
    },
  },
});

export default Component;
