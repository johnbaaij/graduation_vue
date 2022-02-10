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
  getGear: async (): Promise<Gear[]> => requests.get('scubapro'),
  getModels: (talent: string, type:string, brand:string): Promise<Gear[]> => requests.get(`${talent}/${type}/${brand}`),
};

export default Gear;
