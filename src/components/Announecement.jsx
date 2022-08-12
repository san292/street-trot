import React from 'react';
import { BsFillTelephoneFill } from 'react-icons/bs';

const Announecement = () => {
  return (
    <div className=" flex h-[40px] justify-center items-center  font-light  bg-primary text-white border-b-[0.1px]">
      <h3 className="shrink-0">Expert de la mobilité depuis 2018</h3>

      <span className="ml-10">
        <BsFillTelephoneFill />
      </span>
      <span className=" ml-2">06/51/60/60/43</span>
    </div>
  );
};

export default Announecement;
