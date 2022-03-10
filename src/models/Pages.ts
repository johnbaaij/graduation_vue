import { reactive } from 'vue';
import i18n from '../i18n';
import { OnboardingScreen } from './interfaces/OnboardingScreen.interface';
import subTitles from './SubTitles';
import titles from './Titles';

export default class Pages {
    static screens = {

      itemSelection: reactive<OnboardingScreen>({
        title: 'itemSelection.title',
        subTitle: 'itemSelection.text',
        dataType: 'gear',
        showItemSelector: true,
        apiCategory: '',
      }),

      talentpool: reactive<OnboardingScreen>({
        showQuickResponseSingle: true,
        title: 'talentpool.title',
        subTitle: 'talentpool.text',
        showTextArea: true,
        dataType: 'talent',
        apiCategory: 'sport',
      }),

      gear: reactive<OnboardingScreen>({
        showQuickResponseSingle: true,
        title: 'gear.title',
        subTitle: 'gear.text',
        showTextArea: true,
        dataType: 'gear',
        apiCategory: 'type',
      }),

      brand: reactive<OnboardingScreen>({
        title: 'brand.title',
        subTitle: 'brand.text',
        showQuickResponseSingle: true,
        showTextArea: true,
        dataType: 'brand',
        apiCategory: 'brand',
      }),

      model: reactive<OnboardingScreen>({
        title: 'model.title',
        subTitle: 'model.text',
        showQuickResponseSingle: true,
        showTextArea: true,
        dataType: 'model',
        apiCategory: 'models',
      }),

      picture: reactive<OnboardingScreen>({
        title: 'picture.title',
        subTitle: 'picture.text',
        showFileInput: true,
        dataType: null,
        apiCategory: '',
      }),

      almost: reactive<OnboardingScreen>({
        title: 'almost.title',
        subTitle: 'almost.text',
        dataType: null,
        apiCategory: '',
        hasLongButton: true,
        buttonClick: {
          changable: true,
          destination: 'extendedFlow',
        },
      }),

      size: reactive<OnboardingScreen>({
        title: 'size.title',
        subTitle: 'size.text',
        showTextArea: true,
        dataType: 'size',
        apiCategory: '',
      }),

      year: reactive<OnboardingScreen>({
        title: 'year.title',
        subTitle: 'year.text',
        dataType: 'year',
        apiCategory: '',
        showYearInput: true,
      }),

      serial: reactive<OnboardingScreen>({
        title: 'serial.title',
        subTitle: 'serial.text',
        showTextArea: true,
        dataType: 'serial',
        apiCategory: '',
      }),

      receipt: reactive<OnboardingScreen>({
        title: 'receipt.title',
        subTitle: 'receipt.text',
        showFileInput: true,
        dataType: null,
        apiCategory: '',
      }),

      notes: reactive<OnboardingScreen>({
        title: 'notes.title',
        subTitle: 'notes.text',
        dataType: 'notes',
        showTextInputMulti: true,
        apiCategory: '',
      }),

      material: reactive<OnboardingScreen>({
        title: 'material.title',
        subTitle: 'material.text',
        dataType: 'notes',
        apiCategory: '',
        showQuickResponseSingle: true,
      }),

      generalItems: reactive<OnboardingScreen>({
        title: 'generalItems.title',
        subTitle: 'generalItems.text',
        dataType: null,
        showQuickResponseSingle: true,
        showTextArea: true,
        apiCategory: 'items',
      }),

      sosRelation: reactive<OnboardingScreen>({
        title: 'sosRelation.title',
        subTitle: 'sosRelation.text',
        dataType: null,
        showQuickResponseSingle: true,
        showTextArea: true,
        apiCategory: '',
      }),

      sosPhone: reactive<OnboardingScreen>({
        title: 'sosPhone.title',
        subTitle: 'sosPhone.text',
        dataType: null,
        apiCategory: '',
      }),

      done: reactive<OnboardingScreen>({
        title: 'done.title',
        subTitle: 'done.text',
        dataType: null,
        apiCategory: '',
        hasLongButton: true,
      }),

      newDate: reactive<OnboardingScreen>({
        title: 'newDate.title',
        subTitle: 'newDate.text',
        dataType: null,
        apiCategory: '',
        showDateInput: true,
      }),

      oldDate: reactive<OnboardingScreen>({
        title: 'oldDate.title',
        subTitle: 'oldDate.text',
        dataType: null,
        apiCategory: '',
        showDateInput: true,
      }),

      keyUsage: reactive<OnboardingScreen>({
        title: 'keyUsage.title',
        subTitle: 'keyUsage.text',
        dataType: null,
        apiCategory: 'items_keys',
      }),

      final: reactive<OnboardingScreen>({
        title: 'final.title',
        subTitle: 'final.text',
        dataType: null,
        apiCategory: '',
      }),

      dogBreed: reactive<OnboardingScreen>({
        title: 'dogBreed.title',
        subTitle: 'dogBreed.text',
        dataType: null,
        apiCategory: '',
      }),
    };
}
