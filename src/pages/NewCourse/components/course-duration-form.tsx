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

export default function CourseDurationForm({ form }: Props) {
  return (
    <FormField
      control={form.control}
      name="duration"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Course Duration</FormLabel>
          <FormControl>
            <Input type="number" placeholder="Course Duration" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
