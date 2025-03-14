import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Link } from 'react-router-dom';
import { courses } from '../studentCourse/types';
import { formatPrice } from '@/utils';
import { useQuery } from '@tanstack/react-query';
import { getInstructorById } from '@/services';

interface Props {
  course: courses;
}

export default function CourseCard({ course }: Props) {
  const {
    data: instructor,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['instructor', course.instructorId],
    queryFn: () => getInstructorById(course.instructorId),
    // staleTime: 60 * 1000,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Something Wrong</div>;
  if (!instructor) return null;

  return (
    <div
      className={
        'bg-[#f7f7f5] border-[#575757] border border-1 dark:text-black rounded-md flex flex-col h-full'
      }
    >
      <Link to={`/courses/${course.id}`} className="flex-grow">
        {/* Image section */}

        <div className="relative">
          <img
            src={course.thumbnail}
            alt="lms"
            className="w-full rounded-t-md"
          />
          <div
            className={
              'absolute top-1 right-2 py-0.5 px-1.5 rounded-full bg-yellow-500'
            }
          >
            {course.level}
          </div>
        </div>

        {/* Content section */}
        <div className="m-2 mt-1 flex flex-col flex-grow">
          <div className="font-bold text-lg mt-1">{course.courseName}</div>
          <div className="mt-0.5 text-sm text-slate-700">
            {course.description.slice(0, 50)}...
          </div>
        </div>
      </Link>

      {/* Instructor and price */}
      <div className="mt-auto m-2">
        <Link
          to={`/instructor/${course.instructorId}`}
          className="flex items-center justify-between gap-1"
        >
          <div className="flex items-center">
            <Avatar>
              <AvatarImage src={instructor?.profilePhoto} alt="@shad-cn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="text-sm font-semibold">{instructor?.name}</div>
          </div>
          <div className="flex flex-col items-end">
            <div className="text-[11px] text-slate-700">
              {course.studentCount} students
            </div>
            <div className="text-sm text-slate-700">
              {formatPrice(course.currentPrice)}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
