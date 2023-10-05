import { useEffect, useState } from "react";
import {
  GrTrash,
  GrCheckbox,
  GrCheckboxSelected,
  GrClipboard,
} from "react-icons/gr";
import { updateWavePrinted } from "../function/waveUpdate";
import { useMatch } from "react-router-dom";

const WebWave = ({
  location,
  date,
  wave,
  units,
  printed,
  user,
  // deleteSelectedWave,
  // editWave,
  // copyWaveLine
}) => {
  const [waveLineData, setWaveLineData] = useState({
    wave: wave,
    customer: customer,
    units: units,
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

  useEffect(() => {
      console.log(waveLineData);
    const match = useMatch("/webs").
    console.log(match)
  }, []);

  return (
    <tr>
      <th scope="col" className="sm:text-xs xl:text-sm mx-2 px-4 bg-orange-300">
        {date}
      </th>
      <th scope="col" className="sm:text-xs xl:text-sm mx-2 px-2 bg-blue-300">
        {location}
      </th>
      <th scope="col" className="sm:text-xs xl:text-sm mx-2 px-4 bg-yellow-300">
        {user}
      </th>
      <th scope="col" className="sm:text-xs xl:text-sm mx-2 px-4 bg-pink-300">
        {wave}
      </th>
      <th scope="col" className="sm:text-xs xl:text-sm mx-2 px-4 bg-green-300">
        {units}
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

export default WebWave;
