import { getNodeText } from '@testing-library/react';
import NoWorkResult from 'postcss/lib/no-work-result';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Atelier = () => {
  const [date, setDate] = useState(new Date());
  const handelChange = (date) => {
    setDate(date);
  };
  return (
    <div className="h-full py-16 container md:max-h-full text-center p-2 mx-auto rounded-md my-10 ">
      <h1 className="text-center text- pb-3 text-secondary my-4 shadow-sm shadow-cyan-500/50">
        Calendrier Atelier
      </h1>

      <Calendar
        className="mx-auto max-w-full p-2 rounded-md mb-4"
        onChange={handelChange}
        value={date}
      />

      <p className="text-canter mt-6 border-t md:border-cyan-500/50   text-secondary ">
        <span className=" font-bold mx-3"> Selected Dates : </span>
        <span className="mt-4">{date.toString()}</span>
        {/* <span className="mt-4">{date.toLocaleDateString('fr-FR')}</span> */}
      </p>
    </div>
  );
};

export default Atelier;
