import { comment, users } from '../studentCourse/types';
import { useEffect, useState } from 'react';
import { API_BASE_URL } from '@/config/serverApiConfig';
import { UserResponse } from './types';

type Props = {
  comment: comment;
};

export default function CourseComments({ comment }: Props) {
  const [user, setUser] = useState<users>();

  useEffect(() => {
    async function getUser() {
      const response = await fetch(`${API_BASE_URL}/users/${comment.userId}`);
      const data = (await response.json()) as UserResponse;
      setUser(data.data);
    }
    getUser();
  }, [comment.userId]);

  return (
    <div key={comment.id} className="border-b pb-6 last:border-0">
      <div className="flex items-start gap-4">
        <div className="relative h-10 w-10 rounded-full overflow-hidden">
          <img
            src={user?.profilePhoto}
            alt={user?.name}
            // fill
            className="object-cover"
          />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-1">
            <h3 className="font-medium">{user?.name}</h3>
            <span className="text-xs text-muted-foreground">
              {new Date(comment.time).toLocaleDateString()}
            </span>
          </div>
          {/* <div className="flex mb-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < comment.rating
                    ? 'fill-primary text-primary'
                    : 'fill-muted text-muted-foreground'
                }`}
              />
            ))}
          </div> */}
          <p className="text-muted-foreground">{comment.message}</p>
        </div>
      </div>
    </div>
  );
}
