import axios, { AxiosResponse } from 'axios';
import Gear from '@/models/interfaces/Gear.interface';

const instance = axios.create({
  baseURL: 'http://johnbaaij.nl:3000/gear/',
  timeout: 15000,
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: (url: string) => instance.get(url).then(responseBody),
};

const Gear = {

  // SELECT DISTINCT type FROM `gear` WHERE sport = 'scuba diving'
  getGear: async (): Promise<Gear[]> => requests.get('scubapro'),
  getModels: async (talent: string, type:string, brand:string): Promise<Gear[]> => requests.get(`${talent}/${type}/${brand}`),
  // http://johnbaaij.nl:3000/brand/kite%20surfing/kiteboard
  getBrands: async (talent: string, type:string): Promise<Gear[]> => requests.get(`${talent}/${type}`),
};

export default Gear;
