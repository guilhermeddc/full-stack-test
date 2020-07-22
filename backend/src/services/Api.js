import axios from 'axios';

const Api = axios.create({
  baseURL: 'https://api.punkapi.com/v2',
});

export default Api;
