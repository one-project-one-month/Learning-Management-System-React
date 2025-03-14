import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { API_BASE_URL } from '@/config/serverApiConfig';
import { useEffect, useState } from 'react';
import { UsersResponse } from '../CourseDetails/types';
import { courses, users } from '../studentCourse/types';
import { AllCourseResponse } from '../Courses/types';
import CourseCard from '../Courses/course-card';
import { useParams } from 'react-router-dom';

export default function InstructorDetails() {
  const { instructorId } = useParams();

  const [instructor, setInstructor] = useState<users>();
  const [courses, setCourses] = useState<courses[]>();

  useEffect(() => {
    async function getInstructorById() {
      const response = await fetch(
        `${API_BASE_URL}/instructors/${instructorId}`
      );
      const data = (await response.json()) as UsersResponse;
      setInstructor(data.data);
    }
    getInstructorById();
  }, [instructorId]);

  useEffect(() => {
    async function getCoursesByInstructorId() {
      const response = await fetch(
        `${API_BASE_URL}/instructors/${instructorId}/courses`
      );
      const data = (await response.json()) as AllCourseResponse;
      setCourses(data.data);
    }
    getCoursesByInstructorId();
  }, [instructorId]);

  const studentCount = courses?.length
    ? courses?.reduce((prev, cur) => cur.studentCount + prev, 0)
    : 0;

  if (!instructor) return <div>Instructor not found</div>;

  return (
    <div className="container mt-5">
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className="lg:col-span-1 flex flex-col items-center">
          <Avatar className="w-40 h-40">
            <AvatarImage src={instructor?.profilePhoto} alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="mt-2 font-semibold">{instructor?.name}</div>
          <div className="text-slate-900 dark:text-slate-200">
            {instructor?.roleName}
          </div>

          <div className="flex items-center gap-2">
            {courses?.length && (
              <div className="text-muted-foreground text-sm">
                {courses?.length} courses
              </div>
            )}
            {!!studentCount && (
              <div className="text-muted-foreground text-sm">
                {/* <div className="text-slate-700 dark:text-slate-400 text-sm"> */}
                {studentCount} students
              </div>
            )}
          </div>
        </div>
        <div className="lg:col-span-2">
          <div className="font-semibold text-lg">About {instructor?.name}</div>
          <div>
            Marques Keith Brownlee, also known professionally as MKBHD, is an
            American YouTuber and professional ultimate frisbee player, best
            known for his technology-focused videos as well as his podcast,
            Waveform: The MKBHD Podcast. Marques posted his first YouTube videos
            while in high school, breaking down the inner workings of a HP
            Pavilion laptop he purchased with his saved allowance. His channel
            took off, and he's since made YouTube videos on smartphones,
            headphones, camcorders, smartwatches, tablets, speakers, Nike's
            self-lacing boots and Tesla's Cybertruck. More recently, he's
            interviewed thought leaders like President Barack Obama, Bill Gates
            and Mark Zuckerberg.
          </div>
          <div className="font-semibold text-lg mt-5">Instructor's Course</div>
          <div className="grid grid-cols-2 gap-3 mt-2">
            {courses?.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
