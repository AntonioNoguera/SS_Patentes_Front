import { apiService } from "../../AxiosClient";
import { Patent } from "./Interfaces/PatentResponse";

 
export class PatentService {
  private base = '/patents';

  listAll(): Promise<Patent[]> {
    return apiService.get<Patent[]>(this.base);
  }

  getById(id: string): Promise<Patent> {
    return apiService.get<Patent>(`${this.base}/${id}`);
  }

  create(data: Omit<Patent, 'patentId'>): Promise<Patent> {
    return apiService.post<Patent>(this.base, data);
  }

  update(p: Patent): Promise<Patent> {
    return apiService.put<Patent>(`${this.base}/${p.patentId}`, p);
  }

  delete(id: string): Promise<void> {
    return apiService.delete<void>(`${this.base}/${id}`);
  }
}

export const patentService = new PatentService();
