import React from 'react';

interface TimelineItemProps {
  logo: string;
  logoAlt: string;
  title: string;
  period: string;
  description: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ logo, logoAlt, title, period, description }) => {
  return (
    <div className="relative pl-8 md:pl-10">
      <div className="absolute left-[-32px] top-0 w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center border-4 border-navy-900">
        <img 
          src={logo} 
          alt={logoAlt}
          className="w-10 h-10 object-contain"
        />
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <span className="text-sm font-medium text-blue-600 mb-1 block">{period}</span>
        <h3 className="text-xl font-semibold text-navy-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default TimelineItem;