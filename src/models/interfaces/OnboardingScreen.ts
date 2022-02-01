import { Datatype, ShowComponent } from '../Types';

export interface OnboardingScreen {
    showQuickResponseSingle?: ShowComponent;
    showQuickResponseMultiple?: ShowComponent;
    showTextArea?: ShowComponent;
    showFileInput?:ShowComponent;
    dataType:Datatype;
}
