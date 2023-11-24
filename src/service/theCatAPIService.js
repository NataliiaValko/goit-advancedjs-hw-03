import axios from 'axios';

const API_KEY =
  'live_Id2MBArVFPzA7WO4yuLCpdsnvzEt5N7fl0uDnipf1ZLtwi2Bxa6A8279Yd2vBbD9';
const BASE_URL = ' https://api.thecatapi.com/v1';

export const theCatAPI = axios.create({
  baseURL: BASE_URL,
  headers: { 'x-api-key': API_KEY },
});

// axios.defaults.baseURL = BASE_URL;
// axios.defaults.headers.common['x-api-key'] = API_KEY;
