import WebWave from "./WebWave";

import { useLoaderData, Form } from "react-router-dom";
import { useState, useEffect } from "react";

// import // editWave, wholesale
// deleteSelectedWave, wholesale
// updateWavePrinted, wholesale
// // selectItemToUpdate, wholesale
// copyWaveLine,
// "../function/waveUpdate";

export async function loader() {
  const res = await fetch("http://localhost:3000/web");
  const webWaves = await res.json();
  return webWaves;
}

const WebWaveTable = () => {
  const webWaves = useLoaderData();
  const [formData, setFormData] = useState({
    waveDate: new Date().toLocaleDateString("en-US", {
      day: "2-digit",
      month: "2-digit",
    }),
    waveLocation: "",
    waveUser: "",
    waveNumber: "",
    waveCount: "",
    wavePrinted: "N",
    waveComment: ""
  });
  const webWavesToList = webWaves.map((wave) => (
    <WebWave
      key={wave.waveNumber}
      location={wave.whLocation}
      date={wave.waveDate}
      wave={wave.waveNumber}
      units={wave.units}
      printed={wave.printed}
      user={wave.user}
      comment={wave.comments}
      // deleteSelectedWave={deleteSelectedWave}
      // updateWavePrinted={updateWavePrinted}
    />
  ));

  // useEffect(() => console.log(waves), [waves]);
  // useEffect(() => console.log(webWaves), [formData]);

  const handleChange = (e) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <>
      <div className="pt-32 flex justify-center items-center px-8 mx-auto">
        <Form method="POST" id="wholesaleAddForm" className="">
          <table className="table mx-4 mt-4 pb-8">
            <thead>
              <tr className="">
                <th
                  scope="col"
                  className="mx-2 px-4 bg-orange-400 border-slate-600"
                >
                  Date
                </th>
                <th
                  scope="col"
                  className="mx-2 px-2 bg-blue-400 border-slate-600 hidden md:table-cell"
                >
                  WH
                </th>
                <th
                  scope="col"
                  className="mx-2 px-4 bg-yellow-400 border-slate-600 hidden md:table-cell"
                >
                  Waver
                </th>
                <th
                  scope="col"
                  className="mx-2 px-4 bg-pink-400 border-slate-600"
                >
                  Wave
                </th>
                <th
                  scope="col"
                  className="mx-2 px-4 bg-green-400 border-slate-600"
                >
                  Units
                </th>
                <th
                  scope="col"
                  className="mx-2 px-4 bg-orange-400 border-slate-600"
                >
                  Printed
                </th>
                <th
                  scope="col"
                  className="mx-2 px-4 bg-purple-400 border-slate-600"
                >
                  Comments
                </th>
              </tr>
            </thead>
            <tbody>
              {webWavesToList}
              <tr className="">
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
                    autoComplete="off"
                  />
                </th>
                <th
                  scope="col"
                  className="sm:text-xs xl:text-sm mx-2 px-4 bg-blue-300"
                >
                  <input
                    className="w-24 text-xs text-center"
                    type="list"
                    list="locations"
                    placeholder="WH"
                    name="waveLocation"
                    value={formData.waveLocation}
                    onChange={(e) => handleChange(e)}
                    autoComplete="off"
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
                    autoComplete="off"
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
                    autoComplete="off"
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
                    autoComplete="off"
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
                    autoComplete="off"
                  />
                </th>
                <th
                  scope="col"
                  className="sm:text-xs xl:text-sm mx-2 px-4 bg-purple-300"
                >
                  <input
                    className="w-24 text-xs text-center"
                    type="text"
                    placeholder="Comment"
                    name="waveComment"
                    value={formData.waveComment}
                    onChange={(e) => handleChange(e)}
                    autoComplete="off"
                  />
                </th>
              </tr>
              <tr className="flex items-center">
                <th className="w-full">
                  <button className="p-2 rounded-lg hover:scale-110 hover:ease-in text-xs">
                    Add
                  </button>
                </th>
              </tr>
            </tbody>
          </table>
        </Form>

        <datalist id="locations">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </datalist>

        <datalist id="customers">
          <option value="Dillards">Dillards</option>
          <option value="Belk">Belk</option>
          <option value="Macys">Macys</option>
          <option value="AAFES">AAFES</option>
          <option value="Zappos">Zappos</option>
          <option value="Marine">Marine</option>
          <option value="Navy Exchange">Navy Exchange</option>
        </datalist>
      </div>
    </>
  );
};

export default WebWaveTable;
