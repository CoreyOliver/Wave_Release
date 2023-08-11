import React from "react";

const Wave = ({location, date, wave, units, web, printed}) => {
  return (
    <tr className="">
      <th scope="col" className="mx-2 px-4">
        {date}
      </th>
      <th scope="col" className="mx-2 px-4">
        {location}
      </th>
      <th scope="col" className="mx-2 px-4">
        {wave}
      </th>
      <th scope="col" className="mx-2 px-4">
        {units}
      </th>
      <th scope="col" className="mx-2 px-4">
        {web}
      </th>
      <th scope="col" className="mx-2 px-4">
        {printed}
      </th>
    </tr>
  );
};

export default Wave;
