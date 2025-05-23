// src/mocks/axiosMockAdapter.ts
import MockAdapter from 'axios-mock-adapter';  
import { patentMockData } from './patentMockData';
import { Patent } from '@services/Patent/Interfaces/PatentResponse';
import { apiService } from '../AxiosClient';

export function setupAxiosMocks() {
  const mock = new MockAdapter(apiService.axiosInstance, { delayResponse: 500 });

  // GET /patents
  mock.onGet('/patents').reply(200, patentMockData);

  // GET /patents/:id
  mock.onGet(/\/patents\/\w+/).reply(config => {
    const id = config.url!.split('/').pop()!;
    const p = patentMockData.find(x => x.patentId === id);
    return p ? [200, p] : [404];
  });

  // POST /patents
  mock.onPost('/patents').reply(config => {
    const newP: Patent = JSON.parse(config.data);
    newP.patentId = Date.now().toString();
    patentMockData.push(newP);
    return [201, newP];
  });

  // PUT /patents/:id
  mock.onPut(/\/patents\/\w+/).reply(config => {
    const id = config.url!.split('/').pop()!;
    const updated: Patent = JSON.parse(config.data);
    const idx = patentMockData.findIndex(x => x.patentId === id);
    if (idx === -1) return [404];
    patentMockData[idx] = updated;
    return [200, updated];
  });

  // DELETE /patents/:id
  mock.onDelete(/\/patents\/\w+/).reply(config => {
    const id = config.url!.split('/').pop()!;
    const idx = patentMockData.findIndex(x => x.patentId === id);
    if (idx === -1) return [404];
    patentMockData.splice(idx, 1);
    return [204];
  });
}
