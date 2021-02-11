import styled from 'styled-components'
import { UI, Flex, Box, PricingCard } from '../..'

export const BlogSection = styled.section`
  margin: 30px 10%;
  padding-bottom: ${props => props.marginBottom};
  @media screen and (max-width: ${UI.breakpoints.mobile}) {
    margin: 30px 5%;
    padding-bottom: 0px;
  }
`
export const BlogGrid = styled.div`
  display: flex;
`

export const BlogMain = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 0 0 66.666667%;
  max-width: 66.666667%;
  justify-content: space-between;

  @media screen and (max-width: ${UI.breakpoints.smallMobile}) {
    flex: auto;
    max-width: none;
    width: 100%;
  }
`
export const Empty = styled.div`
  height: 100%;
`

export const ListCtaBlock = styled.aside`
  flex: 0 0 33.333333%;
  max-width: 33.333333%;
  justify-content: flex-start;
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: ${UI.breakpoints.smallMobile}) {
    display: none;
  }
`
