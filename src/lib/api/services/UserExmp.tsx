import { apiService } from '../axiosClient';

interface User {
  id: number;
  name: string;
  email: string;
}

export class UserService {
  static async getUsers(): Promise<User[]> {
    return await apiService.get<User[]>('/users');
  }

  static async getUserById(userId: number): Promise<User> {
    return await apiService.get<User>(`/users/${userId}`);
  }

  static async createUser(newUser: Partial<User>): Promise<User> {
    return await apiService.get<User>('/users', newUser);
  }

  static async updateUser(userId: number, updatedUser: Partial<User>): Promise<User> {
    return await apiService.get<User>(`/users/${userId}`, updatedUser);
  }

  static async deleteUser(userId: number): Promise<void> {
    return await apiService.get<void>(`/users/${userId}`);
  }
}
