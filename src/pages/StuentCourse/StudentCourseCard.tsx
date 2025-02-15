import ProgressDemo from '@/components/ProgreeDemo';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Bookmark } from 'lucide-react';
import { memo } from 'react';
import { TUserCourse } from './types';

const StudentCourseCard = memo(
  ({ courseData }: { courseData: TUserCourse[] }) => {
    return (
      <div className="grid grid-cols-3 gap-4">
        {courseData.map((item) => (
          <Card key={item.id}>
            <CardHeader className="flex flex-row justify-between items-center">
              <CardTitle>
                <div className="border-[1px] p-2 bg-yellow-400 rounded-md">
                  {item.category}
                </div>
              </CardTitle>
              <Bookmark />
            </CardHeader>
            <CardContent className="space-y-3">
              <h1 className="font-semibold">{item.title}</h1>
              <div className="flex flex-row justify-between items-center">
                <h1>Progress</h1>
                <div>{item.progress} lessons</div>
              </div>
              <ProgressDemo progress={item.progress} />
            </CardContent>
            <CardFooter className="flex items-center justify-between">
              <h1>{item.instructor}</h1>
              <Button>Continue</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    );
  }
);

export default StudentCourseCard;
