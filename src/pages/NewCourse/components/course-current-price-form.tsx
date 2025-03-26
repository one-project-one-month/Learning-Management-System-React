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

export default function CourseCurrentPriceForm({ form }: Props) {
  return (
    <FormField
      control={form.control}
      name="currentPrice"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Current Price</FormLabel>
          <FormControl>
            <Input type="number" placeholder="Current Price" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
