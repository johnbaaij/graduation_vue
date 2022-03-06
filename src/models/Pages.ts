import { reactive } from 'vue';
import { OnboardingScreen } from './interfaces/OnboardingScreen.interface';

export default class Pages {
    static readonly screens = {

      itemSelection: reactive<OnboardingScreen>({
        dataType: 'gear',
        showItemSelector: true,
        apiCategory: '',
      }),

      talentpool: reactive<OnboardingScreen>({
        showQuickResponseSingle: true,
        showTextArea: true,
        dataType: 'talent',
        apiCategory: 'sport',
      }),

      gear: reactive<OnboardingScreen>({
        showQuickResponseSingle: true,
        showTextArea: true,
        dataType: 'gear',
        apiCategory: 'type',
      }),

      brand: reactive<OnboardingScreen>({
        showQuickResponseSingle: true,
        showTextArea: true,
        dataType: 'brand',
        apiCategory: 'brand',
      }),

      model: reactive<OnboardingScreen>({
        showQuickResponseSingle: true,
        showTextArea: true,
        dataType: 'model',
        apiCategory: 'models',
      }),

      picture: reactive<OnboardingScreen>({
        showFileInput: true,
        dataType: null,
        apiCategory: '',
      }),

      empty: reactive<OnboardingScreen>({
        dataType: null,
        apiCategory: '',
      }),

      almost: reactive<OnboardingScreen>({
        dataType: null,
        apiCategory: '',
        hasLongButton: true,
        buttonClick: {
          changable: true,
          destination: 'extendedFlow',
        },
      }),

      size: reactive<OnboardingScreen>({
        showTextArea: true,
        dataType: 'size',
        apiCategory: '',
      }),

      year: reactive<OnboardingScreen>({
        dataType: 'year',
        apiCategory: '',
        showYearInput: true,
      }),

      serial: reactive<OnboardingScreen>({
        showTextArea: true,
        dataType: 'serial',
        apiCategory: '',
      }),

      receipt: reactive<OnboardingScreen>({
        showFileInput: true,
        dataType: null,
        apiCategory: '',
      }),

      notes: reactive<OnboardingScreen>({
        dataType: 'notes',
        showTextInputMulti: true,
        apiCategory: '',
      }),

      material: reactive<OnboardingScreen>({
        dataType: 'notes',
        apiCategory: '',
        showQuickResponseSingle: true,
      }),

      generalItems: reactive<OnboardingScreen>({
        dataType: null,
        showQuickResponseSingle: true,
        showTextArea: true,
        apiCategory: 'items',
      }),

      sosRelation: reactive<OnboardingScreen>({
        dataType: null,
        showQuickResponseSingle: true,
        showTextArea: true,
        apiCategory: '',
      }),

      sosPhone: reactive<OnboardingScreen>({
        dataType: null,
        apiCategory: '',
      }),

      done: reactive<OnboardingScreen>({
        dataType: null,
        apiCategory: '',
        hasLongButton: true,
      }),

      newDate: reactive<OnboardingScreen>({
        dataType: null,
        apiCategory: '',
        showDateInput: true,
      }),

      oldDate: reactive<OnboardingScreen>({
        dataType: null,
        apiCategory: '',
        showDateInput: true,
      }),

      keyUsage: reactive<OnboardingScreen>({
        dataType: null,
        apiCategory: 'items_keys',
      }),

      final: reactive<OnboardingScreen>({
        dataType: null,
        apiCategory: '',
      }),

      dogBreed: reactive<OnboardingScreen>({
        dataType: null,
        apiCategory: '',
      }),
    };
}
