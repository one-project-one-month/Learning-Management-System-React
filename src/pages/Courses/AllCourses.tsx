import { useEffect, useState } from 'react';
import CourseCard from './course-card';
import ExploreNavigationMenu from './explore-navigation-menu.';
import { useDebounce } from '@uidotdev/usehooks';
import { useSearchContext } from '@/provider/search-provider';
import { useQuery } from '@tanstack/react-query';
import { getAllCourses } from '@/services';

export default function AllCourses() {
  const [category, setCategory] = useState(0);
  const { searchText, setSearchText } = useSearchContext();
  const debounceSearch = useDebounce(searchText, 500);

  useEffect(() => {
    setSearchText('');
  }, [setSearchText, category]);

  const {
    data: allCourses,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ['allCourses'],
    queryFn: getAllCourses,
    staleTime: 60 * 1000,
  });

  if (isError) return <div>Something Wrong</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!allCourses) return null;

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
        {/* <SearchInput search={search} onSearch={setSearch} /> */}
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {category === 0 &&
          searchCourses.length === 0 &&
          allCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        {category !== 0 &&
          searchCourses.length === 0 &&
          allCourses
            .filter((data) => data.categoryId === category)
            .map((course) => <CourseCard key={course.id} course={course} />)}

        {searchCourses.length !== 0 &&
          searchCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
      </div>
    </main>
  );
}
