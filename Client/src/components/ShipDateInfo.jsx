import React from 'react'
import { useParams, useLoaderData } from 'react-router-dom'


export async function loader( {customer, shipDate} ) {
  console.log(customer, shipDate)
  const res = await fetch(`http://localhost:3000/dateCheck/${customer}/${shipDate}`);
  const wavesToShow = await res.json();
  return wavesToShow;
}

const ShipDateInfo = () => {
  const {customer, shipDate } = useParams()
  const wavesList = useLoaderData()

  console.log(wavesList)

  return (
    <div className="pt-32 flex justify-center items-center px-8 mx-auto">
      <h1>{customer}</h1>
      <h2>{shipDate}</h2>
    </div>
  )
}

export default ShipDateInfo
