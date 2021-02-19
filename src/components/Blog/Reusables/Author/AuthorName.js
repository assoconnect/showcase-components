import React from 'react'
import styled from 'styled-components'
import { UI } from '../../..'

const AuthorNameStyled = styled.div`
  padding: 0 10px;
  color: ${props => (props.color ? props.color : '#fff')};
  text-align: left;
`
const AuthorName = ({ children, color }) => {
  return <AuthorNameStyled color={color}>{children}</AuthorNameStyled>
}

export default AuthorName
