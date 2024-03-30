import axios from "axios";

const axiosBase = axios.create({
  // {FIX ME}
  // baseURL: import.meta.env.BASE_URL,
  // baseURL: process.env.BASE_URL,
  baseURL: "http://34.107.51.235/api",
});

axiosBase.interceptors.request.use(
  (config) => {
    const userLanguage = localStorage.getItem("lang");

    if (userLanguage) {
      config.headers["Accept-Language"] = userLanguage;
    }
    // Ждем бэкенд
    // const userLocation = localStorage.getItem('location')
    // if (userLocation) {
    //   config.headers['region'] = userLocation
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export const baseGetRequest = async (slug) => {
  try {
    const response = await axiosBase.get(slug);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
