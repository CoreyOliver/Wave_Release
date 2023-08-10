import React from "react";

const WaveTable = () => {
  return (
    <div className="pt-32 flex justify-center items-center px-8 mx-auto">
      <table className="table mx-4 mt-4 pb-8">
        <tbody>
          <tr className="">
            <th scope="col" className="mx-2 px-4">
              WH Location
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
              Ship Date
            </th>
            <th scope="col" className="mx-2 px-4">
              Web
            </th>
            <th scope="col" className="mx-2 px-4">
              Printed
            </th>

          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WaveTable;
