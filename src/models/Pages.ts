import { reactive } from 'vue';
import { OnboardingScreen } from './interfaces/OnboardingScreen.interface';

export default class Pages {
    static readonly screens = {

      itemSelection: reactive<OnboardingScreen>({
        title: '',
        subTitle: '',
        dataType: 'gear',
        showItemSelector: true,
        apiCategory: '',
      }),

      talentpool: reactive<OnboardingScreen>({
        showQuickResponseSingle: true,
        title: '',
        subTitle: '',
        showTextArea: true,
        dataType: 'talent',
        apiCategory: 'sport',
      }),

      gear: reactive<OnboardingScreen>({
        showQuickResponseSingle: true,
        title: '',
        subTitle: '',
        showTextArea: true,
        dataType: 'gear',
        apiCategory: 'type',
      }),

      brand: reactive<OnboardingScreen>({
        title: '',
        subTitle: '',
        showQuickResponseSingle: true,
        showTextArea: true,
        dataType: 'brand',
        apiCategory: 'brand',
      }),

      model: reactive<OnboardingScreen>({
        title: '',
        subTitle: '',
        showQuickResponseSingle: true,
        showTextArea: true,
        dataType: 'model',
        apiCategory: 'models',
      }),

      picture: reactive<OnboardingScreen>({
        title: '',
        subTitle: '',
        showFileInput: true,
        dataType: null,
        apiCategory: '',
      }),

      empty: reactive<OnboardingScreen>({
        title: '',
        subTitle: '',
        dataType: null,
        apiCategory: '',
      }),

      almost: reactive<OnboardingScreen>({
        title: '',
        subTitle: '',
        dataType: null,
        apiCategory: '',
        hasLongButton: true,
        buttonClick: {
          changable: true,
          destination: 'extendedFlow',
        },
      }),

      size: reactive<OnboardingScreen>({
        title: '',
        subTitle: '',
        showTextArea: true,
        dataType: 'size',
        apiCategory: '',
      }),

      year: reactive<OnboardingScreen>({
        title: '',
        subTitle: '',
        dataType: 'year',
        apiCategory: '',
        showYearInput: true,
      }),

      serial: reactive<OnboardingScreen>({
        title: '',
        subTitle: '',
        showTextArea: true,
        dataType: 'serial',
        apiCategory: '',
      }),

      receipt: reactive<OnboardingScreen>({
        title: '',
        subTitle: '',
        showFileInput: true,
        dataType: null,
        apiCategory: '',
      }),

      notes: reactive<OnboardingScreen>({
        title: '',
        subTitle: '',
        dataType: 'notes',
        showTextInputMulti: true,
        apiCategory: '',
      }),

      material: reactive<OnboardingScreen>({
        title: '',
        subTitle: '',
        dataType: 'notes',
        apiCategory: '',
        showQuickResponseSingle: true,
      }),

      generalItems: reactive<OnboardingScreen>({
        title: '',
        subTitle: '',
        dataType: null,
        showQuickResponseSingle: true,
        showTextArea: true,
        apiCategory: 'items',
      }),

      sosRelation: reactive<OnboardingScreen>({
        title: '',
        subTitle: '',
        dataType: null,
        showQuickResponseSingle: true,
        showTextArea: true,
        apiCategory: '',
      }),

      sosPhone: reactive<OnboardingScreen>({
        title: '',
        subTitle: '',
        dataType: null,
        apiCategory: '',
      }),

      done: reactive<OnboardingScreen>({
        title: '',
        subTitle: '',
        dataType: null,
        apiCategory: '',
        hasLongButton: true,
      }),

      newDate: reactive<OnboardingScreen>({
        title: '',
        subTitle: '',
        dataType: null,
        apiCategory: '',
        showDateInput: true,
      }),

      oldDate: reactive<OnboardingScreen>({
        title: '',
        subTitle: '',
        dataType: null,
        apiCategory: '',
        showDateInput: true,
      }),

      keyUsage: reactive<OnboardingScreen>({
        title: '',
        subTitle: '',
        dataType: null,
        apiCategory: 'items_keys',
      }),

      final: reactive<OnboardingScreen>({
        title: '',
        subTitle: '',
        dataType: null,
        apiCategory: '',
      }),

      dogBreed: reactive<OnboardingScreen>({
        title: '',
        subTitle: '',
        dataType: null,
        apiCategory: '',
      }),
    };
}
