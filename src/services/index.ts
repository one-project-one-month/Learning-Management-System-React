import API from '@/features/authentication/service/api';
import { UserResponse } from '@/pages/CourseDetails/types';
import { AllCategoryResponse, AllCourseResponse } from '@/pages/Courses/types';

export async function getAllCourses() {
  try {
    const response = await API.get<AllCourseResponse>('/courses');

    const data = response.data;
    // console.log('res axios >>>', response.data);

    return data.data;
  } catch (error) {
    throw new Error(`fail to fetch all courses ${error}`);
  }
}

export async function getAllCategories() {
  try {
    const response = await API.get<AllCategoryResponse>('/category');
    const data = response.data;

    return data.data;
  } catch (error) {
    throw new Error(`fail to fetch all categories ${error}`);
  }
}

export async function getInstructorById(instructorId: number) {
  try {
    const response = await API.get<UserResponse>(
      `/instructors/${instructorId}`
    );
    const data = response.data;

    return data.data;
  } catch (error) {
    throw new Error(`Failed to fetch ${error}`);
  }
}
