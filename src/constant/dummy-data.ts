import { categories, users } from '@/pages/studentCourse/types';
import { dummyEnrollmentData } from './dummy-enrollment';

export const courseDummyCategory: categories[] = [
  { id: 1, name: 'Computer Science' },
  { id: 2, name: 'C#' },
  { id: 3, name: 'JavaScript' },
  { id: 4, name: 'React' },
  { id: 5, name: 'NextJS' },
  { id: 6, name: 'PHP' },
  { id: 7, name: 'Laravel' },
  { id: 8, name: 'NestJs' },
  { id: 9, name: 'Go' },
  { id: 10, name: 'DevOps' },
];

export const dummyStudentUserData: users = {
  id: 1,
  username: 'user 1',
  email: 'user1@gmail.com',
  password: '123',
  phone: 9123123123,
  dob: '1.1.2000',
  address: 'ygn',
  profilePhoto: 'https://github.com/shadcn.png',
  isAvailable: true,
  createdAt: '2/19/2025, 12:04:32 PM',
  updatedAt: '2/19/2025, 12:34:32 PM',

  roleId: 1,
  role: {
    id: 1,
    role: 'user',
  },

  tokenId: 1,
  studentId: 1,

  enrollments: dummyEnrollmentData,
  certificates: [
    {
      id: 1,
      courseId: 1,
      certificatePath: 'Course Completion Certificate',
      certificateDate: '2025-02-19T10:00:00Z',
    },
  ],
};
