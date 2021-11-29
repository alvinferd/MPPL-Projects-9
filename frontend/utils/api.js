import axios from "axios"
import Cookies from 'js-cookie'

// export const TOKEN_KEY = "f32e5b8d0762f05d6f494146988164b24674fa7c";
export const TOKEN_KEY = "dG9rZW5TaW1hbGFi";

function handleRequestSend(config) {
  const token = Cookies.get(TOKEN_KEY);
  if (!!token) config.headers.Authorization = `Token ${token}`;
  console.log(config);
  return config;
}

function handleRequestError(error) {
  // console.dir(error);
  return Promise.reject(error);
}

function handleResponseReceive(response) {
  // console.dir(response);
  return response.data;
}

function handleResponseError(error) {
  // console.dir(error);
  return Promise.reject(error.response ? error.response.data : error);
}

const baseApi = axios.create({
  baseURL: "http://103.41.205.191:10001",
  headers: {
    // "Content-Type": "multipart/form-data",
    post: {
      "Content-Type": "multipart/form-data",
      // "Access-Control-Allow-Origin": "*",
    },
    get: {
      // "Access-Control-Allow-Credentials": "true"
    },
  },
});
baseApi.interceptors.request.use(handleRequestSend, handleRequestError);
baseApi.interceptors.response.use(handleResponseReceive, handleResponseError);

export default baseApi;