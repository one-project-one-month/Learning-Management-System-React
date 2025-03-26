import { getAllCourses } from '@/services';
import { useQuery } from '@tanstack/react-query';
import CourseDataTable from './course-data-table';

const InstructorDashboard = () => {
  const {
    data: allCourses,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ['allCourses'],
    queryFn: getAllCourses,
    staleTime: 60 * 1000,
  });

  // console.log('allCourses >>>', allCourses);

  if (isError) return <div>Something Wrong</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!allCourses) return null;

  return (
    <div>
      <div className="font-semibold">Instructor Dashboard</div>

      <CourseDataTable courses={allCourses} />
    </div>
  );
};

export default InstructorDashboard;
