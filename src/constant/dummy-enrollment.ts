import { enrollment } from '@/pages/studentCourse/types';
import { sampleCourse } from './dummy-course';

const category = [
  'Computer Science',
  'C#',
  'Javascript',
  'React',
  'NextJs',
  'Php',
  'Laravel',
  'NestJS',
  'Go',
  'DevOps',
];

const enrollments: enrollment[] = category.map((category, index) => ({
  id: index + 1,
  enrollmentDate: '2/19/2025, 12:04:32 PM',
  isCompleted: true,
  completedDate: '2/19/2025, 12:04:32 PM',
  userId: 1,
  courseId: index + 1,
  course: sampleCourse({
    categoryId: index + 1,
    courseId: index + 1,
    courseName: `Introduction to ${category}`,
    level: 'beginner',
  }),
}));

export const dummyEnrollmentData: enrollment[] = [
  ...enrollments,
  // 11
  {
    id: 11,
    enrollmentDate: '2/19/2025, 12:04:32 PM',
    isCompleted: true,
    completedDate: '2/19/2025, 12:04:32 PM',
    userId: 1,
    courseId: 11,
    course: sampleCourse({
      categoryId: 1,
      courseId: 11,
      courseName: 'Intermediate Computer Science',
      level: 'intermediate',
    }),
  },
  // 12
  {
    id: 12,
    enrollmentDate: '2/19/2025, 12:04:32 PM',
    isCompleted: true,
    completedDate: '2/19/2025, 12:04:32 PM',
    userId: 1,
    courseId: 12,
    course: sampleCourse({
      categoryId: 1,
      courseId: 12,
      courseName: 'Advanced CS',
      level: 'advanced',
    }),
  },
];
