import { useEffect, useState } from "react";
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
  // selectItemToUpdate,
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

  const selectItemToUpdate = (e) => {
    setWaveLineData((prevState) => {
      return {
        ...prevState,
        edit: !waveLineData.edit,
      };
    });
    console.log(waveLineData);
  };

  useEffect(() => {
    console.log(waveLineData.edit);
  }, []);

  return (
    waveLineData.edit ? (
    <tr>
      <th scope="col" className="sm:text-xs xl:text-sm mx-2 px-4 bg-orange-300">
        {date}
      </th>
      <th>
        <input
          className="w-24 text-xs text-center text-black"
          type="list"
          list="locations"
          placeholder={waveLineData.location}
          name="updateLocation"
          autoComplete="off"
        ></input>
      </th>
      <th>
        <input
          className="w-24 text-xs text-center text-black"
          type="text"
          placeholder={waveLineData.user}
          name="updateUser"
          autoComplete="off"
        ></input>
      </th>
      <th>
        <input
          className="w-24 text-xs text-center text-black"
          type="text"
          placeholder={waveLineData.wave}
          name="updateWave"
          autoComplete="off"
        ></input>
      </th>
      <th>
        <input
          className="w-24 text-xs text-center text-black"
          type="list"
          list="customers"
          placeholder={waveLineData.customer}
          name="updateCustomer"
          autoComplete="off"
        ></input>
      </th>
      <th>
        <input
          className="w-24 text-xs text-center text-black"
          type="text"
          placeholder={waveLineData.units}
          name="updateUnits"
          autoComplete="off"
        ></input>
      </th>
      <th>
        <input
          className="w-24 text-xs text-center text-black"
          type="text"
          placeholder={waveLineData.startShip}
          name="updatestartShip"
          autoComplete="off"
        ></input>
      </th>
      <th>
        <input
          className="w-24 text-xs text-center text-black"
          type="text"
          placeholder={waveLineData.cancelDate}
          name="updatecancelDate"
          autoComplete="off"
        ></input>
      </th>
      <th>
        <input
          className="w-24 text-xs text-center text-black"
          type="text"
          placeholder={waveLineData.tenderDate}
          name="updatetenderDate"
          autoComplete="off"
        ></input>
      </th>
      <th>
        <input
          className="w-24 text-xs text-center text-black"
          type="text"
          placeholder={waveLineData.shipDate}
          name="updateshipDate"
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
    ) : (
      <tr>
        <th
          scope="col"
          className="sm:text-xs xl:text-sm mx-2 px-4 bg-orange-300"
        >
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

        <th
          scope="col"
          className="sm:text-xs xl:text-sm mx-2 px-4 bg-pink-300"
          onDoubleClick={(e) => selectItemToUpdate(e)}
        >
          {wave}
        </th>
        <th
          scope="col"
          className="sm:text-xs xl:text-sm mx-2 px-4 bg-indigo-300"
          onClick={() => selectItemToUpdate(customer)}
        >
          {customer}
        </th>
        <th
          scope="col"
          className="sm:text-xs xl:text-sm mx-2 px-4 bg-green-300"
          onClick={() => selectItemToUpdate(units)}
        >
          {units}
        </th>
        <th
          scope="col"
          className="sm:text-xs xl:text-sm mx-2 px-4 bg-red-300"
          onClick={() => selectItemToUpdate(startShip)}
        >
          {startShip}
        </th>
        <th
          scope="col"
          className="sm:text-xs xl:text-sm mx-2 px-4 bg-red-300"
          onClick={() => selectItemToUpdate(cancelDate)}
        >
          {cancelDate}
        </th>
        <th
          scope="col"
          className="sm:text-xs xl:text-sm mx-2 px-4 bg-purple-300"
          onClick={() => selectItemToUpdate(tenderDate)}
        >
          {tenderDate}
        </th>
        <th
          scope="col"
          className="sm:text-xs xl:text-sm mx-2 px-4 bg-purple-300"
          // onClick={() => selectItemToUpdate(shipDate)}
          onClick={() => console.log(e)}
        >
          {shipDate}
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
    )
  );
};

export default WholesaleWave;
