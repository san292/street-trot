import React from 'react';
import { Link } from 'react-router-dom';
import NavbarItems from '../data/navBarData';
import logo from '../img/main3.PNG';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
  console.log('items', NavbarItems);
  return (
    <nav className=" relative w-full h-auto md:h-[90px]  text-white bg-primary ">
      <div className="  w-full px-2 h-full mx-auto   flex items-center  justify-between ">
        <div className="p-4 ml-4">
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              className="md:w-[100px] h-[70px] rounded-full w-[60px]"
            />
          </Link>
        </div>

        <div className=" hidden  md:flex space-x-20 items-center ">
          {NavbarItems.map((link, index) => (
            <Link
              to={link.to}
              key={index}
              className=" hover:text-secondaryHover duration-200 ease-in-out "
            >
              {link.name}
            </Link>
          ))}
          {/* button */}
          <button className=" p-1.5 text-primary bg-button hover:bg-white  rounded-full">
            Se connecter
          </button>
        </div>

        {/* Hamburger Menu  */}

        <div className=" block md:hidden ">
          <GiHamburgerMenu className="text-white" />
        </div>
        {/* <div class="md:hidden flex-col"> */}
        <div
          id="menu"
          // class="absolute flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 drop-shadow-md"
          className="w-full flex-col justify-center mt-4 text-center absolute top-24 left-0 ml-4 md:hidden"
        >
          {NavbarItems.map((link, index) => (
            <Link
              to={link.to}
              key={index}
              className=" hover:text-red-600 text-sm hover:text-base text-primary block duration-200 ease-in-out "
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
      {/* </div> */}
    </nav>
  );
};

export default Navbar;
