import { courses, users } from '../studentCourse/types';

export interface instructors {
  id: number;
  userId: number;
  nrc: string;
  eduBackground: string;

  users?: users;
  courses?: courses[];
}
