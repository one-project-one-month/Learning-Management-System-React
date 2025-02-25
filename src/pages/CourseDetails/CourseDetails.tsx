import { sampleCourse } from '@/constant/dummy-course';
import { Link, useParams } from 'react-router-dom';

import { Button } from '@/components/ui/button';

import InstructorInfo from './instructor-info';
import { useState } from 'react';
import CourseComments from './course-comments';
import CourseLessons from './course-lessons';

export default function CourseDetails() {
  const { courseId } = useParams();
  const [addCart, setAddCart] = useState(false);

  const enroll = false;

  const course = sampleCourse({
    categoryId: 1,
    courseId: +courseId!,
    courseName: 'Introduction to Computer Science',
    level: 'beginner',
  });

  const { lesson, comments, instructor } = course;
  const totalStudents = course.enrollments?.length;
  const totalComments = comments?.length;

  return (
    <main className="p-2 pl-3">
      <div className="flex sm:flex-col lg:flex-row sm:gap-3">
        <div>
          <div className="text-2xl font-bold">{course.courseName}</div>
          <div className="text-sm font-thin mt-1">{totalStudents} students</div>
          <div>
            <span className="font-semibold text-sm">Created by</span>

            {/* link to instructor profile */}
            <Link to={'/'} className="underline text-blue-500 ml-1 text-sm">
              {course.instructor.users?.username}
            </Link>
          </div>
          <div>
            <div className="font-semibold mt-2">Description</div>
            <div className="text-wrap">{course.description}</div>
          </div>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <img
            src="/src/assets/LMS.png"
            alt="lms"
            className="rounded-xl h-auto max-w-sm"
          />
          <Button
            variant={'destructive'}
            className="w-full"
            onClick={() => setAddCart((add) => !add)}
          >
            {addCart ? 'Added' : enroll ? 'Enrolled' : 'Add to Cart'}
          </Button>
        </div>
      </div>

      {/* Explore related category */}
      {/* <div>
        <div className="font-semibold">Explore related category</div>
        <Link to={'/'}>
          <Button variant={'secondary'}>
            {
              courseDummyCategory.find((data) => data.id === course.categoryId)
                ?.name
            }
          </Button>
        </Link>
      </div> */}

      {/* Course Lessons */}
      <CourseLessons lessons={lesson!} />

      {/* Instructor */}
      <InstructorInfo
        instructor={instructor}
        totalStudents={totalStudents!}
        totalComment={totalComments!}
      />

      {/* Comments */}
      <CourseComments comments={comments!} />
    </main>
  );
}
