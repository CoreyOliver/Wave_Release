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

  const handleLineChange = (e) => {
    console.log(e)
    // setWaveLineData((prevState) => {
    //   return {
    //     ...prevState,
    //     [e.target.name.split("update")[1]]: e.target.value,
    //   };
    // });
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
    </tr>
  );
};

export default UnscheduledWholesaleWave;
