import React from 'react'
import { useParams } from 'react-router-dom'



const ShipDateInfo = () => {
  const {customer, shipDate } = useParams()
  return (
    <div className="pt-32 flex justify-center items-center px-8 mx-auto">
      <h1>{customer}</h1>
      <h2>{shipDate}</h2>
    </div>
  )
}

export default ShipDateInfo
