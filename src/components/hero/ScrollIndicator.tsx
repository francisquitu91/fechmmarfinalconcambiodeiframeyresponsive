import React from 'react';

export const ScrollIndicator: React.FC = () => {
  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <div className="w-1 h-16 rounded-full bg-white/30">
        <div className="w-1 h-8 bg-blue-400 rounded-full" />
      </div>
    </div>
  );
};