import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, UseFormReturn } from 'react-hook-form';
import { z } from 'zod';

import { useEffect } from 'react';
import { API_BASE_URL } from '@/config/serverApiConfig';
import { CourseDetailsResponse } from '../CourseDetails/types';

const lessonSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  videoUrl: z.string().min(1, 'Video Url is required'),
  lessonDetail: z.string().min(1, 'Lesson Details is required'),
  available: z.boolean().default(true),
});

export const newCourseFormSchema = z.object({
  courseName: z.string().min(2, {
    message: 'courseName must be at least 2 characters.',
  }),
  categoryName: z.string({ required_error: 'Category Name is required' }),
  type: z.string({ required_error: 'type is required' }),
  level: z.string({ required_error: 'level is required' }),
  description: z.string({ required_error: 'description is required' }),
  duration: z.coerce
    .number({ required_error: 'duration is required' })
    .positive(),
  originalPrice: z.coerce.number().gte(1000).positive(),
  currentPrice: z.coerce.number().gte(1000).positive(),
  available: z.boolean().default(true),
  thumbnail: z.string({ required_error: 'thumbnail should include' }),
  lessons: z.array(lessonSchema),
});

export type NewCourseFormData = UseFormReturn<
  z.infer<typeof newCourseFormSchema>
>;

export default function useNewCourseForm(
  courseId: number | undefined
): NewCourseFormData {
  const form = useForm({
    resolver: zodResolver(newCourseFormSchema),
    defaultValues: {
      courseName: '',
      categoryName: '',
      type: '',
      level: '',
      description: '',
      thumbnail: '',
      duration: 0,
      originalPrice: 0,
      currentPrice: 0,
      available: true,
      lessons: [],
    },
  });

  useEffect(() => {
    async function getCourseById() {
      const response = await fetch(`${API_BASE_URL}/courses/${courseId}`);
      const data = (await response.json()) as CourseDetailsResponse;

      form.reset(data.data);
    }
    if (courseId) getCourseById();
  }, [courseId, form]);

  return form;
}

export type newCourseFormType = ReturnType<typeof useNewCourseForm>;
