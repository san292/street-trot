import React from 'react';

const Footer = () => {
  return (
    <div className="bg-primary relative bottom-0 left-0 right-0 text-white w-full flex-col justify-center sm:flex  items-center ">
      <div className="flex justify-around  ml-6 p-2">
        <h3 className="hidden md:block ">Abonnez-vous à notre newsletter</h3>
        <form className=" sm:flex justify-center items-center">
          <label className=" ml-4">
            {/* <span className=" ml-6"> </span> */}
            <input type="email" name="email" placeholder=" E-mail" />
          </label>
          <input className=" ml-3" type="submit" value="Envoyer" />
        </form>
      </div>
      <div className="flex justify-center items-center">
        <h6 className="mx-4">©2022 </h6>
        <span className="">Street trot </span>
      </div>
    </div>
  );
};

export default Footer;
