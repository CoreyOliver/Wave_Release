import WholesaleWave from "./WholesaleWave";

import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";

export async function loader() {
  const res = await fetch('http://localhost:3000');
  const waves = await res.json();
  return waves;
}
const WholesaleWaveTable = () => {
  const waves = useLoaderData();
  const [waveData, setWaveData] = useState(waves);

  const wholesaleWavesToList = waveData.map(wave => {
    <WholesaleWave 
      location={wave.whLocation}
      // date={new Date(today())}
      wave={wave.waveNumber}
      customer={wave.customer}
      units={wave.unitCount}
      startShip={wave.startShip}
      cancelDate={wave.cancelDate}
      tenderDate={wave.tenderDate}
      shipdate={wave.shipDate}
      // printed={wave.printed}
    />
  })
  useEffect(() => console.log(waveData), waveData);

  console.log(waves[0]);
  return (
    <div className="pt-32 flex justify-center items-center px-8 mx-auto">
      <table className="table mx-4 mt-4 pb-8">
        <tbody>
          <tr className="">
            <th scope="col" className="mx-2 px-4">
              WH
            </th>
            <th scope="col" className="mx-2 px-4">
              Date
            </th>
            <th scope="col" className="mx-2 px-4">
              User
            </th>
            <th scope="col" className="mx-2 px-4">
              Wave
            </th>
            <th scope="col" className="mx-2 px-4">
              Account
            </th>
            <th scope="col" className="mx-2 px-4">
              Units
            </th>
            <th scope="col" className="mx-2 px-4">
              Start Ship
            </th>
            <th scope="col" className="mx-2 px-4">
              Cancel Date
            </th>
            <th scope="col" className="mx-2 px-4">
              Tender Date
            </th>
            <th scope="col" className="mx-2 px-4">
              Ship Date
            </th>
            <th scope="col" className="mx-2 px-4">
              Printed
            </th>
          </tr>
          {wholesaleWavesToList}
        </tbody>
      </table>
    </div>
  );
};

export default WholesaleWaveTable;
