import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp,Clock,Star } from 'lucide-react';

interface Module {
  title: string;
  duration: string;
  details?: { title: string; duration: string }[];
}

const modules: Module[] = [
  {
    title: '01. Introduction to Public Speaking and Leadership',
    duration: '40 min',
    details: [
      { title: 'Overview of public speaking', duration: '8 min' },
      { title: 'Effective communication', duration: '15 min' },
      { title: 'Personal leadership assessment', duration: '11 min' },
      { title: 'Understanding audience dynamics', duration: '6 min' },
    ],
  },
  { title: '02. Foundations of Public Speaking for adults', duration: '36 min' },
  { title: '03. Creating clear and engaging messages', duration: '24 min' },
  { title: '04. Mastering Non-Verbal Communication', duration: '55 min' },
  { title: '05. Persuasion Techniques in Public Speaking', duration: '32 min' },
  { title: '06. Advanced Speaking Techniques for Adults', duration: '18 min' },
];

const Modules = () => {
  const [expandedModule, setExpandedModule] = useState<number | null>(null);

  const toggleModule = (index: number) => {
    setExpandedModule(expandedModule === index ? null : index);
  };

  return (

    <div className="space-y-2 py-3">
        {/* time stamps */}
        <div className="flex items-center gap-2">
            <div className="flex items-center px-1  py-1 rounded-xl border border-gray-900 bg-yellow-400 gap-1 text-sm text-gray-800">
              <Clock className="h-4 w-4" />
              6 lessons
            </div>
            <div className="flex items-center px-1 py-1 rounded-xl border border-gray-900 bg-yellow-400 gap-1 text-sm text-gray-700">
              <Clock className="h-4 w-4" />
              3h 25min
            </div>
            <div className="flex items-center bg-yellow-400 px-1 py-1 rounded-xl border border-gray-900 text-sm">
              <Star className="h-4 w-4 fill-gray-400" />
              <span>4.8 </span>
              <span className="text-gray-700">(86 reviews)</span>
            </div>
          </div>


    {/*modules  */}

    <div className="space-y-2">
      {modules.map((module, index) => (
        <div key={index} className="rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">{module.title}</h3>
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
  );
};

export default Modules;