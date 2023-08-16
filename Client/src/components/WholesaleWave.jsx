import React from "react";

const WholesaleWave = ({location, date,  wave, customer, units, startShip, cancelDate, tenderDate, shipDate, printed}) => {
  return (
    <tr className="">
      <th scope="col" className="mx-2 px-4">
        {location}
      </th>
      <th scope="col" className="mx-2 px-4">
        {date}
      </th>
      <th scope="col" className="mx-2 px-4">
        {wave}
      </th>
      <th scope="col" className="mx-2 px-4">
        {customer}
      </th>
      <th scope="col" className="mx-2 px-4">
        {units}
      </th>
      <th scope="col" className="mx-2 px-4">
        {startShip}
      </th>
      <th scope="col" className="mx-2 px-4">
        {cancelDate}
      </th>
      <th scope="col" className="mx-2 px-4">
        {tenderDate}
      </th>
      <th scope="col" className="mx-2 px-4">
        {shipDate}
      </th>
      {/* <th scope="col" className="mx-2 px-4">
        {printed}
      </th> */}
    </tr>
  );
};

export default WholesaleWave;
