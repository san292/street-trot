import React from 'react';
import image from '../img/enfantTrot.jpg';

const Accueil = () => {
  return (
    <div className=" h-full w-full">
      <img className=" h-full  object-cover" src={image} alt="images" />
      {/* <h1 className=" inset-y-80 inset-x-40 mt-16 text-pink-400 font-semibold  md:text-4xl  absolute  md:inset-y-80 ">
        
      </h1> */}
    </div>
  );
};

export default Accueil;
