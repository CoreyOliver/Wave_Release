import WholesaleWave from "./WholesaleWave";

import { useLoaderData, Form } from "react-router-dom";
import { useState, useEffect } from "react";

export async function loader() {
  const res = await fetch("http://localhost:3000");
  const waves = await res.json();
  return waves;
}

const WholesaleWaveTable = () => {
  const waves = useLoaderData();
  const [waveData, setWaveData] = useState(waves);
  const [formData, setFormData] = useState({
    waveDate: (new Date()).toLocaleDateString('en-US', {
      day:'2-digit',
      month:'2-digit'
    }),
    waveLocation: "",
    waveUser: "",
    waveNumber: "",
    waveCustomer: "",
    waveCount: "",
    waveStartShip: "",
    waveCancelDate: "",
    waveTenderDate: "",
    waveShipDate: "",
    wavePrinted: "N",
  });

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

  useEffect(() => console.log(formData), [formData]);

  const handleChange = (e) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <div className="pt-32 flex justify-center items-center px-8 mx-auto">
      <table className="table mx-4 mt-4 pb-8">
        <thead>
          <tr className="">
            <th
              scope="col"
              className="mx-2 px-4 bg-orange-400 border-slate-600"
            >
              Date
            </th>
            <th scope="col" className="mx-2 px-4 bg-blue-400 border-slate-600">
              WH
            </th>
            <th
              scope="col"
              className="mx-2 px-4 bg-yellow-400 border-slate-600"
            >
              Waver
            </th>
            <th scope="col" className="mx-2 px-4 bg-pink-400 border-slate-600">
              Wave
            </th>
            <th
              scope="col"
              className="mx-2 px-4 bg-indigo-400 border-slate-600"
            >
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
            <th
              scope="col"
              className="mx-2 px-4 bg-purple-400 border-slate-600"
            >
              Tender Date
            </th>
            <th
              scope="col"
              className="mx-2 px-4 bg-purple-400 border-slate-600"
            >
              Ship Date
            </th>
            <th
              scope="col"
              className="mx-2 px-4 bg-orange-400 border-slate-600"
            >
              Printed
            </th>
          </tr>
        </thead>
        <tbody>
          {wholesaleWavesToList}
          <tr>
            <th
              scope="col"
              className="sm:text-xs xl:text-sm mx-2 px-4 bg-orange-300"
            >
              <input
                className="w-24 text-xs text-center"
                type="text"
                placeholder="Date"
                name="waveDate"
                value={formData.waveDate}
                onChange={(e) => handleChange(e)}
              />
            </th>
            <th
              scope="col"
              className="sm:text-xs xl:text-sm mx-2 px-4 bg-blue-300"
            >
              <input
                className="w-24 text-xs text-center"
                type="text"
                placeholder="WH"
                name="waveLocation"
                value={formData.waveLocation}
                onChange={(e) => handleChange(e)}
              />
            </th>
            <th
              scope="col"
              className="sm:text-xs xl:text-sm mx-2 px-4 bg-yellow-300 hidden md:table-cell"
            >
              <input
                className="w-24 text-xs text-center"
                type="text"
                placeholder="Waver"
                name="waveUser"
                value={formData.waveUser}
                onChange={(e) => handleChange(e)}
              />
            </th>
            <th
              scope="col"
              className="sm:text-xs xl:text-sm mx-2 px-4 bg-pink-300"
            >
              <input
                className="w-24 text-xs text-center"
                type="text"
                placeholder="Wave Number"
                name="waveNumber"
                value={formData.waveNumber}
                onChange={(e) => handleChange(e)}
              />
            </th>
            <th
              scope="col"
              className="sm:text-xs xl:text-sm mx-2 px-4 bg-indigo-300"
            >
              <input
                className="w-24 text-xs text-center"
                type="text"
                placeholder="Customer"
                name="waveCustomer"
                value={formData.waveCustomer}
                onChange={(e) => handleChange(e)}
              />
            </th>
            <th
              scope="col"
              className="sm:text-xs xl:text-sm mx-2 px-4 bg-green-300"
            >
              <input
                className="w-24 text-xs text-center"
                type="text"
                placeholder="Unit Count"
                name="waveCount"
                value={formData.waveCount}
                onChange={(e) => handleChange(e)}
              />
            </th>
            <th
              scope="col"
              className="sm:text-xs xl:text-sm mx-2 px-4 bg-red-300"
            >
              <input
                className="w-24 text-xs text-center"
                type="text"
                placeholder="Start Ship"
                name="waveStartShip"
                value={formData.waveStartShip}
                onChange={(e) => handleChange(e)}
              />
            </th>
            <th
              scope="col"
              className="sm:text-xs xl:text-sm mx-2 px-4 bg-red-300"
            >
              <input
                className="w-24 text-xs text-center"
                type="text"
                placeholder="Cancel Date"
                name="waveCancelDate"
                value={formData.waveCancelDate}
                onChange={(e) => handleChange(e)}
              />
            </th>
            <th
              scope="col"
              className="sm:text-xs xl:text-sm mx-2 px-4 bg-purple-300"
            >
              <input
                className="w-24 text-xs text-center"
                type="text"
                placeholder="Tender Date"
                name="waveTenderDate"
                value={formData.waveTenderDate}
                onChange={(e) => handleChange(e)}
              />
            </th>
            <th
              scope="col"
              className="sm:text-xs xl:text-sm mx-2 px-4 bg-purple-300"
            >
              <input
                className="w-24 text-xs text-center"
                type="text"
                placeholder="Ship Date"
                name="waveShipDate"
                value={formData.waveShipDate}
                onChange={(e) => handleChange(e)}
              />
            </th>
            <th
              scope="col"
              className="sm:text-xs xl:text-sm mx-2 px-4 bg-orange-300"
            >
              <input
                className="w-24 text-xs text-center"
                type="text"
                placeholder="Printed"
                name="wavePrinted"
                value={formData.wavePrinted}
                onChange={(e) => handleChange(e)}
              />
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WholesaleWaveTable;
