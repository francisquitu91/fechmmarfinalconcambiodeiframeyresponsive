import React from 'react';

const ServicesVideo: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto mb-12 rounded-xl overflow-hidden shadow-xl">
      <video 
        className="w-full h-auto"
        controls
        preload="metadata"
      >
        <source 
          src="https://stackblitz.com/storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNEtYTHc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--839cbfc428c2b2aad5b75bb427e30b729bb8b6b4/iNICIOREALREAL.mp4" 
          type="video/mp4" 
        />
        Tu navegador no soporta el elemento de video.
      </video>
    </div>
  );
};

export default ServicesVideo;