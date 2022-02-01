import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const options:AxiosRequestConfig = { method: 'GET', url: 'http://johnbaaij.nl:3000/gear/' };

export default function (brand:string) {
  const fetchData = async () => {
    options.url += brand;
    try {
      axios.request(options).then((response) => response.data).catch((error) => {
        console.error(error);
      });
    } catch (errors) {
      console.log('');
    }
  };
  return {};
}

function useAxios(brand:string):any {
  options.url += brand;
  axios.request(options).then((response) => response.data).catch((error) => {
    console.error(error);
  });
}
