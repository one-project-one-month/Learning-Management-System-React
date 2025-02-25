import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { instructors } from '../InstructorDashboard/types';
import { Link } from 'react-router-dom';
import { PlayCircle, Star, UsersRound } from 'lucide-react';

export default function InstructorInfo({
  instructor,
  totalStudents,
  totalComment,
}: {
  instructor: instructors;
  totalStudents: number;
  totalComment: number;
}) {
  return (
    <div className="my-5 flex flex-col gap-1">
      <div className="text-lg font-semibold mb-1">Instructor</div>

      {/* link to instructor profile */}
      <Link to={'/'} className="underline text-blue-500">
        {instructor.users?.username}
      </Link>
      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarImage src={instructor.users?.profilePhoto} alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col text-sm">
          <div className="flex items-center gap-1">
            <Star size={15} />
            {totalComment} reviews
          </div>
          <div className="flex items-center gap-1">
            <UsersRound size={15} /> {totalStudents} students
          </div>
          <div className="flex items-center gap-1">
            <PlayCircle size={15} /> *3courses
          </div>
        </div>
      </div>
    </div>
  );
}
