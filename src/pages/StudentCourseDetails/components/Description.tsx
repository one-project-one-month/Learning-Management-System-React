import React from 'react';

const Description = () => {
  return (
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
  );
};

export default Description;