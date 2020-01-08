import React, { useState } from 'react'

import useInterval from '../../utilities/useInterval'

const RefreshCountdown = () => {
  const [countdown, setCountdown] = useState(9)
  useInterval(() => {
    if (countdown > 0) {
      setCountdown(countdown - 1)
    } else {
      setCountdown(9)
    }
  }, 1000)

  return (
    <section>
      Refreshing in {countdown} second{countdown === 1 ? '' : 's'}
    </section>
  )
}

export default RefreshCountdown
