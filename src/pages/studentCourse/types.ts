export type TUserCourse = {
  id: number;
  category: string;
  title: string;
  progress: number;
  saved: boolean;
  instructor: string;
};

// checked
export interface users {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  dob: string;
  address: string;
  profilePhoto: string;
  available: boolean;
  roleName: Role;
  userId: number;
  nrc: string;
  eduBackground: string;
  createdAt: string;
  updatedAt: string;
}

export type Role = 'admin' | 'instructor' | 'student';

// checked
export interface categories {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
}

// checked
export interface courses {
  id: number;
  courseName: string;
  thumbnail: string;
  type: string;
  level: level;
  description: string;
  duration: number;
  originalPrice: number;
  currentPrice: number;
  categoryName: string;
  createdAt: string;
  updatedAt: string;
  available: boolean;
  instructorId: number;
  categoryId: number;
  socialLinkId: number;
  studentCount: number;
}

export interface courseDetails {
  id: number;
  courseName: string;
  thumbnail: string;
  type: string;
  level: level;
  description: string;
  duration: number;
  originalPrice: number;
  currentPrice: number;
  categoryName: string;
  createdAt: string;
  updatedAt: string;
  available: boolean;
  instructorId: number;
  categoryId: number;
  socialLinkId: number;
  category: categories;
  lessons: lesson[];
  socialLink: socialLinks;
  enrollment: enrollment[];
  comments: comment[];
  certificates: certificate[];
}

// checked
export interface enrollment {
  id: number;
  studentId: number;
  courseId: number;
  enrollmentDate: string;
}

export type level = 'beginner' | 'intermediate' | 'advanced';

// checked
export interface lesson {
  id: number;
  title: string;
  videoUrl: string;
  lessonDetail: string;
  available: true;
  createdAt: string;
  updatedAt: string;
  courseId: number;
}

// no include
export interface certificate {
  id: number;
  certificateTitle: string;
  certificateDetail: string;
  certificateDate: string;

  userId?: number;
  user?: users;

  courseId: number;
  course?: courses;
}

// no include
export interface socialLinks {
  id: number;
  facebook: string;
  x: string;
  telegram: string;
  phone: string;
  email: string;

  courseId?: number;
  course?: courses;
}

// no include
export interface comment {
  id: number;
  message: string;
  time: string;

  userId: number;
  user?: users;

  courseId: number;
  course?: courses;
}

// export interface pathway {}
// export interface qa {}
// export interface chat {}
