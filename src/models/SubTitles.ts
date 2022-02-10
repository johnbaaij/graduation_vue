import i18n from '@/i18n';
import TranslatableItemsInterface from './interfaces/TranslatableItems.interface';

const text = i18n.global.t;

const subTitles:TranslatableItemsInterface = {
  talentpool: text('talentpool.text'),
  gear: text('gear.text'),
  brand: text('brand.text'),
  model: text('model.text'),
  picture: text('picture.text'),
  almost: text('almost.text'),
  serial: text('serial.text'),
  year: text('year.text'),
  size: text('size.text'),
  receipt: text('receipt.text'),
  notes: text('notes.text'),
  done: text('done.text'),
  itemSelection: text('itemSelection.text'),
  final: text('final.text'),
  generalItems: text('generalItems.text'),
  sosPhone: text('sosPhone.text'),
  sosRelation: text('sosRelation.text'),
};

export default subTitles;
