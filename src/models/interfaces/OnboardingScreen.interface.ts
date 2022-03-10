import { Datatype, Flow, ShowComponent } from '../Types';
import { TransLatableSubtitle, TranslatableTitle } from '../types/TranslatableItems.Type';

interface buttonClick {
    changable: boolean,
    destination: Flow
}

export interface OnboardingScreen {
    title: TranslatableTitle;
    subTitle: TransLatableSubtitle;
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
