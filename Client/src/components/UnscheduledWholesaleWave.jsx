import { useEffect, useState } from "react";
import { GrCheckbox, GrCheckboxSelected } from "react-icons/gr";
import { updateWavePrinted } from "../function/waveUpdate";

const UnscheduledWholesaleWave = ({
  location,
  date,
  wave,
  customer,
  units,
  startShip,
  cancelDate,
  tenderDate,
  shipDate,
  printed,
  user,
}) => {
  const [waveLineData, setWaveLineData] = useState({
    date: date,
    wave: wave,
    customer: customer,
    units: units,
    startShip: startShip,
    cancelDate: cancelDate,
    tenderDate: tenderDate,
    shipDate: shipDate,
    user: user,
    edit: false,
    location: location,
  });

  const handleLineChange = (e) => {
    setWaveLineData((prevState) => {
      return {
        ...prevState,
        [e.target.name.split("update")[1]]: e.target.value,
      };
    });
  };
  return (
    <tr>
      <th scope="col" className="sm:text-xs xl:text-sm mx-2 px-4 bg-orange-300">
        {waveLineData.date}
      </th>
      <th
        scope="col"
        className="sm:text-xs xl:text-sm mx-2 px-2 bg-blue-300 hidden md:table-cell"
      >
        {waveLineData.location}
      </th>

      <th scope="col" className="sm:text-xs xl:text-sm mx-2 px-4 bg-pink-300">
        {waveLineData.wave}
      </th>
      <th scope="col" className="sm:text-xs xl:text-sm mx-2 px-4 bg-indigo-300">
        {waveLineData.customer}
      </th>
      <th scope="col" className="sm:text-xs xl:text-sm mx-2 px-4 bg-green-300">
        {waveLineData.units}
      </th>
      <th scope="col" className="sm:text-xs xl:text-sm mx-2 px-4 bg-red-300">
        {waveLineData.startShip}
      </th>
      <th scope="col" className="sm:text-xs xl:text-sm mx-2 px-4 bg-red-300">
        {waveLineData.cancelDate}
      </th>
      <th scope="col" className="sm:text-xs xl:text-sm mx-2 px-4 bg-purple-300">
        <input
          className="w-24 text-xs text-center text-black rounded-lg"
          type="text"
          value={waveLineData.tenderDate}
          onChange={(e) => handleLineChange(e)}
          name="updatetenderDate"
          autoComplete="off"
        ></input>
      </th>
      <th scope="col" className="sm:text-xs xl:text-sm mx-2 px-4 bg-purple-300">
        <input
          className="w-24 text-xs text-center text-black rounded-lg"
          type="text"
          value={waveLineData.shipDate}
          onChange={(e) => handleLineChange(e)}
          name="updateshipDate"
          autoComplete="off"
        ></input>
      </th>
      {/* <th
        scope="col"
        className="sm:text-xs xl:text-sm mx-2 px-4 bg-orange-300 "
      >
        {printed === "Y" ? (
          <GrCheckboxSelected
            size={20}
            className="mx-auto cursor-pointer hover:scale-125"
            onClick={() => updateWavePrinted(wave)}
          />
        ) : (
          <GrCheckbox
            size={20}
            className="mx-auto cursor-pointer hover:scale-125"
            onClick={() => updateWavePrinted(wave, printed)}
          />
        )}
      </th> */}
    </tr>
  );
};

export default UnscheduledWholesaleWave;
