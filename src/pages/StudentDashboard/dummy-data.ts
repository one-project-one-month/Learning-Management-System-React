import { TUserCourse } from '../studentCourse/types';

type CategoryType = {
  categoryId: number;
  category: string;
};

interface CourseType extends TUserCourse {
  categoryId: number;
}

export const courseDummyCategory: CategoryType[] = [
  { categoryId: 1, category: 'Computer Science' },
  { categoryId: 2, category: 'C#' },
  { categoryId: 3, category: 'JavaScript' },
];

export const courseDummyData: CourseType[] = [
  {
    id: 1,
    categoryId: 1,
    category: 'Computer Science',
    title: 'Introduction to Computer Science',
    progress: 60,
    saved: true,
    instructor: 'Ko Lin',
  },
  {
    id: 2,
    categoryId: 1,
    category: 'Computer Science',
    title: 'Computer Science',
    progress: 60,
    saved: true,
    instructor: 'Ko Lin',
  },
  {
    id: 3,
    categoryId: 2,
    category: 'C#',
    title: 'Introduction to Computer Science',
    progress: 60,
    saved: true,
    instructor: 'Ko Lin',
  },
  {
    id: 4,
    categoryId: 2,
    category: 'C#',
    title: 'C#',
    progress: 60,
    saved: true,
    instructor: 'Ko Lin',
  },
  {
    id: 5,
    categoryId: 3,
    category: 'JavaScript',
    title: 'Introduction to JavaScript',
    progress: 60,
    saved: true,
    instructor: 'Ko Lin',
  },
  {
    id: 6,
    categoryId: 3,
    category: 'JavaScript',
    title: 'JavaScript',
    progress: 60,
    saved: true,
    instructor: 'Ko Lin',
  },
];
