import axiosClient from "axios";
import type { AxiosRequestConfig } from "axios";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../constants";

/**
 * Creates an initial 'axios' instance with custom settings.
 */
const accessToken = localStorage.getItem("access_token");
const instance = axiosClient.create({
  baseURL: API_BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json; charset=utf-8",
    "x-adpata-application": "user",
    "x-client-identifier": "web",
    Authorization: `Bearer ${accessToken}`,
  },
});

/**
 * Handle all responses. It is possible to add handlers
 * for requests, but it is omitted here for brevity.
 */
instance.interceptors.response.use(
  (res) => res.data,
  (err) => {
    if (err.response) {
      // Access Token was expired
      const navigate = useNavigate();

      const { status } = err.response;
      if (status === 402 || status === 403) {
        navigate("/login");
      }
      return Promise.reject(err.response.data);
    }
    if (err.request) {
      return Promise.reject(err.request);
    }
    return Promise.reject(err.message);
  }
);

/**
 * Replaces main `axios` instance with the custom one.
 *
 * @param cfg - Axios configuration object.
 * @returns A promise object of a response of the HTTP request with the 'data' object already
 * destructured.
 */
const axiosPrivate = <T,>(cfg: AxiosRequestConfig) =>
  instance.request<unknown, T>(cfg);

export default axiosPrivate; // Export the axiosPrivate function as the default export
