import axios, { AxiosInstance } from 'axios';

const apiClient: AxiosInstance = axios.create({
  baseURL: 'http://johnbaaij.nl:3000',
  headers: {
    'Content-type': 'application/json',
  },
});

export default apiClient;
