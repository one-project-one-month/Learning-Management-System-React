import { users } from '@/pages/studentCourse/types';

export const instructorUser: users = {
  id: 2,
  username: 'instructor 1',
  email: 'user1@gmail.com',
  password: '123',
  phone: 9123123123,
  dob: '1.1.2000',
  address: 'ygn',
  profilePhoto: 'https://github.com/shadcn.png',
  isAvailable: true,
  createdAt: '2/19/2025, 12:04:32 PM',
  updatedAt: '2/19/2025, 12:34:32 PM',

  roleId: 2,
  role: {
    id: 2,
    role: 'instructor',
  },

  tokenId: 1,
  instructorId: 1,
};
