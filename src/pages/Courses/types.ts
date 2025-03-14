import { categories, courses, users } from '../studentCourse/types';

export type AllCourseResponse = {
  status: string;
  data: courses[];
  error: null;
  message: string;
  details: null;
};

export type AllUsersResponse = {
  status: string;
  data: users[];
  error: null;
  message: string;
  details: null;
};

export type AllCategoryResponse = {
  status: string;
  data: categories[];
  error: null;
  message: string;
  details: null;
};
