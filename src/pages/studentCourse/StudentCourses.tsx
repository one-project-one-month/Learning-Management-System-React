import StudentCourseCard from './StudentCourseCard';
import { TUserCourse } from './types';

const StudentCourses = () => {
  const courseData: TUserCourse[] = [
    {
      id: 1,
      category: ' Computer Science',
      title: 'Introduction to Computer Science',
      progress: 60,
      saved: true,
      instructor: 'Ko Lin',
    },
    {
      id: 2,
      category: ' Computer Science',
      title: 'Introduction to Computer Science',
      progress: 60,
      saved: true,
      instructor: 'Ko Lin',
    },
    {
      id: 3,
      category: ' Computer Science',
      title: 'Introduction to Computer Science',
      progress: 60,
      saved: true,
      instructor: 'Ko Lin',
    },
    {
      id: 4,
      category: ' Computer Science',
      title: 'Introduction to Computer Science',
      progress: 60,
      saved: true,
      instructor: 'Ko Lin',
    },
    {
      id: 5,
      category: ' Computer Science',
      title: 'Introduction to Computer Science',
      progress: 60,
      saved: true,
      instructor: 'Ko Lin',
    },
    {
      id: 6,
      category: ' Computer Science',
      title: 'Introduction to Computer Science',
      progress: 60,
      saved: true,
      instructor: 'Ko Lin',
    },
  ];

  return (
    <div>
      <StudentCourseCard courseData={courseData} />
    </div>
  );
};

export default StudentCourses;
