import React from 'react';
import { Link } from 'react-router-dom';
import NavbarItems from '../data/navBarData';
import logo from '../img/main3.PNG';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
  return (
    <nav className=" w-full h-[90px] text-white bg-primary  ">
      <div className="  max-w-[1240px] px-2 h-full   flex items-center  justify-between ">
        <div className="">
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              className="w-[150px] h-[70px] rounded-full"
            />
          </Link>
        </div>

        <div className=" hidden lg:flex space-x-20 items-center">
          {NavbarItems.map((link, index) => (
            <Link
              to={link.to}
              key={index}
              className=" hover:text-secondary duration-200 ease-in-out "
            >
              {link.name}
            </Link>
          ))}

          <button className=" p-1.5 text-primary bg-secondary hover:bg-white  rounded-full">
            Se connecter
          </button>
        </div>
      </div>
      <div className="">
        <GiHamburgerMenu className="text-white" />
      </div>
    </nav>
  );
};

export default Navbar;
