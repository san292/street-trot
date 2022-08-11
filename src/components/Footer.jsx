import React from 'react';

const Footer = () => {
  return (
    <div className="bg-primary text-white h-[60px] flex justify-center  items-center  ">
      <div className="flex justify-around  ml-6">
        <h3>NEWSLETTER</h3>
        <form className="mr-10">
          <label>
            <span className=" ml-6">Email </span>
            <input type="email" name="email" />
          </label>
          <input className=" ml-6" type="submit" value="Envoyer" />
        </form>
      </div>
      <span className="mx-4">©2022 </span>
      <span className="">Street trot </span>
    </div>
  );
};

export default Footer;
