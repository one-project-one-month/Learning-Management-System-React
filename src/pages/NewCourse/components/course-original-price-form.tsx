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

export default function CourseOriginalPriceForm({ form }: Props) {
  return (
    <FormField
      control={form.control}
      name="originalPrice"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Original Price</FormLabel>
          <FormControl>
            <Input type="number" placeholder="Original Price" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
