import React from 'react';
import image from '../img/photoMain.jpg';

const Main = () => {
  return (
    <div className="h-full ">
      <img
        className="max-w-full h-full block static object-cover"
        src={image}
        alt="images"
      />
      <button className=" text-4xl text-white absolute inset-0 ">
        Bienvenue chez Street-trot
      </button>
    </div>
  );
};

export default Main;
