import ProgressDemo from '@/components/ProgreeDemo';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '@/components/ui/card';

import { memo } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import DiamondIcon from './diamond-icon';
import { enrollment } from './types';
import { courseDummyCategory } from '@/constant/dummy-data';

// const colors = [
//   'bg-indigo-300',
//   'bg-red-300',
//   'bg-green-300',
//   'bg-blue-300',
//   'bg-yellow-300',
//   'bg-purple-300',
// ];

const StudentCourseCard = memo(
  ({ enrollments }: { enrollments: enrollment[] }) => {
    const courseData = enrollments.map((data) => data.course!);

    return (
      <div className="grid md:grid-cols-3 gap-4">
        {/* {courseData.map((item, index) => ( */}
        {courseData.map((item) => (
          <Card
            key={item.id}
            className={'bg-indigo-300 rounded-[30px] border-[#000] border-2'}
            // className={`${
            //   colors[index % colors.length]
            // } rounded-[30px] border-[#000] border-2`}
          >
            <CardHeader className="flex flex-row justify-between items-center ">
              <CardTitle>
                <div className="border-[1px] border-[#000] p-2 bg-yellow-400 rounded-[12px] ">
                  {
                    courseDummyCategory.find(
                      (data) => data.id === item.categoryId
                    )?.name
                  }
                </div>
              </CardTitle>
              {/* <div className="flex gap-2"> */}
              <div className="flex">
                <DiamondIcon level={item.level} />
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <h1 className="font-semibold">{item.courseName}</h1>
              <div>
                <div className="flex flex-row space-y-3 justify-between items-center">
                  <h1>Progress</h1>
                  <div>{60} lessons</div>
                </div>
                <ProgressDemo progress={60} />
              </div>
            </CardContent>
            <CardFooter className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarImage
                    src={item.instructor.users?.profilePhoto}
                    // src="https://images.unsplash.com/photo-1701351382146-035bd68cdb6d?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt={item.instructor.users?.username}
                  />
                  <AvatarFallback>
                    {item.instructor.users?.username}
                  </AvatarFallback>
                </Avatar>
                <h1>{item.instructor.users?.username}</h1>
              </div>

              <Button
                className="bg-orange-600 text-md rounded-lg hover:bg-orange-700"
                onClick={() => {
                  console.log('course >>>', item);
                }}
              >
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
