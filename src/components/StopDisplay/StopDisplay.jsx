import React from 'react'

import BusPrediction from '../BusPrediction/BusPrediction'

const StopDisplay = ({ title, predictions }) => {
  return (
    <section>
      <h3>{title}</h3>
      {predictions.map(prediction => {
        console.log(prediction)
        return (
          <BusPrediction
            key={prediction.tripTag}
            minutes={prediction.minutes}
            vehicle={prediction.vehicle}
          ></BusPrediction>
        )
      })}
    </section>
  )
}

export default StopDisplay
