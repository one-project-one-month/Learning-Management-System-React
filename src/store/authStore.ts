import API from '@/features/authentication/service/api';
import { IUser } from '@/features/authentication/types/types';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type UserRole = 'student' | 'instructor' | 'admin' | null;
interface AuthState {
  authUser: IUser | null;
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
      userRole: 'student',
      accessToken: null,
      refreshToken: null,

      login: async ({ accessToken, refreshToken }) => {
        set({ accessToken, refreshToken });

        // Fetch user data
        await get().fetchUser();
      },

      logout: () => {
        set({ authUser: null, accessToken: null, refreshToken: null });
      },

      fetchUser: async () => {
        try {
          const res = await API.get('/auth/me');
          set({ authUser: res.data });
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
