export interface IUser {
  id: string;
  name: string;
  email: string;
  role: string;
  username: string;
  createdAt: unknown;
  updatedAt: unknown;
}

export interface GenericResponse {
  status: string;
  message: string;
}

export interface ILoginResponse {
  status: string;
  access_token: string;
}

export interface IUserResponse {
  status: string;
  data: {
    user: IUser;
  };
}

export type UserAuthInput = {
  email: string;
  password: string;
  role?: 'student' | 'instructor' | 'admin';
};
