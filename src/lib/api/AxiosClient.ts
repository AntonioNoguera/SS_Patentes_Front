// src/services/AxiosClient.ts
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'; 
import { API_TIMEOUT, API_URL } from './Constants';

export class AxiosClient {
  public axiosInstance: AxiosInstance;   // ← de private a public

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: API_URL,
      timeout: API_TIMEOUT,
      headers: { 'Content-Type': 'application/json' },
    });
    // …igual interceptors…
  }

  async get<T>(url: string, params?: Record<string, any>, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await this.axiosInstance.get(url, { ...config, params });
    return response.data;
  }

  async post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await this.axiosInstance.post(url, data, config);
    return response.data;
  }

  async put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await this.axiosInstance.put(url, data, config);
    return response.data;
  }

  async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await this.axiosInstance.delete(url, config);
    return response.data;
  }
}

export const apiService = new AxiosClient();
