import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL;

const axiosBase = axios.create({
  baseURL: baseURL,
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
    //   config.headers['Accept-region'] = userLocation
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

const axiosPersonal = axios.create({
  baseURL: `${baseURL}/users`,
});

axiosPersonal.interceptors.request.use(async (config) => {
  if (config.url === "/profile/" || config.url === "/logout/") {
    const token = localStorage.getItem("access");
    config.headers = {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
    };
    return config;
  }
  if (config.url === "/refresh/") {
    config.data = { refresh: localStorage.getItem("refresh") };
    return config;
  }
  return config;
});

axiosPersonal.interceptors.response.use(
  (response) => {
    if (response.config.url === "/login/" && response.status === 200) {
      localStorage.setItem("access", response.data.access);
      localStorage.setItem("refresh", response.data.refresh);
      return response;
    }
    if (response.config.url === "/refresh/" && response.status === 200) {
      console.log("Access Token refresh");
      localStorage.setItem("access", response.data.access);
      return response;
    }
    if (response.config.url === "/logout/" && response.status === 205) {
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
      return response;
    }
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    console.log(originalRequest);
    if (
      error.response.status === 401 &&
      localStorage.getItem("refresh") != null
    ) {
      await axiosPersonal.post("/refresh/");
      return axiosPersonal(originalRequest);
    }
    return Promise.reject(error);
  },
);

export const usersRequester = async (endpoint, data) => {
  try {
    if (!data) {
      const response = await axiosPersonal.get(`${endpoint}`);
      return response;
    }
    const response = await axiosPersonal.post(`${endpoint}`, data);
    return response;
  } catch (error) {
    console.error(error);
  }
};
