export interface OnboardingScreen {
    messageValue: string;
    showQuickResponseSingle?: boolean;
    showQuickResponseMultiple?: boolean; 
    showTextArea?: boolean; 
    showFileInput?:boolean
    setNextPage?: string;
}