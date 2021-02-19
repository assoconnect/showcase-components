import React from 'react'
import styled from 'styled-components'

const CardCtaButtonWrapStyled = styled.div`
  display: flex;
`
const CardCtaButtonWrap = ({ children }) => {
  return <CardCtaButtonWrapStyled>{children}</CardCtaButtonWrapStyled>
}

export default CardCtaButtonWrap
