import axios, { AxiosResponse } from 'axios';
import Gear from '@/models/interfaces/Gear.interface';

interface apiInformation {
  category:string,
  sport:string | undefined,
  brand:string | undefined,
  type:string | undefined,
  model:string | undefined
}

const instance = axios.create({
  baseURL: 'http://johnbaaij.nl:3000/',
  timeout: 15000,
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: (url: string) => instance.get(url).then(responseBody),
};

function createURL(parameters:apiInformation):string {
  // eslint-disable-next-line prefer-const
  let url = `${parameters.category}?`;

  if (parameters.sport !== undefined) {
    url += `&sport=${parameters.sport}`;
  }

  if (parameters.brand !== undefined) {
    url += `&brand=${parameters.brand}`;
  }

  if (parameters.type !== undefined) {
    url += `&type=${parameters.type}`;
  }

  if (parameters.model !== undefined) {
    url += `&models=${parameters.model}`;
  }

  url = url.replace(/ /g, '%20');

  console.log(`http://johnbaaij.nl:3000/${url}`);

  return url;
}

const Calls = {

  // SELECT DISTINCT type FROM `gear` WHERE sport = 'scuba diving'
  getRequest: async (parameters: apiInformation): Promise<Gear> => requests.get(createURL(parameters)),
};

export default Calls;
