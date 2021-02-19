import React from 'react'
import styled from 'styled-components'
import { UI } from '../../..'

const AuthorAvatarStyled = styled.img`
  width: ${props => (props.big ? '50px' : '30px')};
  height: auto;
  vertical-align: middle;
  border-style: none;
`
const AuthorAvatar = ({ children, big, src }) => {
  return (
    <AuthorAvatarStyled big={big} src={src}>
      {children}
    </AuthorAvatarStyled>
  )
}

export default AuthorAvatar
