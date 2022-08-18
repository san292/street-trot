import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavbarItems from '../data/navBarData';
import logo from '../img/main3.PNG';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handelNave = () => {
    setNav(!nav);
  };
  const handelMenu = () => {
    setNav(false);
  };
  useEffect(() => {
    const changeWidth = () => {
      if (window.innerWidth > 768) {
        console.log('ferme menu apres 768');
        handelMenu(false);
      }
    };
    window.addEventListener('resize', changeWidth);

    return () => {
      window.removeEventListener('resize', changeWidth);
    };
  }, []);
  return (
    <nav className=" relative w-full h-auto md:h-[90px] text-white bg-primary ">
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

        <div className=" block mr-4 md:hidden ">
          {nav ? (
            <IoMdClose className="text-white " onClick={handelNave} />
          ) : (
            <GiHamburgerMenu className="text-white" onClick={handelNave} />
          )}
        </div>

        {/* Mobile Menu */}
        <div
          id="menu"
          // class="absolute flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 drop-shadow-md"
          className={
            nav
              ? 'w-full flex-col justify-center mt-4 text-center absolute top-24 md:hidden'
              : 'hidden'
          }
        >
          {NavbarItems.map((link, index) => (
            <Link
              to={link.to}
              key={index}
              className=" hover:text-pink-400 font-medium text-md hover:text-base text-primary block duration-200 ease-in-out "
              onClick={handelMenu}
            >
              {link.name}
            </Link>
          ))}
          <button className=" p-1.5 mt-4 font-semibold text-primary bg-button hover:bg-white  rounded-full">
            Se connecter
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
