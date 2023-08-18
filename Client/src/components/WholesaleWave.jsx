import React from "react";

const WholesaleWave = ({
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
  user
}) => {
  return (
    <tr className="">
      <th scope="col" className="sm:text-xs xl:text-sm mx-2 px-4 bg-orange-300">
        {date}
      </th>
      <th scope="col" className="sm:text-xs xl:text-sm mx-2 px-4 bg-blue-300">
        {location}
      </th>
      <th scope="col" className="sm:text-xs xl:text-sm mx-2 px-4 bg-yellow-300 hidden md:table-cell">
        {user}
      </th>
      <th scope="col" className="sm:text-xs xl:text-sm mx-2 px-4 bg-pink-300">
        {wave}
      </th>
      <th scope="col" className="sm:text-xs xl:text-sm mx-2 px-4 bg-indigo-300">
        {customer}
      </th>
      <th scope="col" className="sm:text-xs xl:text-sm mx-2 px-4 bg-green-300">
        {units}
      </th>
      <th scope="col" className="sm:text-xs xl:text-sm mx-2 px-4 bg-red-300">
        {startShip}
      </th>
      <th scope="col" className="sm:text-xs xl:text-sm mx-2 px-4 bg-red-300">
        {cancelDate}
      </th>
      <th scope="col" className="sm:text-xs xl:text-sm mx-2 px-4 bg-purple-300">
        {tenderDate}
      </th>
      <th scope="col" className="sm:text-xs xl:text-sm mx-2 px-4 bg-purple-300">
        {shipDate}
      </th>
      <th scope="col" className="sm:text-xs xl:text-sm mx-2 px-4 bg-orange-300">
        {printed}
      </th>
    </tr>
  );
};

export default WholesaleWave;
