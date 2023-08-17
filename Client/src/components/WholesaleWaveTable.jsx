import WholesaleWave from "./WholesaleWave";

import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";

export async function loader() {
  const res = await fetch("http://localhost:3000");
  const waves = await res.json();
  return waves;
}
const WholesaleWaveTable = () => {
  const waves = useLoaderData();
  const [waveData, setWaveData] = useState(waves);

  const wholesaleWavesToList = waveData.map((wave) => (
    <WholesaleWave
      key={wave.waveNumber}
      location={wave.whLocation}
      date={wave.waveDate}
      wave={wave.waveNumber}
      customer={wave.customer}
      units={wave.unitCount}
      startShip={wave.startShip}
      cancelDate={wave.cancelDate}
      tenderDate={wave.tenderDate}
      shipDate={wave.shipDate}
      printed={wave.printed}
      user={wave.user}
    />
  ));
  useEffect(() => console.log(waveData), waveData);

  return (
    <div className="pt-32 flex justify-center items-center px-8 mx-auto">
      <table className="table mx-4 mt-4 pb-8">
        <tbody>
          <tr className="">
            <th scope="col" className="mx-2 px-4 bg-orange-400 border-slate-600">
              Date
            </th>
            <th scope="col" className="mx-2 px-4 bg-blue-400 border-slate-600">
              WH
            </th>
            <th scope="col" className="mx-2 px-4 bg-yellow-400 border-slate-600">
              Waver
            </th>
            <th scope="col" className="mx-2 px-4 bg-pink-400 border-slate-600">
              Wave
            </th>
            <th scope="col" className="mx-2 px-4 bg-indigo-400 border-slate-600">
              Account
            </th>
            <th scope="col" className="mx-2 px-4 bg-green-400 border-slate-600">
              Units
            </th>
            <th scope="col" className="mx-2 px-4 bg-red-400 border-slate-600">
              Start Ship
            </th>
            <th scope="col" className="mx-2 px-4 bg-red-400 border-slate-600">
              Cancel Date
            </th>
            <th scope="col" className="mx-2 px-4 bg-purple-400 border-slate-600">
              Tender Date
            </th>
            <th scope="col" className="mx-2 px-4 bg-purple-400 border-slate-600">
              Ship Date
            </th>
            <th scope="col" className="mx-2 px-4 bg-orange-400 border-slate-600">
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
