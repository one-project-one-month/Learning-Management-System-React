import { TUserCourse } from '../studentCourse/types';

type CategoryType = {
  categoryId: number;
  name: string;
};

interface CourseType extends TUserCourse {
  categoryId: number;
}

export const courseDummyCategory: CategoryType[] = [
  { categoryId: 1, name: 'Computer Science' },
  { categoryId: 2, name: 'C#' },
  { categoryId: 3, name: 'JavaScript' },
  { categoryId: 4, name: 'React' },
  { categoryId: 5, name: 'NextJS' },
  { categoryId: 6, name: 'PHP' },
  { categoryId: 7, name: 'Laravel' },
  { categoryId: 8, name: 'NestJs' },
  { categoryId: 9, name: 'Go' },
  { categoryId: 10, name: 'DevOps' },
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
