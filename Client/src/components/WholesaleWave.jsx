import { useEffect, useState } from "react";
import {
  GrEdit,
  GrTrash,
  GrCheckbox,
  GrCheckboxSelected,
  GrLinkBottom,
  GrClose,
  GrClipboard,
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
  copyWaveLine
}) => {
  const [waveLineData, setWaveLineData] = useState({
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

  const selectItemToUpdate = () => {
    setWaveLineData((prevState) => {
      return {
        ...prevState,
        edit: !waveLineData.edit,
      };
    });
  };

  const handleLineChange = (e) => {
    setWaveLineData((prevState) => {
      return {
        ...prevState,
        [e.target.name.split("update")[1]]: e.target.value,
      };
    });
  };

  // useEffect(() => {
  //   console.log(waveLineData);
  // }, []);

  return waveLineData.edit ? (
    <tr>
      <th scope="col" className="sm:text-xs xl:text-sm mx-2 px-4 bg-orange-300">
        {date}
      </th>
      <th
        scope="col"
        className="sm:text-xs xl:text-sm mx-2 px-2 bg-blue-300 hidden md:table-cell"
      >
        <input
          className="w-24 text-xs text-center text-black rounded-lg"
          type="list"
          list="locations"
          value={waveLineData.location}
          onChange={(e) => handleLineChange(e)}
          name="updatelocation"
          autoComplete="off"
        ></input>
      </th>
      <th
        scope="col"
        className="sm:text-xs xl:text-sm mx-2 px-4 bg-yellow-300 hidden md:table-cell"
      >
        <input
          className="w-24 text-xs text-center text-black rounded-lg"
          type="text"
          value={waveLineData.user}
          onChange={(e) => handleLineChange(e)}
          name="updateuser"
          autoComplete="off"
        ></input>
      </th>
      <th scope="col" className="sm:text-xs xl:text-sm mx-2 px-4 bg-pink-300">
        <input
          className="w-24 text-xs text-center text-black rounded-lg"
          type="text"
          value={waveLineData.wave}
          onChange={(e) => handleLineChange(e)}
          name="updatewave"
          autoComplete="off"
        ></input>
      </th>
      <th scope="col" className="sm:text-xs xl:text-sm mx-2 px-4 bg-indigo-300">
        <input
          className="w-24 text-xs text-center text-black rounded-lg"
          type="list"
          list="customers"
          value={waveLineData.customer}
          onChange={(e) => handleLineChange(e)}
          name="updatecustomer"
          autoComplete="off"
        ></input>
      </th>
      <th scope="col" className="sm:text-xs xl:text-sm mx-2 px-4 bg-green-300">
        <input
          className="w-24 text-xs text-center text-black rounded-lg"
          type="text"
          value={waveLineData.units}
          onChange={(e) => handleLineChange(e)}
          name="updateunits"
          autoComplete="off"
        ></input>
      </th>
      <th scope="col" className="sm:text-xs xl:text-sm mx-2 px-4 bg-red-300">
        <input
          className="w-24 text-xs text-center text-black rounded-lg"
          type="text"
          value={waveLineData.startShip}
          onChange={(e) => handleLineChange(e)}
          name="updatestartShip"
          autoComplete="off"
        ></input>
      </th>
      <th scope="col" className="sm:text-xs xl:text-sm mx-2 px-4 bg-red-300">
        <input
          className="w-24 text-xs text-center text-black rounded-lg"
          type="text"
          value={waveLineData.cancelDate}
          onChange={(e) => handleLineChange(e)}
          name="updatecancelDate"
          autoComplete="off"
        ></input>
      </th>
      <th
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
      </th>
      <th className="rounded-lg bg-red-600">
        <GrClose
          size={20}
          className="rounded-sm  mx-2"
          onClick={() => selectItemToUpdate()}
          cursor="pointer"
        />
      </th>
      <th className="rounded-lg bg-red-600">
        <GrLinkBottom
          size={20}
          className="rounded-sm mx-2"
          onClick={() =>
            editWave(
              waveLineData.location,
              waveLineData.user,
              waveLineData.wave,
              waveLineData.customer,
              waveLineData.units,
              waveLineData.startShip,
              waveLineData.cancelDate,
            )
          }
          cursor="pointer"
        />
      </th>
    </tr>
  ) : (
    <tr>
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
      <th
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
      </th>
      <th className="rounded-lg bg-emerald-600">
        <GrEdit
          size={20}
          className="rounded-sm  mx-2"
          onClick={() => selectItemToUpdate()}
          cursor="pointer"
        />
      </th>
      <th className="rounded-lg bg-emerald-600">
        <GrClipboard
          size={20}
          className="rounded-sm mx-2"
          onClick={() => copyWaveLine(
            location,
            customer,
            units,
            user,
            startShip,
            cancelDate,
            tenderDate,
            shipDate,
          )}
          cursor="pointer"
        />
      </th>
      <th className="rounded-lg bg-emerald-600">
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
