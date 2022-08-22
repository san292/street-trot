import React from 'react';
import Articles from '../components/Articles';

const PiecesDetachees = () => {
  return (
    <div className=" md:mx-20 mt-4 relative top-20 md:top-10  z-0">
      <div className="flex-column justify-items-center pl-5 py-4">
        <h1>Accessoires et piéces détachées</h1>
        <h5 className="hidden md:block pt-2">
          Tous nos accesoires et piéces sont en pricipes d'occasions, mais pour
          mieux vous servir certains de nos articles peuvent être neuves
        </h5>
      </div>
      <div className="text-center">
        <Articles />
      </div>
    </div>
  );
};

export default PiecesDetachees;
