import { useEffect, useState } from "react";

const UnscheduledWholesaleWave = ({
  location,
  date,
  wave,
  customer,
  units,
  startShip,
  cancelDate,
  user,
  handleSelectionChange
}) => {
  const [waveLineData, setWaveLineData] = useState({
    date: date,
    wave: wave,
    customer: customer,
    units: units,
    startShip: startShip,
    cancelDate: cancelDate,
    user: user,
    edit: false,
    location: location,
  });

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
      <th scope="col" className="sm:text-xs xl:text-sm mx-2 px-4 bg-lime-300">
        <input 
          type="checkbox" 
          //set up the check for whether it's in the toUpdate Array
            //set up for checked. add checked as a attribute from the wave list. set up function
            // to read the state and render out as checked if it's true:
          // checked={}
          defaultChecked={false}
          name={waveLineData.wave}
          onChange={() => handleSelectionChange(waveLineData.wave)}
        />
      </th>
    </tr>
  );
};

export default UnscheduledWholesaleWave;
