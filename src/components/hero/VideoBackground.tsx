import React from 'react';

interface VideoBackgroundProps {
  videoId: string;
}

export const VideoBackground: React.FC<VideoBackgroundProps> = ({ videoId }) => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Image for small screens (mobile / tablet / iPad) */}
      <img
        src="https://i.postimg.cc/J0cQmwZd/pexels-rahimegul-33612758.jpg"
        alt="Background"
        className="absolute w-full h-full object-cover block md:hidden"
        loading="lazy"
      />

      {/* Video iframe for medium+ screens */}
      <iframe
        className="absolute w-full h-full scale-150 hidden md:block"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}&mute=1&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1`}
        title="Background video"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />

      <div className="absolute inset-0 bg-navy-900/70" />
    </div>
  );
};