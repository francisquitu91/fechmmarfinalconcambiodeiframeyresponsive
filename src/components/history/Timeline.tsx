import React from 'react';
import TimelineItem from './TimelineItem';
import { timelineData } from './timelineData';

const Timeline: React.FC = () => {
  return (
    <div className="relative pl-12 md:pl-16 space-y-12 before:content-[''] before:absolute before:top-0 before:left-0 before:h-full before:w-1 before:bg-navy-900">
      {timelineData.map((item, index) => (
        <TimelineItem key={index} {...item} />
      ))}
    </div>
  );
};

export default Timeline;