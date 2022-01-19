import { reactive } from "vue";
import { OnboardingScreen } from "./OnboardingScreen";

export default class Pages{

    static readonly screens = {
        "talentpool" :  reactive<OnboardingScreen>({ 
            showQuickResponseSingle: true, 
            showTextArea: true,
            dataType:'talent' 
        }),

        "gear" : reactive<OnboardingScreen>({ 
            showQuickResponseSingle: true, 
            showTextArea: true,
            dataType:'gear'
         }), 

        "brand" : reactive<OnboardingScreen>({ 
            showQuickResponseSingle: true, 
            showTextArea: true,

            dataType: 'brand'
        }), 

        "model" : reactive<OnboardingScreen>({ 
            showQuickResponseSingle: true, 
            showTextArea: true,
            dataType: 'model'
        }), 

        "picture" : reactive<OnboardingScreen>({ 
            showFileInput: true,
            dataType: null
        }), 

        "empty" : reactive<OnboardingScreen>({ 
            dataType: null
         }), 

        "almost" : reactive<OnboardingScreen>({ 
            dataType: null
        }), 
        
    };

    
}