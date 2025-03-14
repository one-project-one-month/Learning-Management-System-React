import { Separator } from '@/components/ui/separator';
import { Card, CardContent } from '@/components/ui/card';
import { courseDetails, users } from '../studentCourse/types';
import { Link } from 'react-router-dom';

type Props = {
  courseData: courseDetails;
  instructor: users;
};

export default function InstructorInfoCard({ courseData, instructor }: Props) {
  return (
    <Card>
      <CardContent className="p-6 space-y-4">
        <h2 className="text-xl font-semibold">Instructor</h2>
        <div className="flex items-center gap-4">
          <div className="relative h-16 w-16 rounded-full overflow-hidden">
            <Link to={`/instructor/${instructor.id}`}>
              <img
                src={instructor.profilePhoto}
                alt={instructor?.name}
                // fill
                className="object-cover"
              />
            </Link>
          </div>
          <div>
            <Link to={`/instructor/${instructor.id}`}>
              <h3 className="font-medium">{instructor.name}</h3>
            </Link>
            <div className="flex gap-2 mt-1">
              {courseData.socialLink.x && (
                <a
                  href={courseData.socialLink.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
              )}
              {courseData.socialLink.facebook && (
                <a
                  href={courseData.socialLink.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              )}
              {courseData.socialLink.facebook && (
                <a
                  href={courseData.socialLink.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
        <Separator />
        <p className="text-sm text-muted-foreground">
          {instructor.eduBackground}
        </p>
      </CardContent>
    </Card>
  );
}
