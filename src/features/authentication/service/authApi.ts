import { API_BASE_URL } from '@/config/serverApiConfig';
import axios from 'axios';
import { ILoginResponse, UserAuthInput } from '../types/types';
import API from './api';
import { useAuthStore } from '@/store/authStore';

export const authApi = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

authApi.defaults.headers.common['Content-Type'] = 'application/json';

export const refreshAccessTokenFn = async () => {
  const response = await authApi.get<ILoginResponse>('auth/refresh');
  return response.data;
};

authApi.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    const errMessage = error.response.data.message as string;
    if (errMessage.includes('not logged in') && !originalRequest._retry) {
      originalRequest._retry = true;
      const { access_token } = await refreshAccessTokenFn();
      authApi.defaults.headers.common['Authorization'] =
        `Bearer ${access_token}`;
      return authApi(originalRequest);
    }
    return Promise.reject(error);
  }
);

export const loginUserFn = async (user: UserAuthInput) => {
  try {
    const res = await API.post('/auth/login', user);

    const { accessToken, refreshToken } = res.data;
    await useAuthStore.getState().login({ accessToken, refreshToken });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchUser = async () => {
  try {
    const res = await API.get('/auth/me');
    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// export const signUpUserFn = async (user: UserAuthInput) => {
//   const response = await authApi.post<GenericResponse>('auth/register', user);
//   return response.data;
// };

// export const getMeFn = async () => {
//   const response = await authApi.get<IUserResponse>('users/me');
//   return response.data;
// };

// export const logoutUserFn = async () => {
//   const response = await authApi.get<GenericResponse>('auth/logout');
//   return response.data;
// };
