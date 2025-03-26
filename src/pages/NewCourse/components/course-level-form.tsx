import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { newCourseFormType } from '../useNewCourseForm';

type Props = {
  form: newCourseFormType;
};

export default function CourseLevelForm({ form }: Props) {
  return (
    <FormField
      control={form.control}
      name="level"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Level</FormLabel>
          <Select onValueChange={field.onChange} value={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Select Level" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              <SelectItem value="Beginner">Beginner</SelectItem>
              <SelectItem value="Intermediate">Intermediate</SelectItem>
              <SelectItem value="Advanced">Advanced</SelectItem>
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
