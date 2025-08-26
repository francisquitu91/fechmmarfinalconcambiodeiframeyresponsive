import React from 'react';

const IframeSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="w-full">
        <iframe
          src="https://francisquitu91-chatb-81g6.bolt.host"
          className="w-full h-[800px] border-0"
          title="Chatbot Embed"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>
    </section>
  );
};

export default IframeSection;