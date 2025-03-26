import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { newCourseFormType } from '../useNewCourseForm';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { useFieldArray } from 'react-hook-form';
import { Button } from '@/components/ui/button';

type Props = {
  form: newCourseFormType;
};

export default function CourseLessonForm({ form }: Props) {
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'lessons',
  });

  return (
    <div className="space-y-4">
      {fields.map((field, index) => (
        <div
          key={field.id}
          className="border border-gray-600 p-4 rounded-lg space-y-2"
        >
          <FormField
            control={form.control}
            name={`lessons.${index}.title`}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Lesson Title {index + 1}</FormLabel>
                <FormControl>
                  <Input placeholder="Enter lesson title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name={`lessons.${index}.videoUrl`}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Video URL</FormLabel>
                <FormControl>
                  <Input placeholder="Enter video URL" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name={`lessons.${index}.lessonDetail`}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Lesson Details</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Enter lesson details"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="button"
            variant="destructive"
            onClick={() => remove(index)}
            className="mt-2"
          >
            Remove Lesson
          </Button>
        </div>
      ))}

      <Button
        type="button"
        onClick={() =>
          append({
            title: '',
            videoUrl: '',
            lessonDetail: '',
            available: true,
          })
        }
      >
        Add New Lesson
      </Button>
    </div>
  );
}
