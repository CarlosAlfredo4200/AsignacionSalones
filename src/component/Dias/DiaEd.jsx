import React from "react";
import Dia from "./Dia";

const diasSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];

 

const DiaEd = () => {
  return (
    <div className="dia">
      {diasSemana.map((diass) => (
        <Dia diass={diass} key={diass} />
      ))}
    </div>
  );
};

export default DiaEd;
