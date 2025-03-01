import { UserAuthInput } from '../types/types';
import API from './api';
import { useAuthStore } from '@/store/authStore';

export const loginUserFn = async (user: UserAuthInput) => {
  try {
    const res = await API.post('/auth/login', {
      email: user.email,
      password: user.password,
    });


    if (res.data.status === 'SUCCESS') {
      const { accessToken, refreshToken } = res.data.data;
      console.log('accesstoken', accessToken);
      await useAuthStore.getState().login({ accessToken, refreshToken });
    }

    return res.data;
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
