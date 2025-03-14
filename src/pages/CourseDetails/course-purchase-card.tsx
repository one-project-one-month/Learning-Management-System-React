import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { formatPrice } from '@/utils';
import { Badge } from '@/components/ui/badge';
import { Clock, Globe, GraduationCap } from 'lucide-react';
import { courseDetails } from '../studentCourse/types';

type Props = {
  courseData: courseDetails;
};

export default function CoursePurchaseCard({ courseData }: Props) {
  const [addCart, setAddCart] = useState(false);

  // Calculate discount percentage
  const discountPercentage = Math.round(
    ((courseData.originalPrice - courseData.currentPrice) /
      courseData.originalPrice) *
      100
  );

  return (
    <Card>
      <CardContent className="p-6 space-y-6">
        {/* <div className="flex flex-col items-center gap-2"> */}
        <div className="flex gap-2 justify-between items-end">
          <div className="flex flex-col items-end">
            <div>
              {courseData.originalPrice > courseData.currentPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  {formatPrice(courseData.originalPrice)}
                </span>
              )}
            </div>
            <span className="text-3xl font-bold">
              {formatPrice(courseData.currentPrice)}
            </span>
          </div>
          <div className="mb-3">
            {courseData.originalPrice > courseData.currentPrice && (
              <Badge className="ml-auto">{discountPercentage}% off</Badge>
            )}
          </div>
        </div>

        <Button className="w-full" size="lg">
          Enroll Now
        </Button>
        <Button
          variant="outline"
          className="w-full"
          onClick={() => {
            setAddCart((add) => !add);
          }}
        >
          {addCart ? 'Added' : 'Add to Cart'}
        </Button>

        <div className="text-sm text-muted-foreground space-y-2">
          <p className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>Full lifetime access</span>
          </p>
          <p className="flex items-center gap-2">
            <Globe className="h-4 w-4" />
            <span>Access on all devices</span>
          </p>
          <p className="flex items-center gap-2">
            <GraduationCap className="h-4 w-4" />
            <span>Certificate of completion</span>
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
