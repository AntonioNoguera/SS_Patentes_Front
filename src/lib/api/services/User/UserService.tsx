import { apiService } from '../../AxiosClient';
import { LoginRequest } from './Interfaces/Login/LoginRequest';
import { LoginResponse } from './Interfaces/Login/LoginResponse';
import { RegisterResponse } from './Interfaces/Register/RegisterRequest';
import { RegisterRequest } from './Interfaces/Register/RegisterResponse';

 

export class UserService {
  static async deleteUser(userId: number): Promise<void> {
    return await apiService.delete<void>(`/users/${userId}`);
  }

  static async login(credentials: LoginRequest): Promise<LoginResponse> {
    return await apiService.post<LoginResponse>('/Auth/login', credentials);
  }
  
  static async register(userData: RegisterRequest): Promise<RegisterResponse> {
    try {
        const response = await apiService.post<RegisterResponse>('/Auth/register', userData);
        return response;
    } catch (error) {
        console.error("Error en el registro:", error);
        throw new Error("No se pudo completar el registro.");
    }
  }
}