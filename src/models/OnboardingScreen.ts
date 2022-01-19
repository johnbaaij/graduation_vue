type Datatype = 'gear' | 'brand' | 'talent' | 'model' | null;
type ShowComponent = true;

export interface OnboardingScreen {
    showQuickResponseSingle?: ShowComponent;
    showQuickResponseMultiple?: ShowComponent; 
    showTextArea?: ShowComponent; 
    showFileInput?:ShowComponent;
    dataType:Datatype;
}