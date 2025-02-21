import { dummyStudentUserData } from '@/constant/dummy-data';
import StudentCourseCard from './StudentCourseCard';

interface Props {
  categoryId: number;
}

const StudentCourses = ({ categoryId }: Props) => {
  /*
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
  */

  const customEnrollments = dummyStudentUserData.enrollments?.filter(
    (data) => data.course?.categoryId === categoryId
  );

  if (!dummyStudentUserData.enrollments)
    return <div>enrollments not found</div>;

  return (
    <div>
      {categoryId === 0 && (
        <StudentCourseCard enrollments={dummyStudentUserData.enrollments} />
      )}
      {categoryId !== 0 && customEnrollments && (
        <StudentCourseCard enrollments={customEnrollments} />
      )}
    </div>
  );
};

export default StudentCourses;
