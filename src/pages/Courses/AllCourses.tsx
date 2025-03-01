import { useEffect, useState } from 'react';
import CourseCard from './course-card';
import ExploreNavigationMenu from './explore-navigation-menu.';
import SearchInput from './SearchInput';
import { courses } from '../studentCourse/types';
import { sampleCourse } from '@/constant/dummy-course';
import { courseDummyCategory } from '@/constant/dummy-data';
import { useDebounce } from '@uidotdev/usehooks';

export default function AllCourses() {
  const [category, setCategory] = useState(0);
  const [search, setSearch] = useState('');
  const debounceSearch = useDebounce(search, 500);

  useEffect(() => {
    setSearch('');
  }, [category]);

  const beginner: courses[] = courseDummyCategory.map((category, index) =>
    sampleCourse({
      categoryId: category.id,
      courseId: index + 1,
      courseName: `Introduction to ${category.name}`,
      level: 'beginner',
    })
  );
  const intermediate: courses[] = courseDummyCategory.map((category, index) =>
    sampleCourse({
      categoryId: category.id,
      courseId: index + 11,
      courseName: `Intermediate ${category.name}`,
      level: 'intermediate',
    })
  );
  const advanced: courses[] = courseDummyCategory.map((category, index) =>
    sampleCourse({
      categoryId: category.id,
      courseId: index + 21,
      courseName: `Advanced ${category.name}`,
      level: 'advanced',
    })
  );

  const allCourses: courses[] = [...beginner, ...intermediate, ...advanced];

  const searchCourses =
    debounceSearch !== ''
      ? allCourses.filter((data) =>
          data.courseName.toLowerCase().includes(debounceSearch)
        )
      : [];

  // console.log('searchCourses.length >>>', searchCourses.length);

  return (
    <main>
      <div className="flex gap-3 items-center mb-3">
        <div className="text-lg font-bold mb-1">All Courses</div>
        <ExploreNavigationMenu onCategoryId={setCategory} />
        <SearchInput search={search} onSearch={setSearch} />
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {category === 0 &&
          searchCourses.length === 0 &&
          allCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              categoryName={
                courseDummyCategory.find(
                  (category) => category.id === course.categoryId
                )?.name
              }
            />
          ))}
        {category !== 0 &&
          searchCourses.length === 0 &&
          allCourses
            .filter((data) => data.categoryId === category)
            .map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                categoryName={
                  courseDummyCategory.find(
                    (category) => category.id === course.categoryId
                  )?.name
                }
              />
            ))}

        {searchCourses.length !== 0 &&
          searchCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              categoryName={
                courseDummyCategory.find(
                  (category) => category.id === course.categoryId
                )?.name
              }
            />
          ))}
      </div>
    </main>
  );
}
