import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { API_URL, API_TIMEOUT } from './Constants';

class AxiosClient {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: API_URL,
      timeout: API_TIMEOUT,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.axiosInstance.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem('token');
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }

        const requestUrl = `${config.baseURL ?? API_URL}${config.url ?? ""}`;
        
        console.log("🔵 [REQUEST]", {
          method: config.method?.toUpperCase(),
          url: requestUrl,
          headers: config.headers,
          body: config.data,
          params: config.params,
        });

        return config;
      },
      (error) => {
        console.error("❌ [REQUEST ERROR]", error);
        return Promise.reject(error);
      }
    );

    this.axiosInstance.interceptors.response.use(
      (response) => {
        const responseUrl = `${response.config.baseURL ?? API_URL}${response.config.url ?? ""}`;

        console.log("🟢 [RESPONSE]", {
          url: responseUrl,
          status: response.status,
          data: response.data,
        });

        return response;
      },
      (error) => {
        const errorUrl = `${error.config?.baseURL ?? API_URL}${error.config?.url ?? ""}`;

        console.error("❌ [RESPONSE ERROR]", {
          url: errorUrl,
          status: error.response?.status,
          data: error.response?.data,
        });

        return Promise.reject(error);
      }
    );
  }

  async get<T>(url: string, params?: Record<string, any>, config?: AxiosRequestConfig): Promise<T> {
    console.log(`📥 [GET] Requesting: ${API_URL}${url} with params`, params);
    const response: AxiosResponse<T> = await this.axiosInstance.get(url, { ...config, params });
    console.log("📤 [GET] Response:", response.data);
    return response.data;
  }

  async post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    console.log(`📥 [POST] Requesting: ${API_URL}${url} with body`, data);
    const response: AxiosResponse<T> = await this.axiosInstance.post(url, data, config);
    console.log("📤 [POST] Response:", response.data);
    return response.data;
  }

  async put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    console.log(`📥 [PUT] Requesting: ${API_URL}${url} with body`, data);
    const response: AxiosResponse<T> = await this.axiosInstance.put(url, data, config);
    console.log("📤 [PUT] Response:", response.data);
    return response.data;
  }

  async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    console.log(`📥 [DELETE] Requesting: ${API_URL}${url}`);
    const response: AxiosResponse<T> = await this.axiosInstance.delete(url, config);
    console.log("📤 [DELETE] Response:", response.data);
    return response.data;
  }
}

export const apiService = new AxiosClient();
