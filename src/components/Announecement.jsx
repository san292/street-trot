import React from 'react';
import { BsFillTelephoneFill } from 'react-icons/bs';

const Announecement = () => {
  return (
    <div className="relative flex h-[60px] justify-center items-center  font-light  bg-primary text-white border-b-[0.1px]">
      <h3 className=" fixed ">Expert de la mobilité depuis 2018</h3>

      <span className=" fixed  left-8">
        <BsFillTelephoneFill />
      </span>
      <span className=" fixed left-16">06/51/60/60/43</span>
    </div>
  );
};

export default Announecement;
