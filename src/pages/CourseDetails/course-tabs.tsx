import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { courseDetails, lesson } from '../studentCourse/types';

type Props = {
  courseData: courseDetails;
  lessons: lesson[];
};

export default function CourseTabs({ courseData, lessons }: Props) {
  return (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList className="grid grid-cols-2 mb-8">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
        {/* <TabsTrigger value="reviews">Reviews</TabsTrigger> */}
      </TabsList>

      {/* Overview Tab */}
      <TabsContent value="overview" className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-4">About This Course</h2>
          <p className="text-muted-foreground">{courseData.description}</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">What You'll Learn</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <li className="flex items-start gap-2">
              <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                <span className="text-xs text-primary">✓</span>
              </div>
              <span>{courseData.description}</span>
            </li>
          </ul>
        </div>

        {/* <div>
          <h2 className="text-xl font-semibold mb-4">Certificate</h2>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">
                    {courseData.certificates[0].certificateTitle}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {courseData.certificates[0].certificateDetail}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div> */}
      </TabsContent>

      {/* Curriculum Tab */}
      <TabsContent value="curriculum" className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-4">Course Content</h2>
          <div className="text-sm text-muted-foreground mb-6">
            <span>{lessons?.length || 0} lessons</span>
            <span className="mx-2">•</span>
            <span>{courseData.duration} total</span>
          </div>

          {lessons && lessons.length > 0 ? (
            <div className="space-y-3">
              {lessons.map((lesson, index) => (
                <div
                  key={lesson.id}
                  className="border rounded-lg p-4 hover:bg-muted/50 transition-colors"
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center text-sm font-medium">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-medium">{lesson.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {lesson.lessonDetail}
                        </p>
                      </div>
                    </div>
                    {lesson.available ? (
                      <Button variant="outline" size="sm">
                        Locked
                      </Button>
                    ) : (
                      <Badge variant="outline">Preview</Badge>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground">
              No lessons available for this course.
            </p>
          )}
        </div>
      </TabsContent>

      {/* Reviews Tab */}
      {/* <TabsContent value="reviews" className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-4">Student Reviews</h2>
          {courseData.comments && courseData.comments.length > 0 ? (
            <div className="space-y-6">
              {courseData.comments.map((comment) => (
                <CourseComments key={comment.id} comment={comment} />
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground">
              No reviews yet for this course.
            </p>
          )}
        </div>
      </TabsContent> */}
    </Tabs>
  );
}
