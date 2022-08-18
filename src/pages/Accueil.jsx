import React from 'react';
import image from '../img/photoMain.jpg';

const Accueil = () => {
  return (
    <div className="h-full">
      <img className="w-full h-full object-cover" src={image} alt="images" />
      <h1 className=" text-4xl text-white absolute  inset-y-80 inset-x-80">
        Bienvenue chez Street-trot
      </h1>
    </div>
  );
};

export default Accueil;
