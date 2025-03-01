import { lesson } from '../studentCourse/types';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/pages/CourseDetails/custom-accordion';
import { PlaySquare } from 'lucide-react';

type Props = {
  lessons: lesson[];
};
export default function CourseLessons({ lessons }: Props) {
  return (
    <div>
      <div className="text-lg font-bold mt-3">Course Lessons</div>
      <div className="font-light text-sm">{lessons?.length} lessons</div>
      <Accordion
        type="single"
        collapsible
        className="w-1/2 border border-gray-300 dark:border-gray-700"
      >
        {lessons!.map((lesson) => (
          <AccordionItem value={`item-${lesson.id}`} key={lesson.id}>
            <AccordionTrigger className="pl-2 bg-gray-200 dark:bg-gray-700 font-semibold">
              {lesson.title}
            </AccordionTrigger>
            <AccordionContent className="p-4 font-medium">
              <div className="flex items-start gap-1">
                <PlaySquare /> <span>{lesson.lessonDetail}</span>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
