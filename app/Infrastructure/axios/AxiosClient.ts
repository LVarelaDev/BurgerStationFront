import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api/";

class AxiosClient {
  private static instance: AxiosInstance;

  private constructor() {}

  public static getInstance(): AxiosInstance {
    if (!AxiosClient.instance) {
      AxiosClient.instance = axios.create({
        baseURL: API_BASE_URL,
        timeout: 10000,
        headers: {
          "Content-Type": "application/json",
        },
      });

      this.setupInterceptors();
    }
    return AxiosClient.instance;
  }

  private static setupInterceptors() {
    AxiosClient.instance.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem("authToken");
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    AxiosClient.instance.interceptors.response.use(
      (response: AxiosResponse) => response,
      (error) => {
        if (error.response) {
          switch (error.response.status) {
            case 401:
              console.error("No autorizado - redirigir a login");
              break;
            case 403:
              console.error("Prohibido - sin permisos");
              break;
            case 404:
              console.error("Recurso no encontrado");
              break;
            default:
              console.error("Error del servidor");
          }
        }
        return Promise.reject(error);
      }
    );
  }
}

export const apiClient = AxiosClient.getInstance();
