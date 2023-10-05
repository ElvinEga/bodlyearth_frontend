import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../constants";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: API_BASE_URL, // Replace with your API base URL
});

const setAuthorizationHeader = (accessToken: string) => {
  axiosInstance.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${accessToken}`;
};

const useAxiosPrivate = async (config: AxiosRequestConfig) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate();

  await axiosInstance(config)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      const { status } = error.response;
      if (status === 402 || status === 403) {
        navigate("/login");
      }
    });
};

export { setAuthorizationHeader, useAxiosPrivate };
