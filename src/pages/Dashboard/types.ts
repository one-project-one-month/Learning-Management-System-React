import { users } from '../studentCourse/types';

export interface admins {
  id: number;
  userId: number;
  users: users[];
}

export interface students {
  id: number;
  userId: number;
  users: users[];
}

export interface role {
  id: number;
  role: Role;
}

export type Role = 'admin' | 'instructor' | 'user';
