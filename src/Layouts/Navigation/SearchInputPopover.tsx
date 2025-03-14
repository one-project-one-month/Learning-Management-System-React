import { useEffect, useState } from 'react';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { courses } from '../../pages/studentCourse/types';
import { API_BASE_URL } from '@/config/serverApiConfig';
import { AllCourseResponse } from '../../pages/Courses/types';
import { useDebounce } from '@uidotdev/usehooks';
import { Link } from 'react-router-dom';

export default function SearchInputPopover() {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [courses, setCourses] = useState<courses[]>([]);
  const debounceSearch = useDebounce(search, 500);

  useEffect(() => {
    async function getAllCourses() {
      const response = await fetch(`${API_BASE_URL}/courses`);
      const data = (await response.json()) as AllCourseResponse;
      setCourses(data.data);
    }
    getAllCourses();
  }, []);

  const searchCourses =
    debounceSearch !== ''
      ? courses.filter((course) =>
          course.courseName.toLowerCase().includes(search)
        )
      : [];

  return (
    <div>
      <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
        <PopoverTrigger asChild>
          <input
            value={search}
            type="text"
            placeholder="Search..."
            className="w-full max-w-xs p-2  text-sm outline-none bg-transparent  "
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            onFocus={() => setPopoverOpen(true)}
            onBlur={() => setPopoverOpen(false)}
          />
        </PopoverTrigger>
        <PopoverContent className="w-80 sm:w-[450px] md:w-[600px] mr-20 sm:mr-20">
          {searchCourses.length === 0 && (
            <div className="font-semibold h-20">Search Any Course</div>
          )}
          <div className="grid gap-4">
            {searchCourses.length !== 0 &&
              searchCourses.map((searchCourse) => (
                <Link
                  to={`/courses/${searchCourse.id}`}
                  className="flex items-center p-1 gap-2"
                  key={searchCourse.id}
                  onClick={() => setSearch('')}
                >
                  <img
                    src={searchCourse.thumbnail}
                    className="w-24 rounded-md"
                  />
                  <div className="font-semibold text-sm">
                    {searchCourse.courseName}
                  </div>
                </Link>
              ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
