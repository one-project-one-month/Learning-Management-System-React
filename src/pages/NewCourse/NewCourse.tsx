import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { useEffect, useState } from 'react';
import { z } from 'zod';
import useNewCourseForm, { newCourseFormSchema } from './useNewCourseForm';
import CourseTypeForm from './components/course-type-form';
import CourseLevelForm from './components/course-level-form';
import CourseDescriptionForm from './components/course-description-form';
import CourseCategoryForm from './components/course-category-form';
import CourseNameForm from './components/course-name-form';
import CourseDurationForm from './components/course-duration-form';
import CourseOriginalPriceForm from './components/course-original-price-form';
import CourseCurrentPriceForm from './components/course-current-price-form';
import CourseThumbnailForm from './components/course-thumbnail-form';
import CourseAvailableForm from './components/course-available-form';
import { useLocation } from 'react-router-dom';
import CourseLessonForm from './components/course-lesson-form';

const categories = [
  { label: 'Web Development', value: 1 },
  { label: 'Mobile Development', value: 2 },
  { label: 'Data Science', value: 3 },
  { label: 'Cloud Computing', value: 4 },
];

export default function NewCourse() {
  const [categoryId, setCategoryId] = useState(0);
  const [category, setCategory] = useState('');
  const { state } = useLocation();
  const courseId = state?.courseId as number | undefined;

  // console.log('courseId >>>', courseId ?? 'not exist');

  useEffect(() => {
    const id = categories.find((check) => check.label === category)?.value;

    setCategoryId(id ?? 0);
  }, [category]);

  const form = useNewCourseForm(courseId);

  function onSubmit(values: z.infer<typeof newCourseFormSchema>) {
    console.log({ ...values, categoryId, categoryName: category });
  }

  return (
    <div>
      {/* <Sample /> */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <CourseNameForm form={form} />

          <div className="grid grid-cols-2 md:grid-cols-3 items-end gap-1">
            {/* categoryName */}
            <div>
              <CourseCategoryForm
                form={form}
                onCategory={setCategory}
                category={category}
              />
            </div>

            <div>
              {/* type */}
              <CourseTypeForm form={form} />
            </div>
            <div>
              {/* level */}
              <CourseLevelForm form={form} />
            </div>
          </div>

          {/* description */}
          <CourseDescriptionForm form={form} />

          {/* lessons */}
          <CourseLessonForm form={form} />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 items-center">
            {/* duration */}
            <CourseDurationForm form={form} />

            {/* originalPrice */}
            <CourseOriginalPriceForm form={form} />

            {/* currentPrice */}
            <CourseCurrentPriceForm form={form} />
          </div>
          <div className="grid grid-cols-8 items-end">
            {/* thumbnail */}
            <div className="col-span-7">
              <CourseThumbnailForm form={form} />
            </div>
          </div>

          <div className="flex items-center gap-1">
            {/* available */}
            <CourseAvailableForm form={form} />

            <Button type="submit">Submit</Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
