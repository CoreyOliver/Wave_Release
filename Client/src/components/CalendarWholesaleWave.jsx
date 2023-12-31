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

const CalendarWholesaleWave = ({
  wave,
  customer,
  units,
  startShip,
  cancelDate,
  tenderDate,
  shipDate,
  deleteSelectedWave,
  editCalendarWave,
}) => {
  const [waveLineData, setWaveLineData] = useState({
    wave: wave,
    customer: customer,
    units: units,
    startShip: startShip,
    cancelDate: cancelDate,
    tenderDate: tenderDate,
    shipDate: shipDate,
    edit: false,
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
      <th scope="col" className="sm:text-xs xl:text-sm mx-2 px-4 bg-cyan-300">
        <input
          className="w-24 text-xs text-center text-black rounded-lg"
          type="text"
          value={waveLineData.tenderDate}
          onChange={(e) => handleLineChange(e)}
          name="updatetenderDate"
          autoComplete="off"
        ></input>
      </th>
      <th scope="col" className="sm:text-xs xl:text-sm mx-2 px-4 bg-cyan-300">
        <input
          className="w-24 text-xs text-center text-black rounded-lg"
          type="text"
          value={waveLineData.shipDate}
          onChange={(e) => handleLineChange(e)}
          name="updateshipDate"
          autoComplete="off"
        ></input>
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
            editCalendarWave(
              waveLineData.wave,
              waveLineData.customer,
              waveLineData.units,
              waveLineData.startShip,
              waveLineData.cancelDate,
              waveLineData.tenderDate,
              waveLineData.shipDate
            )
          }
          cursor="pointer"
        />
      </th>
    </tr>
  ) : (
    <tr>

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
      <th scope="col" className="sm:text-xs xl:text-sm mx-2 px-4 bg-cyan-300">
        {tenderDate}
      </th>
      <th scope="col" className="sm:text-xs xl:text-sm mx-2 px-4 bg-cyan-300">
        {shipDate}
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

export default CalendarWholesaleWave;
