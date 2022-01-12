import { reactive } from "vue";
import { OnboardingScreen } from "./OnboardingScreen";

export default class Pages{

    static readonly screens = {
        "talentpool" :  reactive<OnboardingScreen>({ 
            showQuickResponseSingle: true, 
            showTextArea: true }),

        "gear" : reactive<OnboardingScreen>({ 
            showQuickResponseSingle: true, 
            showTextArea: false }), 

        "brand" : reactive<OnboardingScreen>({ 
            showQuickResponseSingle: true, 
            showTextArea: false }), 

        "model" : reactive<OnboardingScreen>({ 
            showQuickResponseSingle: true, 
            showTextArea: false }), 

        "picture" : reactive<OnboardingScreen>({ 
            showQuickResponseSingle: true, 
            showFileInput: true }), 

        "empty" : reactive<OnboardingScreen>({ 
            showQuickResponseSingle: true, 
            showTextArea: false }), 
        
    };

    
}