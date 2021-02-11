import React, { Children, createElement } from 'react'
import styled from 'styled-components'
import { Link, UI, Flex, Box, Space, Image } from '../../..'

import {
  WrapperBorderedScroller,
  WrapperBordered,
  TitleBordered,
} from '../styled.js'
import { CardCtaButtonWrap, CardCtaButton } from '../../Reusables/styled'

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
  <Image src="components/blog/images/app-screen.png" />
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
          <CardCtaButton url={props.url} className="yellow">
            TRY NOW
          </CardCtaButton>
        </CardCtaButtonWrap>
        <Space size="small" />
      </WrapperBordered>
    </WrapperBorderedScroller>
  )
}

export default FreeTrial
