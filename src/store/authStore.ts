import API from '@/features/authentication/service/api';
import { IAuthUser } from '@/features/authentication/types/types';
import { redirect } from 'react-router-dom';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type UserRole = 'STUDENT' | 'INSTRUCTOR' | 'ADMIN' | null;
interface AuthState {
  authUser: IAuthUser | null;
  userRole: UserRole;
  setRole: (role: Exclude<UserRole, null>) => void;
  accessToken: string | null;
  refreshToken: string | null;
  login: (tokens: {
    accessToken: string;
    refreshToken: string;
  }) => Promise<void>;
  logout: () => void;
  fetchUser: () => Promise<void>;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      authUser: null,
      userRole: null,
      accessToken: null,
      refreshToken: null,

      login: async ({ accessToken, refreshToken }) => {
        set({ accessToken, refreshToken });

        // Fetch user data
        await get().fetchUser();
      },

      logout: () => {
        set({ authUser: null, accessToken: null, refreshToken: null });
        redirect('/dashboard');
      },

      fetchUser: async () => {
        try {
          const res = await API.get('/auth/me');
          console.log(res);
          set({ authUser: res.data });
          set({ userRole: res.data.data.roleName });
        } catch (error) {
          console.error(error);
          get().logout();
        }
      },
      setRole: (role) => set({ userRole: role }),
    }),
    { name: 'auth-storage' }
  )
);
