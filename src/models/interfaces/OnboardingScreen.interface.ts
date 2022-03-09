import { Datatype, Flow, ShowComponent } from '../Types';

interface buttonClick {
    changable: boolean,
    destination: Flow
}

export interface OnboardingScreen {
    title: string;
    subTitle: string;
    showQuickResponseSingle?: ShowComponent;
    showQuickResponseMultiple?: ShowComponent;
    showTextArea?: ShowComponent;
    showFileInput?:ShowComponent;
    showItemSelector?:ShowComponent;
    showTextInputMulti?:ShowComponent;
    showDateInput?:ShowComponent;
    showYearInput?: ShowComponent;
    buttonClick?: buttonClick;
    hasLongButton?: boolean;
    dataType:Datatype;
    apiCategory:string;
}
