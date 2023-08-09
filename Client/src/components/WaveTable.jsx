import React from 'react'

const WaveTable = () => {
  return (
    <div className="pt-8 flex justify-center items-center px-8 mx-auto">
    <table className="table mx-4 mt-4 pb-8">
      <tbody>
        <tr className="">
          <th scope="col" className=""></th>
          <th scope="col" className="text-xs hidden md:table-cell">
            Edit
          </th>
          <th scope="col" className="text-xs">Item Number</th>
          <th scope="col" className="text-xs table-cell sm:text-xs">
            Vendor
          </th>
          <th scope="col" className="text-xs">Quantity</th>
          <th scope="col" className="text-xs">+ / -</th>
          <th scope="col" className="text-xs">Add</th>
        </tr>
        {supplyList}
      </tbody>
    </table>
  </div>
</div>
  )
}

export default WaveTable
