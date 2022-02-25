import { Datatype, Flow, ShowComponent } from '../Types';

interface buttonClick {
    changable: boolean,
    destination: Flow
}

export interface OnboardingScreen {
    showQuickResponseSingle?: ShowComponent;
    showQuickResponseMultiple?: ShowComponent;
    showTextArea?: ShowComponent;
    showFileInput?:ShowComponent;
    showItemSelector?:ShowComponent;
    showTextInputMulti?:ShowComponent;
    buttonClick?: buttonClick;
    dataType:Datatype;
    apiCategory:string;
}
