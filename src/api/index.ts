import { getAccessToken } from "@/auth";
import { refreshAccessTokenFn } from "@/features/Auth/api/authApi";
import { SERVER_ENDPOINT } from "@/utils/getServerEndpoint";
import axios from "axios";

export const apiClient = axios.create({
  baseURL: `${SERVER_ENDPOINT}/`,
  withCredentials: true,
});

console.log("SERVER_ENDPOINT: ", SERVER_ENDPOINT);

apiClient.defaults.headers.common["Content-Type"] = "application/json";
apiClient.defaults.headers.common.Accept = "application/json";
apiClient.interceptors.request.use(
  async (config) => {
    const accessToken = await getAccessToken();
    if (!accessToken) {
      return Promise.reject("No access token found");
    }
    config.headers["Authorization"] = `Bearer ${accessToken}`;
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  },
);
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    const errMessage = error.response.data.message as string;
    if (errMessage.includes("not logged in") && !originalRequest._retry) {
      originalRequest._retry = true;
      await refreshAccessTokenFn();
      return apiClient(originalRequest);
    }
    if (
      errMessage.includes("not refresh") ||
      errMessage.includes("refresh Token is not provided")
    ) {
      document.location.href = "/login";
    }
    return Promise.reject(error);
  },
);
