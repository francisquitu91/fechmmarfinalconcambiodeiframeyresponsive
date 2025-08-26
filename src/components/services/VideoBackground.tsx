import React from 'react';

const VideoBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <img
        src="https://i.ibb.co/6gZNbwd/pexels-ozrenildo-662374.jpg"
        alt="Background"
        className="absolute w-full h-full object-cover"
      />
      <div 
        className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" 
        style={{ 
          willChange: 'transform',
          backfaceVisibility: 'hidden',
          transform: 'translate3d(0,0,0)'
        }} 
      />
    </div>
  );
};

export default VideoBackground;
