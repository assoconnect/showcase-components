import React from 'react'
import styled from 'styled-components'

export const HeaderShadowStyled = styled.div`
  background: linear-gradient(to bottom, rgb(0 0 0 / 3%), #ffffff 10px);
  position: absolute;
  width: 100%;
  height: 10px;
  @media screen and (max-width: 1200px) {
    display: none;
  }
`
const HeaderShadow = ({ children }) => {
  return <HeaderShadowStyled>{children}</HeaderShadowStyled>
}

export default HeaderShadow
