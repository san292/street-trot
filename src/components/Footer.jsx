import React from 'react';

const Footer = () => {
  return (
    <div className="bg-primary text-white h-[60px] flex justify-center  items-center  ">
      <div className="flex justify-around  ml-6">
        <h3>
          Abonnez-vous à notre newsletter et recevez 5% de remise sur votre
          première commande ! (Pensez à vérifier vos spams !)
        </h3>
        <form className="mr-10">
          <label className=" ml-4">
            {/* <span className=" ml-6"> </span> */}
            <input type="email" name="email" placeholder=" E-mail" />
          </label>
          <input className=" ml-3" type="submit" value="Envoyer" />
        </form>
      </div>
      <span className="mx-4">©2022 </span>
      <span className="">Street trot </span>
    </div>
  );
};

export default Footer;
