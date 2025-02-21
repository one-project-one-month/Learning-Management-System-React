import { tokens } from '../auth/types';
import { admins, role, students } from '../Dashboard/types';
import { instructors } from '../InstructorDashboard/types';

export type TUserCourse = {
  id: number;
  category: string;
  title: string;
  progress: number;
  saved: boolean;
  instructor: string;
};

export interface users {
  id: number;
  username: string;
  email: string;
  password: string;
  phone: number;
  dob: string;
  address: string;
  profilePhoto: string;
  isAvailable: boolean;
  createdAt: string;
  updatedAt?: string;

  roleId: number;
  role?: role;

  tokenId: number;
  token?: tokens;

  studentId?: number;
  student?: students;

  instructorId?: number;
  instructor?: instructors;

  adminId?: number;
  admin?: admins;

  enrollments?: enrollment[];

  certificates?: certificate[];
}

export interface categories {
  id: number;
  name: string;

  courses?: courses[];
}

export interface courses {
  id: number;
  courseName: string;
  thumbnail: string;
  isAvailable: boolean;
  type: string;
  level: level;
  description: string;
  duration: string;
  originalPrice: number;
  currentPrice: number;
  createdAt: string;
  updatedAt: string;

  categoryId: number;
  category?: categories;

  instructorId: number;
  instructor: instructors;

  socialLinksId: number;
  socialLinks: socialLinks;

  lesson?: lesson[];

  enrollments?: enrollment[];

  comments?: comment[];

  certificate: certificate;
}

export interface enrollment {
  id: number;
  enrollmentDate: string;
  isCompleted: boolean;
  completedDate: string;

  userId: number;
  user?: users;

  courseId: number;
  course?: courses;
}

export type level = 'beginner' | 'intermediate' | 'advanced';

export interface lesson {
  id: number;
  title: string;
  videoUrl: string;
  lessonDetail: string;
  isAvailable: boolean;
  createdAt: string;
  updatedAt: string;

  courseId: number;
  course?: courses;
}

export interface certificate {
  id: number;
  certificatePath: string;
  certificateDate: string;

  userId?: number;
  user?: users;

  courseId: number;
  course?: courses;
}

export interface socialLinks {
  id: number;
  facebook: string;
  x: string;
  telegram: string;
  phone: string;
  email: string;

  courseId: number;
  course?: courses;
}

export interface comment {
  id: number;
  message: string;
  time: string;

  courseId: number;
  course?: courses;
}

// export interface pathway {}
// export interface qa {}
// export interface chat {}
