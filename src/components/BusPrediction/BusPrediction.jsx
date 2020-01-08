import React from 'react'

const BusPrediction = ({ minutes, vehicle }) => {
  return (
    <section className="bus-prediction">
      <span className="bus-prediction__minutes">
        {minutes} minute{minutes === 1 ? '' : 's'}
      </span>
      <span className="bus-prediction__vehicle">Vehicle #{vehicle}</span>
    </section>
  )
}

export default BusPrediction
