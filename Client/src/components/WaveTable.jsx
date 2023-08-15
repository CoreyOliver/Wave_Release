import React from "react";
import Wave from "./Wave";

import { useLoaderData } from "react-router-dom";
import { useState } from "react";

export async function loader() {
  const res = await fetch('http://localhost:3000');
  const waves = await res.json();
  return waves;
}

const WaveTable = () => {
  const waves = useLoaderData()
  
  const [ waveData, setWaveData] = useState(waves)
  
  console.log(waves[0])

  return (
    <div className="pt-32 flex justify-center items-center px-8 mx-auto">
      <table className="table mx-4 mt-4 pb-8">
        <tbody>
          <tr className="">
            <th scope="col" className="mx-2 px-4">
              Wave Date
            </th>
            <th scope="col" className="mx-2 px-4">
              WH Location
            </th>
            <th scope="col" className="mx-2 px-4">
              Wave
            </th>
            <th scope="col" className="mx-2 px-4">
              Units
            </th>
            <th scope="col" className="mx-2 px-4">
              Web
            </th>
            <th scope="col" className="mx-2 px-4">
              Printed
            </th>
          </tr>
          <Wave
            location={waves[0].whLocation}
            date={waves[0].date}
            wave={waves[0].waveNumber}
            units={waves[0].units}
            web={waves[0].web}
            printed={waves[0].printed}
           />
        </tbody>
      </table>
    </div>
  );
};

export default WaveTable;
