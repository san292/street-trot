import React from 'react';
import Video from '../video/mainVideo.mp4';
import Main from '../components/Main';

const Accueil = () => {
  return (
    <div className="w-screen h-screen">
      <Main />
      {/* <video
        className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
        controls
        loop
        muted
        autostart="true"
        autoPlay
        src={Video}
        type="video/mp4"
      /> */}
    </div>
  );
};

export default Accueil;
