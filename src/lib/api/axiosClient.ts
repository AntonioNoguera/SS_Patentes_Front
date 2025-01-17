import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://api.example.com', // Cambia esto a tu API base
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosClient;