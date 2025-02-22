import { Progress } from '@/components/ui/progress';
import { Bookmark, ChevronLeft, ChevronDown, ChevronUp, Bell, Search, Clock, Star, Share2, PlayCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import Breadcrumb from './components/Breadcrumb';
import Description from './components/Description';
import VideoPlayer from './components/VideoPlayer';
import Tabs from './components/Tabs';
import Modules from './components/Modules';

interface Module {
  title: string;
  duration: string;
  details?: { title: string; duration: string }[];
}

const CourseDetailPage = () => {
  

  return (
    <main>
      {/* Breadcrumb */}
      <Breadcrumb/>

      {/* Course Content */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr,350px] gap-6 p-2">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Button variant="ghost" className="p-0">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <h1 className="text-xl text-gray-700 font-extrabold">Public Speaking and Leadership</h1>
          </div>

          {/* Video Player Placeholder */}
        <VideoPlayer/>
          
          {/* Tabs */}
          <Tabs/>
          
          {/* Description */}
          <Description/>
        </div>

        {/* Course Modules */}
        
          <Modules/>
        
      </div>
    </main>
  );
};

export default CourseDetailPage;