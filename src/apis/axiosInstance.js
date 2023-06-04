import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (request) => {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) request.headers["Authorization"] = `Bearer ${accessToken}`;
    return request;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);
