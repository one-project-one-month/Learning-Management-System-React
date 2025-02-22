import { UserAuthInput } from '../types/types';
import API from './api';
import { useAuthStore } from '@/store/authStore';

export const loginUserFn = async (user: UserAuthInput) => {
  try {
    const res = await API.post('/auth/login', {
      email: user.email,
      password: user.password,
    });

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
