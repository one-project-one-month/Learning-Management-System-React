import { useEffect, useState } from 'react';
import { courseDetails, users } from '../studentCourse/types';
import { API_BASE_URL } from '@/config/serverApiConfig';
import { CourseDetailsResponse, UserResponse } from './types';
import { useParams } from 'react-router-dom';

import CourseTabs from './course-tabs';
import InstructorInfoCard from './instructor-info-card';
import CourseShareCard from './course-share-card';
import CoursePurchaseCard from './course-purchase-card';
import CourseHeader from './course-header';

export default function CourseDetails() {
  const { courseId } = useParams();

  const [courseData, setCourseData] = useState<courseDetails>();
  const [instructor, setInstructor] = useState<users>();

  useEffect(() => {
    async function getCourseById() {
      const response = await fetch(`${API_BASE_URL}/courses/${courseId}`);
      const data = (await response.json()) as CourseDetailsResponse;
      setCourseData(data.data);
    }
    getCourseById();
  }, [courseId]);

  useEffect(() => {
    async function getInstructorById() {
      if (!courseData?.instructorId) return;

      const response = await fetch(
        `${API_BASE_URL}/users/${courseData?.instructorId}`
      );
      const data = (await response.json()) as UserResponse;
      setInstructor(data.data);
    }
    getInstructorById();
  }, [courseData?.instructorId]);

  if (!courseData || !instructor) return null;

  const { lessons } = courseData;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Course Main Content - Left Side (2/3 width on large screens) */}
        <div className="lg:col-span-2 space-y-8">
          {/* Course Header */}
          <CourseHeader courseData={courseData} />

          {/* Course Tabs */}
          <CourseTabs courseData={courseData} lessons={lessons} />
        </div>

        {/* Course Sidebar - Right Side (1/3 width on large screens) */}
        <div className="lg:col-span-1">
          <div className="sticky top-8 space-y-6">
            {/* Course Purchase Card */}
            <CoursePurchaseCard courseData={courseData} />

            {/* Instructor Card */}
            <InstructorInfoCard
              courseData={courseData}
              instructor={instructor}
            />

            {/* Share Card */}
            <CourseShareCard />
          </div>
        </div>
      </div>
    </div>
  );
}
