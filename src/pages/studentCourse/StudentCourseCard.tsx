import ProgressDemo from '@/components/ProgreeDemo';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Diamond } from 'lucide-react';
import { memo } from 'react';
import { TUserCourse } from './types';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const colors = [
  'bg-indigo-300',
  'bg-red-300',
  'bg-green-300',
  'bg-blue-300',
  'bg-yellow-300',
  'bg-purple-300',
];

const StudentCourseCard = memo(
  ({ courseData }: { courseData: TUserCourse[] }) => {
    return (
      <div className="grid grid-cols-3 gap-4">
        {courseData.map((item, index) => (
          <Card
            key={item.id}
            className={`${
              colors[index % colors.length]
            } rounded-[30px] border-[#000] border-2`}
          >
            <CardHeader className="flex flex-row justify-between items-center ">
              <CardTitle>
                <div className="border-[1px] border-[#000] p-2 bg-yellow-400 rounded-[12px] ">
                  {item.category}
                </div>
              </CardTitle>
              <div className="flex gap-2">
                {[1, 2, 3].map((_, index) => (
                  <Diamond key={index} />
                ))}
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <h1 className="font-semibold">{item.title}</h1>
              <div>
                <div className="flex flex-row space-y-3 justify-between items-center">
                  <h1>Progress</h1>
                  <div>{item.progress} lessons</div>
                </div>
                <ProgressDemo progress={item.progress} />
              </div>
            </CardContent>
            <CardFooter className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarImage
                    src="https://images.unsplash.com/photo-1701351382146-035bd68cdb6d?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt={item.instructor}
                  />
                  <AvatarFallback>{item.instructor}</AvatarFallback>
                </Avatar>
                <h1>{item.instructor}</h1>
              </div>

              <Button className="bg-orange-600 text-md rounded-lg hover:bg-orange-700">
                Continue
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    );
  }
);

export default StudentCourseCard;
