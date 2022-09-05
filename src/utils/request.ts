import axios, { AxiosError } from "axios";
import history from "./history";

const service = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 120000,
});

service.interceptors.request.use(
  (config) => {
    config.headers["Access-Control-Allow-Origin"] = "*";

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    history.push("/error");
    // eslint-disable-next-line no-restricted-globals
    location.reload();
    return Promise.reject(error);
  }
);

export default service;
