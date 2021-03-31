import React from 'react'
import { Space } from '../../..'
import {
  WrapperBorderedScroller,
  WrapperBordered,
  TitleBordered,
} from '../styled.js'

const FreeTrial = ({ cardtitle, children }) => {
  return (
    <WrapperBorderedScroller>
      <WrapperBordered grey sticky className="sticky">
        <TitleBordered grey>{cardtitle}</TitleBordered>
        <Space size="small" />
        {children}
        <Space size="small" />
      </WrapperBordered>
    </WrapperBorderedScroller>
  )
}

export default FreeTrial
