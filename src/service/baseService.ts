import { idbCon, initJsStore } from "./jsstore_con";

export class BaseService {

    get connection() {
        return idbCon;
    }

}