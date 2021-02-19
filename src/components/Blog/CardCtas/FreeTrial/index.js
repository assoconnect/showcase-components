import React, { Children, createElement } from 'react'
import styled from 'styled-components'
import { UI, Space, CardCtaButtonWrap, CardCtaButton } from '../../..'

import {
  WrapperBorderedScroller,
  WrapperBordered,
  TitleBordered,
} from '../styled.js'

const Title = styled.span`
  flex: 0 0 calc(100% - 70px);
  text-align: center;
  font-size: 28px;
  line-height: 37px;
  font-weight: 900;
  color: #316bf2;
  font-family: ${UI.fonts.family.baloo};
`
const StyledImage = styled(props => (
  <img src="https://web-assoconnect-frc-prod-cdn-endpoint-showcase.azureedge.net/components/blog/images/app-screen.png" />
))`
  flex: 0 0 calc(100% - 70px);
  height: auto;
`

const FreeTrial = props => {
  return (
    <WrapperBorderedScroller>
      <WrapperBordered grey sticky className="sticky">
        <TitleBordered grey>{props.cardtitle}</TitleBordered>
        <Space size="small" />
        <Title>{props.maintitle}</Title>
        <Space size="small" />
        <StyledImage alt="tool screen"></StyledImage>
        <Space size="small" />
        <CardCtaButtonWrap>
          <CardCtaButton href={props.url} color={'#fff'} bgcolor={'#f6c131'}>
            TRY NOW
          </CardCtaButton>
        </CardCtaButtonWrap>
        <Space size="small" />
      </WrapperBordered>
    </WrapperBorderedScroller>
  )
}

export default FreeTrial
