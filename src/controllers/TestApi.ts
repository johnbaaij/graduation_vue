import axios, { AxiosRequestConfig, AxiosPromise } from 'axios';

const config = {
  method: 'get',
  url: 'https://pokeapi.co/api/v2/type/3',
  headers: { },
};

const getUser = async () => {
  try {
    const response = await axios.get(config.url);
    console.log(response.data.moves[1].name);
  } catch (error) {
    console.error(error);
  }
};

export default getUser;
