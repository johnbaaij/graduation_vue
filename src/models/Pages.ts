import { reactive } from 'vue';
import { OnboardingScreen } from './interfaces/OnboardingScreen.interface';

export default class Pages {
    static readonly screens = {

      itemSelection: reactive<OnboardingScreen>({
        dataType: null,
        showItemSelector: true,
      }),

      talentpool: reactive<OnboardingScreen>({
        showQuickResponseSingle: true,
        showTextArea: true,
        dataType: 'talent',
      }),

      gear: reactive<OnboardingScreen>({
        showQuickResponseSingle: true,
        showTextArea: true,
        dataType: 'gear',
      }),

      brand: reactive<OnboardingScreen>({
        showQuickResponseSingle: true,
        showTextArea: true,

        dataType: 'brand',
      }),

      model: reactive<OnboardingScreen>({
        showQuickResponseSingle: true,
        showTextArea: true,
        dataType: 'model',
      }),

      picture: reactive<OnboardingScreen>({
        showFileInput: true,
        dataType: null,
      }),

      empty: reactive<OnboardingScreen>({
        dataType: null,
      }),

      almost: reactive<OnboardingScreen>({
        dataType: null,
      }),

      size: reactive<OnboardingScreen>({
        showTextArea: true,
        dataType: 'size',
      }),

      year: reactive<OnboardingScreen>({
        dataType: 'year',
      }),

      serial: reactive<OnboardingScreen>({
        showTextArea: true,
        dataType: 'serial',
      }),

      receipt: reactive<OnboardingScreen>({
        showFileInput: true,
        dataType: null,
      }),

      notes: reactive<OnboardingScreen>({
        dataType: 'notes',
        showTextInputMulti: true,
      }),

      generalItems: reactive<OnboardingScreen>({
        dataType: null,
        showQuickResponseSingle: true,
        showTextArea: true,
      }),

      sosRelation: reactive<OnboardingScreen>({
        dataType: null,
        showQuickResponseSingle: true,
        showTextArea: true,
      }),

      sosPhone: reactive<OnboardingScreen>({
        dataType: null,
      }),

      done: reactive<OnboardingScreen>({
        dataType: null,
      }),

      final: reactive<OnboardingScreen>({
        dataType: null,
      }),
    };
}
