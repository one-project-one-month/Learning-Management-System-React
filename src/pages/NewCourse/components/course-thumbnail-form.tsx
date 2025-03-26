import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { newCourseFormType } from '../useNewCourseForm';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

type Props = {
  form: newCourseFormType;
};

export default function CourseThumbnailForm({ form }: Props) {
  // const [profilePic, setProfilePic] = useState('');

  return (
    <FormField
      control={form.control}
      name="thumbnail"
      render={({ field }) => (
        <FormItem className="flex items-end gap-2">
          <div className="flex-grow">
            <FormLabel>Course Profile Photo</FormLabel>
            <FormControl>
              <Input
                {...field}
                onChange={(e) => {
                  field.onChange(e);
                  // setProfilePic(e.target.value);
                }}
                placeholder="course photo"
              />
            </FormControl>
          </div>
          <div className="w-2">
            {!!field.value && (
              <Avatar>
                <AvatarImage src={field.value} alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            )}
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
