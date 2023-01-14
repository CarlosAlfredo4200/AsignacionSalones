import React, { useState } from "react";
import Select from "react-select";

const horaClases = [
  { label: "7:00 am", value: "7:00" },
  { label: "8:00 am", value: "8" },
  { label: "9:00 am", value: "9" },
];
const HoraEd = () => {
  const [horaSelect, setHoraSelect] = useState();
  const handleSelectChange = ({ value }) => {
    setHoraSelect(value);
  };
  return (
    <div className="hora">
      <Select className="hora-div" options={horaClases} onChange={handleSelectChange} />
      <p className="hora-div ph"> Horario seleccionado : {horaSelect}</p>
    </div>
  );
};

export default HoraEd;
