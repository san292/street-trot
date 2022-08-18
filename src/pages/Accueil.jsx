import React from 'react';
import image from '../img/photoMain.jpg';

const Accueil = () => {
  return (
    <div className=" w-full h-full md:top-[130px]">
      <img className="w-full h-full object-cover" src={image} alt="images" />
      <h1 className=" inset-y-80 inset-x-40 mt-16 text-pink-400 font-semibold  md:text-4xl  absolute  md:inset-y-80 inset-x-80">
        Bienvenue chez Street-trot
      </h1>
    </div>
  );
};

export default Accueil;
