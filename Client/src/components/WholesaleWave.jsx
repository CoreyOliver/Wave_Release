import React from "react";
import {
  GrEdit,
  GrTrash,
  GrCheckbox,
  GrCheckboxSelected,
} from "react-icons/gr";
import { updateWavePrinted } from "../function/waveUpdate";

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
  user,
  deleteSelectedWave,
  editWave,
}) => {
  return (
    <tr className="">
      <th scope="col" className="sm:text-xs xl:text-sm mx-2 px-4 bg-orange-300">
        {date}
      </th>
      <th
        scope="col"
        className="sm:text-xs xl:text-sm mx-2 px-2 bg-blue-300 hidden md:table-cell"
      >
        {location}
      </th>
      <th
        scope="col"
        className="sm:text-xs xl:text-sm mx-2 px-4 bg-yellow-300 hidden md:table-cell"
      >
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
      <th
        scope="col"
        className="sm:text-xs xl:text-sm mx-2 px-4 bg-orange-300 "
      >
        {printed === "Y" ? (
          <GrCheckboxSelected size={20} className="mx-auto cursor-pointer" onClick={() => updateWavePrinted(wave)}/>
        ) : (
          <GrCheckbox size={20} className="mx-auto cursor-pointer" onClick={() => updateWavePrinted(wave)}/>
        )}
      </th>
      <th className="rounded-xl bg-emerald-400">
        <GrEdit
          size={20}
          className="rounded-sm  mx-2"
          onClick={() => editWave(wave)}
          cursor="pointer"
        />
      </th>
      <th className="rounded-xl bg-emerald-400">
        <GrTrash
          size={20}
          className="rounded-sm mx-2"
          onClick={() => deleteSelectedWave(wave)}
          cursor="pointer"
        />
      </th>
    </tr>
  );
};

export default WholesaleWave;
