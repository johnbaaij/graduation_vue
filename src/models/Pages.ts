import { reactive } from "vue";
import { OnboardingScreen } from "./OnboardingScreen";

export default class Pages{

    static readonly screens = {
        "talent" :  reactive<OnboardingScreen>({ 
            messageValue: 'Vue 3 Guide', 
            showQuickResponseSingle: true, 
            showTextArea: true }),

        "gear" : reactive<OnboardingScreen>({ 
            messageValue: 'Vue 3 Guide', 
            showQuickResponseSingle: true, 
            showTextArea: false }), 

        "brand" : reactive<OnboardingScreen>({ 
            messageValue: 'Vue 3 Guide', 
            showQuickResponseSingle: true, 
            showTextArea: false }), 

        "model" : reactive<OnboardingScreen>({ 
            messageValue: 'Vue 3 Guide', 
            showQuickResponseSingle: true, 
            showTextArea: false }), 

        "picture" : reactive<OnboardingScreen>({ 
            messageValue: 'Vue 3 Guide', 
            showQuickResponseSingle: true, 
            showTextArea: false }), 
    };

    
}