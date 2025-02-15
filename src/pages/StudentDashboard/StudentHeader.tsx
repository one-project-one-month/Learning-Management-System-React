import { useState } from 'react';
import CourseDropdownMenu from './course-dropdown-menu';

export default function StudentHeader() {
  const [courseId, setCourseId] = useState(0);
  console.log('courseId >>>', courseId);

  return (
    <header className="h-20 w-full flex justify-between items-center px-2 ">
      <div className="text-xl font-bold">My Courses</div>

      <div className="flex flex-row gap-2 justify-between items-center">
        <CourseDropdownMenu onId={setCourseId} />
        <div className="border-[1px] border-black rounded-md p-1 m-2 ">
          Marketing
        </div>
        <div className="border-[1px] border-black rounded-md p-1 m-2 ">
          Computer Science
        </div>
        <div className="border-[1px] border-black rounded-md p-1 m-2 ">
          React
        </div>
      </div>
    </header>
  );
}
