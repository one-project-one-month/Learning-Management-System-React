import { courseDetails, users } from '../studentCourse/types';

export type CourseDetailsResponse = {
  status: string;
  data: courseDetails;
  error: null;
  message: string;
  details: null;
};

export type UserResponse = {
  status: string;
  data: users;
  error: null;
  message: string;
  details: null;
};
