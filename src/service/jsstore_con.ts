/* eslint-disable import/no-webpack-loader-syntax */
/* eslint-disable global-require */

// TODO 'This needs to be checked to see if it only triggers once'
import {
  IDataBase, DATA_TYPE, ITable, Connection,
} from 'jsstore';
import itemObj from './item.json';

const getWorkerPath = () => {
  if (process.env.NODE_ENV === 'development') {
    return require('file-loader?name=scripts/[name].[hash].js!jsstore/dist/jsstore.worker.js');
  }

  return require('file-loader?name=scripts/[name].[hash].js!jsstore/dist/jsstore.worker.min.js');
};

// This will ensure that we are using only one instance.
// Otherwise due to multiple instance multiple worker will be created.
const workerPath = getWorkerPath().default;

export const dbname = 'Booom';
export const idbCon = new Connection(new Worker(workerPath));

const getDatabase = () => {
  const tblItem: ITable = itemObj;
  const dataBase: IDataBase = {
    name: dbname,
    tables: [tblItem],
  };
  return dataBase;
};

export const initJsStore = (): void => {
  try {
    const dataBase = getDatabase();
    idbCon.initDb(dataBase);
  } catch (ex) {
    console.error(ex);
  }
};
