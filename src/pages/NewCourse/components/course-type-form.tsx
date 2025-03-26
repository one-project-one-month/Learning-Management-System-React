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

export default function CourseTypeForm({ form }: Props) {
  return (
    <FormField
      control={form.control}
      name="type"
      render={({ field }) => {
        return (
          <FormItem>
            <FormLabel>Type</FormLabel>
            <Select onValueChange={field.onChange} value={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select Type" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="Live">Live</SelectItem>
                <SelectItem value="Video">Video</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
}
