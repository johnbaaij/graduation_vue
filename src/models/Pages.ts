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
      }),

      size: reactive<OnboardingScreen>({
        showTextArea: true,
        dataType: 'size',
        apiCategory: '',
      }),

      year: reactive<OnboardingScreen>({
        dataType: 'year',
        apiCategory: '',
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

      generalItems: reactive<OnboardingScreen>({
        dataType: null,
        showQuickResponseSingle: true,
        showTextArea: true,
        apiCategory: '',
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
      }),

      final: reactive<OnboardingScreen>({
        dataType: null,
        apiCategory: '',
      }),
    };
}
