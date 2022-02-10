import i18n from '@/i18n';
import TranslatableItemsInterface from './interfaces/TranslatableItems.interface';

const text = i18n.global.t;

const titles:TranslatableItemsInterface = {
  talentpool: text('talentpool.title'),
  gear: text('gear.title'),
  brand: text('brand.title'),
  model: text('model.title'),
  picture: text('picture.title'),
  almost: text('almost.title'),
  serial: text('serial.title'),
  year: text('year.title'),
  size: text('size.title'),
  receipt: text('receipt.title'),
  notes: text('notes.title'),
  done: text('done.title'),
  itemSelection: text('itemSelection.title'),
  final: text('final.title'),
  generalItems: text('generalItems.title'),
  sosPhone: text('sosPhone.title'),
  sosRelation: text('sosRelation.title'),
};

export default titles;
