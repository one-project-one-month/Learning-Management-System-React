import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { newCourseFormType } from '../useNewCourseForm';
import { Checkbox } from '@/components/ui/checkbox';

type Props = {
  form: newCourseFormType;
};

export default function CourseAvailableForm({ form }: Props) {
  return (
    <FormField
      control={form.control}
      name="available"
      render={({ field }) => (
        <FormItem className="flex items-end gap-1 mb-2">
          <FormControl>
            <Checkbox checked={field.value} onCheckedChange={field.onChange} />
          </FormControl>

          <FormLabel>Available</FormLabel>
        </FormItem>
      )}
    />
  );
}
