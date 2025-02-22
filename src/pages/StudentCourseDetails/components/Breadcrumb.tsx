import React from 'react';

const Breadcrumb = () => {
  return (
    <div className="px-2 py-3 text-sm text-gray-700">
      <div className="flex items-center gap-2">
        <span className="font-extrabold">My courses</span> / 
        <span className="font-extrabold">Public Speaking and Leadership</span> / 
        <span className="font-extrabold">Lesson 1. Introduction to Public Speaking</span>
      </div>
    </div>
  );
};

export default Breadcrumb;