import { reactive } from 'vue';
import i18n from '@/i18n';
import { store } from '../store';

import TranslatableItemsInterface from './interfaces/TranslatableItems.interface';

const subTitles:TranslatableItemsInterface = {
  talentpool: i18n.global.t('talentpool.text'),
  gear: i18n.global.t('gear.text', { talent: store.state.tag.talent }),
  brand: i18n.global.t('brand.text'),
  model: i18n.global.t('model.text'),
  picture: i18n.global.t('picture.text'),
  almost: i18n.global.t('almost.text'),
  serial: i18n.global.t('serial.text'),
  year: i18n.global.t('year.text'),
  size: i18n.global.t('size.text'),
  receipt: i18n.global.t('receipt.text'),
  notes: i18n.global.t('notes.text'),
  done: i18n.global.t('done.text'),
  itemSelection: i18n.global.t('itemSelection.text'),
  final: i18n.global.t('final.text'),
  generalItems: i18n.global.t('generalItems.text'),
  sosPhone: i18n.global.t('sosPhone.text'),
  sosRelation: i18n.global.t('sosRelation.text'),
  oldDate: i18n.global.t('oldDate.text'),
  newDate: i18n.global.t('newDate.text'),
  keyUsage: i18n.global.t('keyUsage.text'),
  dogBreed: i18n.global.t('dogBreed.text'),
  material: i18n.global.t('material.text'),
};

export default subTitles;
