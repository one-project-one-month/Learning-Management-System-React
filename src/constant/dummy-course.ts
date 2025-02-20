import { courses, level } from '@/pages/studentCourse/types';
import { instructorUser } from './dummy-instructor';

interface Props {
  courseId: number;
  categoryId: number;
  courseName: string;
  level: level;
}

export const sampleCourse = ({
  courseId,
  categoryId,
  courseName,
  level,
}: Props): courses => ({
  id: courseId,

  categoryId: categoryId,

  courseName,
  thumbnail: 'https://example.com/thumbnail.jpg',
  isAvailable: true,
  type: 'Online',
  level,
  description: `A comprehensive course designed to introduce you to the world of programming. You'll learn the ${courseName} and how to write simple programs.`,
  duration: '3 months',
  originalPrice: 299.99,
  currentPrice: 149.99,
  createdAt: '2025-02-19T08:00:00Z',
  updatedAt: '2025-02-19T08:00:00Z',

  instructorId: 1,
  instructor: {
    id: 1,
    userId: 2,
    nrc: '',
    eduBackground: '',
    users: instructorUser,
    // courses: [],
  },

  socialLinksId: 3,
  socialLinks: {
    id: 1,
    facebook: 'https://facebook.com/johndoe',
    x: 'https://twitter.com/johndoe',
    telegram: 't.me/123',

    phone: '09123123123',
    email: 'sample@gmail.com',

    courseId,
  },

  lesson: [
    {
      id: 1,
      title: `Introduction to ${courseName}`,
      // duration: "2 hours",
      videoUrl: '',
      lessonDetail: `Learn the basics of ${courseName} and how to get started with writing code.`,
      isAvailable: true,
      createdAt: '2/19/2025, 12:04:32 PM',
      updatedAt: '2/19/2025, 12:04:32 PM',
      courseId,
    },
    {
      id: 2,
      title: 'Variables and Data Types',
      videoUrl: '',
      lessonDetail:
        'Understand variables, data types, and how to use them in programming.',
      isAvailable: true,
      createdAt: '2/19/2025, 12:04:32 PM',
      updatedAt: '2/19/2025, 12:04:32 PM',
      courseId,
    },
    {
      id: 3,
      title: 'Function',
      videoUrl: '',
      lessonDetail: 'Understand Function, and how to use them in programming.',
      isAvailable: true,
      createdAt: '2/19/2025, 12:04:32 PM',
      updatedAt: '2/19/2025, 12:04:32 PM',
      courseId,
    },
    {
      id: 4,
      title: 'Class',
      videoUrl: '',
      lessonDetail: 'Understand Class, and how to use them in programming.',
      isAvailable: true,
      createdAt: '2/19/2025, 12:04:32 PM',
      updatedAt: '2/19/2025, 12:04:32 PM',
      courseId,
    },
  ],

  enrollments: [
    {
      id: 1,
      enrollmentDate: '2/19/2025, 12:04:32 PM',
      isCompleted: true,
      completedDate: '2/19/2025, 12:04:32 PM',
      userId: 1,
      courseId,
    },
    {
      id: 2,
      enrollmentDate: '2/19/2025, 12:04:32 PM',
      isCompleted: false,
      completedDate: '2/19/2025, 12:04:32 PM',
      userId: 2,
      courseId,
    },
    {
      id: 3,
      enrollmentDate: '2/19/2025, 12:04:32 PM',
      isCompleted: false,
      completedDate: '2/19/2025, 12:04:32 PM',
      userId: 3,
      courseId,
    },
    {
      id: 4,
      enrollmentDate: '2/19/2025, 12:04:32 PM',
      isCompleted: false,
      completedDate: '2/19/2025, 12:04:32 PM',
      userId: 4,
      courseId,
    },
  ],

  comments: [
    {
      id: 1,
      message: 'Great course! Really helped me understand',
      time: '2025-02-20T10:00:00Z',
      courseId,
    },
    {
      id: 2,
      message: 'Very informative. The instructor was clear and concise.',
      time: '2025-02-18T10:00:00Z',
      courseId,
    },
  ],

  certificate: {
    id: 1,
    courseId,
    certificatePath: `Course Completion Certificate ${courseName}`,
    certificateDate: '2025-02-19T10:00:00Z',
  },
});
