import { Separator } from '@/components/ui/separator';
import { comment } from '../studentCourse/types';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

type Props = {
  comments: comment[];
};

export default function CourseComments({ comments }: Props) {
  return (
    <div>
      <div className="font-semibold mt-3">
        Comments{' '}
        <span className="text-xs text-slate-500">
          ({comments?.length} users)
        </span>
      </div>
      <div className="grid grid-flow-col col-span-2 gap-10">
        {comments?.map((comment, index) => (
          <div key={comment.id}>
            <Separator className="my-1" />
            <div className="flex items-center gap-1">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <div>User {index + 1}</div>
                <div className="text-sm text-slate-500">
                  {comment.time.split('T')[0]}
                </div>
              </div>
            </div>
            <div className="my-1">{comment.message}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
