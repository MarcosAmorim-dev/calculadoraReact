import React from 'react'
import { useMediaQuery } from 'react-responsive'

const Example = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  return <div>
    <h1>Device Test!</h1>
    {isDesktopOrLaptop && <button>You are a desktop or laptop</button>}
    {isTabletOrMobile && <h3>You are a tablet or mobile phone</h3>}
  </div>
}

export default Example;