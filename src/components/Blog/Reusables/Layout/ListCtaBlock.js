import React from 'react'
import styled from 'styled-components'
import { UI } from '../../..'

export const ListCtaBlockStyled = styled.aside`
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
const ListCtaBlock = ({ children }) => {
  return <ListCtaBlockStyled>{children}</ListCtaBlockStyled>
}

export default ListCtaBlock
