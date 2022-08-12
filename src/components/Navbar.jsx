import React from 'react';
import { Link } from 'react-router-dom';
import NavbarItems from '../data/navBarData';
import logo from '../img/logo.PNG';
// import AiOutlineMenu from 'react-icons/ai';

const Navbar = () => {
  return (
    <nav className=" w-full h-[80px] text-white bg-primary  ">
      <div className="  flex items-center  justify-between h-full">
        <div className=" p-4 ml-4 ">
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              className="w-[100px] h-15  rounded-full"
            />
          </Link>
        </div>

        <div className="mr-4  hidden md:flex space-x-20 items-center">
          {NavbarItems.map((link, index) => (
            <Link
              to={link.to}
              key={index}
              className=" hover:text-secondary duration-200 ease-in-out"
            >
              {link.name}
            </Link>
          ))}

          <button className="p-2 hidden md:block text-primary bg-secondary rounded-full">
            Se connecter
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
