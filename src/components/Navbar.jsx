import React from 'react';

const Navbar = () => {
  return (
    <div className="w-full h-[90px] bg-gray-400   ">
      <div className="max-w-[1240px] mx-auto px-4 flex justify-between text-white ">
        <div>
          <h1>logo</h1>
        </div>
        <div className="hidden md:flex space-x-12  ">
          <li>Accueil</li>
          <li>Accessoires et piéces</li>
          <li>Atelier</li>
          <li>Nous contacter</li>
          <li>Qui sommes-nous</li>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
