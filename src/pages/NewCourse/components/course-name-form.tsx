import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { newCourseFormType } from '../useNewCourseForm';
import { Input } from '@/components/ui/input';

type Props = {
  form: newCourseFormType;
};

export default function CourseNameForm({ form }: Props) {
  return (
    <FormField
      control={form.control}
      name="courseName"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Course Name</FormLabel>
          <FormControl>
            <Input placeholder="course name" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
