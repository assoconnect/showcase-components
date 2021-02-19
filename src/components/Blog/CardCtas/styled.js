import styled from 'styled-components'
import { UI, Flex, Box, PricingCard } from '../..'
import { Link as GatsbyLink } from 'gatsby'

export const WrapperBorderedScroller = styled.div`
  position: relative;
  display: block;
`

export const WrapperBordered = styled.div`
  font-family: ${UI.fonts.family.roboto};
  width: 96%;
  background-color: #fff;
  color: #fff;
  padding: 20px;
  border: ${props => (props.grey ? '3px solid #939393' : '3px solid #316bf2')};
  border-radius: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  position: relative;
  margin-bottom: 40px;
  &.sticky {
    width: 100%;
  }
`

export const TitleBordered = styled.div`
  position: absolute;
  top: -30px;
  background: #fff;
  padding: 5px;
  color: ${props => (props.grey ? '#939393' : '#316bf2')};
  font-weight: 900;
  line-height: 37px;
  font-size: 18px;
  span {
    display: inline-block;
    vertical-align: middle;
  }
  svg {
    display: inline-block;
    vertical-align: middle;
    margin-left: 5px;
    width: 20px;
  }
`
export const StickyContainerStyled = styled.div``
export const StickyStyled = styled.div``
