import React from 'react';
import Articles from '../components/Articles';

const PiecesDetachees = () => {
  return (
    <div className="mx-20 ">
      <div className="flex-column justify-items-center py-4">
        <h1>Accessoires et piéces Pieces détachées</h1>
        <h3>
          Retrouvez tous nos accessoires pour vos déplacements urbains en
          trottinette électrique
        </h3>
        <h5>
          Tous nos accesoires et piéces sont en pricipes d'occasions, mais pour
          mieux vous servir certains de nos articles peuvent être neuves
        </h5>
      </div>
      <div className="">
        <Articles />
      </div>
    </div>
  );
};

export default PiecesDetachees;
