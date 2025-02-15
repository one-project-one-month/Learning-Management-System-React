import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

import StudentHeader from './StudentHeader';
import { Bookmark } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

const StudentDashboard = () => {
  function ProgressDemo() {
    const [progress, setProgress] = useState(13);

    useEffect(() => {
      const timer = setTimeout(() => setProgress(66), 500);
      return () => clearTimeout(timer);
    }, []);
    return <Progress value={progress} className="w-[100%]" />;
  }

  return (
    <main>
      <StudentHeader />
      <div className="grid grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <Card key={item}>
            <CardHeader className="flex flex-row justify-between items-center">
              <CardTitle>
                <div className=" border-[1px] p-2 bg-yellow-400 rounded-md">
                  Card Type
                </div>
              </CardTitle>
              <Bookmark />
            </CardHeader>
            <CardContent className="space-y-3">
              <h1 className="font-semibold">Card Title</h1>
              <div className="flex flex-row justify-between items-center">
                <h1>Progress</h1>
                <div>5/10 lessons</div>
              </div>
              <ProgressDemo />
            </CardContent>
            <CardFooter className="flex items-center justify-between">
              <h1>User+++</h1>
              <Button>continue</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
};

export default StudentDashboard;
