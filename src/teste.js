import React from 'react'
import { useMediaQuery } from 'react-responsive'

import Input from './components/Input'
import Button from './components/Button'

import { Content } from './styles'

const Example = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1000px)'
  })
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1000px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

  return <Content>
    <h1>Device Test!</h1>
    {isDesktopOrLaptop && <Input/>}

    {isBigScreen && <p>You  have a huge screen</p>}

    {isTabletOrMobile && <Button/>}

    <p>Your are in {isPortrait ? 'portrait' : 'landscape'} orientation</p>
    {isRetina && <p>You are retina</p>}
  </Content>
}

export default Example;