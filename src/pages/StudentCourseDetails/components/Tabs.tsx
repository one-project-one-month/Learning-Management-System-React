import React from 'react'
import { Button } from '@/components/ui/button';
import { Share2 } from 'lucide-react';

const Tabs = () => {
  return (
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
    
  )
}

export default Tabs