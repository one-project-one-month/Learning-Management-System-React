import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Link } from 'react-router-dom';
import { courses } from '../studentCourse/types';
import { Card } from '@/components/ui/card';

interface Props {
  course: courses;
  categoryName: string | undefined;
}

const bgColors = [
  'bg-indigo-300',
  'bg-red-300',
  'bg-green-300',
  'bg-blue-300',
  'bg-yellow-300',
  'bg-purple-300',
];

export default function CourseCard1({ course, categoryName }: Props) {
  const totalStudents = course.enrollments?.length;

  return (
    <Link to={`/courses/${course.id}`}>
      <Card
        className={`${
          bgColors[course.id % bgColors.length]
        } border-[#000] border-2 hover:scale-105 transition-all delay-150 dark:text-black`}
      >
        <div className="relative grow">
          <img
            src="/src/assets/LMS.png"
            alt="lms"
            className="w-full rounded-xl"
          />
          <div
            className={
              'absolute top-1 right-2 py-0.5 px-1.5 rounded-full bg-yellow-500'
            }
          >
            {course.level}
          </div>
          <div className="m-2 mt-1">
            <div className="flex justify-between">
              {/* link to instructor profile */}
              <Link to={'/category'} className="flex items-center gap-1">
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shad-cn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>{course.instructor.users?.username}</div>
              </Link>
              <div className="flex flex-col text-sm font-thin items-end">
                <div>{course.duration}</div>
                {totalStudents && <div>{totalStudents}students</div>}
              </div>
            </div>
            <div className="font-bold text-lg mt-1">{course.courseName}</div>
          </div>
        </div>
        <div className="m-2">
          <div
            className={`bg-orange-500 py-0.5 px-1.5 rounded-full bg-opacity-75 w-fit`}
          >
            {categoryName}
          </div>
        </div>
      </Card>
    </Link>
  );
}
