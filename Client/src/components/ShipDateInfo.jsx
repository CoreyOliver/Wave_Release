import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import WholesaleWave from "./WholesaleWave";

export async function loader({ customer, shipDate }) {
  console.log(customer, shipDate);
  const res = await fetch(
    `http://localhost:3000/dateCheck/${customer}/${shipDate}`
  );
  const wavesToShow = await res.json();
  return wavesToShow;
}

const ShipDateInfo = () => {
  const wavesList = useLoaderData();
  const [waveData, setWaveData] = useState(wavesList);

  const customerDateList = wavesList.map(x => <li className="p-0 m-0" key={x.waveNumber}>{x.waveNumber}</li>)

  console.log(customerDateList);

  return (
    <div className="pt-32 flex-col px-8 mx-auto">
      <div className="flex justify-between mb-8">
        <h2 className="px-8">{waveData[0].customer}</h2>
        <h2 className="px-8">{waveData[0].shipDate}</h2>
      </div>
      <div className="grid-cols-2">
        <ul>{customerDateList}</ul>
      </div>
      {/* render out the wave details */}
    </div>
  );
};

export default ShipDateInfo;
