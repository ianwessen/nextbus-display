import React, { useState, useEffect } from 'react'

import StopDisplay from '../components/StopDisplay/StopDisplay'

import CONSTANTS from '../utilities/constants'
import useInterval from '../utilities/useInterval'

import '../stylesheets/index.scss'
import RefreshCountdown from '../components/RefreshCountdown/RefreshCountdown'

const IndexPage = () => {
  const [predictions, setPredictions] = useState([])
  const [refreshCounter, refresh] = useState(0)

  useInterval(() => {
    refresh(refreshCounter + 1)
  }, 10000)

  useEffect(() => {
    fetch(CONSTANTS.API_URL)
      .then(response => response.json())
      .then(predictionData => {
        const InboundPrediction = predictionData.predictions.direction.find(
          direction => direction.title === CONSTANTS.ROUTE_DIRECTION
        )
        const firstThreePredictions = InboundPrediction.prediction.slice(0, 3)
        setPredictions(firstThreePredictions)
      })
  }, [refreshCounter])

  return (
    <section>
      <h1>5 Fulton</h1>
      <h2>{CONSTANTS.ROUTE_DIRECTION}</h2>
      <RefreshCountdown />
      <StopDisplay title="Baker & McAllister" predictions={predictions} />
    </section>
  )
}

export default IndexPage
