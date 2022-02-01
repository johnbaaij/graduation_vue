import { idbCon } from './jsstore_con';

class BaseService {
  // eslint-disable-next-line class-methods-use-this
  get connection():any {
    return idbCon;
  }
}

export default BaseService;
