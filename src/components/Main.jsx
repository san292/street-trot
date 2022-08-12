import React from 'react';
import Video from '../video/mainVideo.mp4';

const Main = () => {
  return (
    <div className="relative flex items-center justify-center h-full overflow-hidden bg-cover">
      <video
        className="absolute z-10 w-auto min-w-full min-h-full max-h-none "
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
