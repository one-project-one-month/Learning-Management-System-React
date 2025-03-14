import { Clock, Globe, GraduationCap, Users } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { courseDetails } from '../studentCourse/types';

type Props = {
  courseData: courseDetails;
};

export default function CourseHeader({ courseData }: Props) {
  const { comments } = courseData;
  const totalStudents = courseData.enrollment?.length;
  const totalComments = comments?.length;

  return (
    <div>
      <div className="overflow-hidden mb-2">
        <img
          src={courseData.thumbnail}
          alt={courseData.courseName}
          className=" w-full"
        />
      </div>
      <h1 className="text-3xl font-bold mb-2">{courseData.courseName}</h1>
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <Badge variant="outline" className="flex items-center gap-1">
          <GraduationCap className="h-3.5 w-3.5" />
          {courseData.level}
        </Badge>
        <Badge variant="outline" className="flex items-center gap-1">
          <Clock className="h-3.5 w-3.5" />
          {courseData.duration}
        </Badge>
        {courseData.category && (
          <Badge variant="outline" className="flex items-center gap-1">
            <Globe className="h-3.5 w-3.5" />
            {courseData.category.name}
          </Badge>
        )}
        {totalStudents && (
          <Badge variant="outline" className="flex items-center gap-1">
            <Users className="h-3.5 w-3.5" />
            {totalStudents} students
          </Badge>
        )}
        {courseData.comments && courseData.comments.length > 0 && (
          <div className="flex items-center gap-1">
            <span className="text-sm text-muted-foreground">
              ({totalComments} reviews)
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
