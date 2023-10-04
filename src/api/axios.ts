import axios from "axios";
import { API_BASE_URL } from "../constants";

export default axios.create({
  baseURL: API_BASE_URL,
});

export const axiosPrivate = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "x-adpata-application": "user",
    "x-client-identifier": "web",
  },
  withCredentials: false,
});
