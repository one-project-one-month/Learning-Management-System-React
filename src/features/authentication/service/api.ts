import axios from 'axios';
import { useAuthStore } from '../../../store/authStore';
import { API_BASE_URL } from '../../../config/serverApiConfig';

const API = axios.create({
  baseURL: API_BASE_URL,
});

// Add access token to every request
API.interceptors.request.use((config) => {
  const token = useAuthStore.getState().accessToken;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
