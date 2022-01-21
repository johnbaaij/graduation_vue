import { reactive } from "vue";
import { OnboardingScreen } from "./interfaces/OnboardingScreen";

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

        "size" : reactive<OnboardingScreen>({ 
            showTextArea: true,
            dataType: 'size'
        }), 

        "year" : reactive<OnboardingScreen>({ 
            dataType: "year"
        }), 

        "serial" : reactive<OnboardingScreen>({ 
            showTextArea: true,
            dataType: "serial"
        }), 

        "receipt" : reactive<OnboardingScreen>({ 
            showFileInput: true,
            dataType: null
        }), 

        "notes" : reactive<OnboardingScreen>({ 
            dataType: 'notes'
        }), 

        "done" : reactive<OnboardingScreen>({ 
            dataType: null
        }), 

        
        
    };

    
}