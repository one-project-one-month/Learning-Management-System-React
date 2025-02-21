import { Progress } from '@/components/ui/progress';
import { Bookmark, ChevronLeft, ChevronDown, ChevronUp, Bell, Search, Clock, Star, Share2, PlayCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

interface Module {
  title: string;
  duration: string;
  details?: { title: string; duration: string }[];
}

const CourseDetailPage = () => {
  const [expandedModule, setExpandedModule] = useState<number | null>(null);

  const toggleModule = (index: number) => {
    setExpandedModule(expandedModule === index ? null : index);
  };

  const modules: Module[] = [
    {
      title: '01. Introduction to Public Speaking and Leadership',
      duration: '40 min',
      details: [
        { title: 'Overview of public speaking ', duration: '8 min' },
        { title: 'Effective communication', duration: '15 min' },
        { title: 'Personal leadership assessment', duration: '11 min' },
        { title: 'Understanding audience dynamics', duration: '6 min' },
      ],
    },
    { title: '02. Foundations of Public Speaking for adults', duration: '36 min' },
    { title: '03. Creating clear and engaging messages', duration: '24 min' },
    { title: '04. Mastering Non-Verbal Communication', duration: '55 min' },
    { title: '05. Persuasion Techniques in Public Speaking', duration: '32 min' },
    { title: '06. Advanced  Speaking Techniques for Adults', duration: '18 min' },
  ];

  return (
    <main>
      {/* Breadcrumb */}
      <div className="px-2 py-3 text-sm text-gray-700">
        <div className="flex items-center gap-2">
          <span className="font-extrabold">My courses</span> / 
          <span className="font-extrabold">Public Speaking and Leadership</span> / 
          <span className="font-extrabold">Lesson 1. Introduction to Public Speaking</span>
        </div>
      </div>

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
          <div className="relative aspect-video rounded-lg overflow-hidden bg-purple-200">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Tabs */}
          <div className="flex items-center gap-4 border-b">
            <Button
              variant="ghost"
              className="text-primary relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-primary"
            >
              Description
            </Button>
            <Button variant="ghost">Materials</Button>
            <Button variant="ghost">Home task</Button>
            <div className="ml-auto">
              <Button variant="ghost" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share lesson
              </Button>
            </div>
          </div>

          {/* Description */}
          <div className="prose max-w-none">
            <p>
              Public speaking is an essential skill that plays a significant role in both personal and professional
              development. Whether you're delivering a speech at a conference, giving a presentation at work, or
              speaking at a social event, being able to communicate effectively in front of an audience is invaluable.
            </p>

            <div className="space-y-2 mt-4">
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground">0:00</span>
                <span>Introduction to Public Speaking</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground">2:34</span>
                <span>The Importance of Public Speaking</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground">5:46</span>
                <span>Types of Public Speaking</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground">7:12</span>
                <span>Key Elements of Effective Public Speaking</span>
              </div>
            </div>
          </div>
        </div>

        {/* Course Modules */}
        <div className="space-y-2 py-3">
          <div className="flex items-center gap-3">
            <div className="flex items-center px-2 py-1 rounded-xl border border-gray-900 bg-yellow-400 gap-1 text-sm text-gray-800">
              <Clock className="h-4 w-4" />
              6 lessons
            </div>
            <div className="flex items-center px-2 py-1 rounded-xl border border-gray-900 bg-yellow-400 gap-1 text-sm text-gray-700">
              <Clock className="h-4 w-4" />
              3h 25min
            </div>
            <div className="flex items-center bg-yellow-400 px-2 py-1 rounded-xl border border-gray-900 text-sm">
              <Star className="h-4 w-4 fill-gray-400" />
              <span>4.8 </span>
              <span className="text-gray-700">(86 reviews)</span>
            </div>
          </div>

          {/* Modules */}
          {modules.map((module, index) => (
            <div key={index} className="rounded-lg border p-3">
              <div className="flex items-center justify-between">
                <p className="font-semibold text-sm text-gray-800">{module.title}</p>
                <span className="text-sm text-muted-foreground">{module.duration}</span>
                <Button variant="ghost" onClick={() => toggleModule(index)}>
                  {expandedModule === index ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </Button>
              </div>
              {module.details && expandedModule === index && (
                <div className="mt-4 space-y-2">
                  {module.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center justify-between text-sm">
                      <span>{detail.title}</span>
                      <span className="text-muted-foreground">{detail.duration}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default CourseDetailPage;