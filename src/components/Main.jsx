import React from 'react';
import Video from '../video/mainVideo.mp4';

const Main = () => {
  return (
    <div className="relative flex items-center justify-center h-screen overflow-hidden">
      <video
        className="absolute z-10 w-auto min-w-full min-h-full max-w-none "
        controls
        loop
        muted
        autostart="true"
        autoPlay
        src={Video}
        type="video/mp4"
      />
    </div>
  );
};

export default Main;
