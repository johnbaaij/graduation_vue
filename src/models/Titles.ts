import i18n from '@/i18n';
import TranslatableItemsInterface from './interfaces/TranslatableItems.interface';

const text = i18n.global.t;

const titles:TranslatableItemsInterface = {
  talentpool: text('talentpool.title'),
  gear: i18n.global.t('gear.title'),
  brand: i18n.global.t('brand.title'),
  model: i18n.global.t('model.title'),
  picture: i18n.global.t('picture.title'),
  almost: i18n.global.t('almost.title'),
  serial: i18n.global.t('serial.title'),
  year: i18n.global.t('year.title'),
  size: i18n.global.t('size.title'),
  receipt: i18n.global.t('receipt.title'),
  notes: i18n.global.t('notes.title'),
  done: i18n.global.t('done.title'),
  itemSelection: i18n.global.t('itemSelection.title'),
  final: i18n.global.t('final.title'),
  generalItems: i18n.global.t('generalItems.title'),
  sosPhone: i18n.global.t('sosPhone.title'),
  sosRelation: i18n.global.t('sosRelation.title'),
  oldDate: i18n.global.t('oldDate.title'),
  newDate: i18n.global.t('newDate.title'),
  keyUsage: i18n.global.t('keyUsage.title'),
  dogBreed: i18n.global.t('dogBreed.title'),
  material: i18n.global.t('material.title'),
};

export default titles;
