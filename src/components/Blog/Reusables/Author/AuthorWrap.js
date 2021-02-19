import React from 'react'
import styled from 'styled-components'
import { UI } from '../../..'

const AuthorWrapStyled = styled.div`
  align-items: center !important;
  display: flex !important;
  flex-direction: ${props => (props.flip ? 'row-reverse' : 'row')};
  font-family: ${UI.fonts.family.roboto};
`
const AuthorWrap = ({ children, flip }) => {
  return <AuthorWrapStyled flip={flip}>{children}</AuthorWrapStyled>
}

export default AuthorWrap
