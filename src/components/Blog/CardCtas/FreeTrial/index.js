import React from 'react'
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
        {children}
      </WrapperBordered>
    </WrapperBorderedScroller>
  )
}

export default FreeTrial
