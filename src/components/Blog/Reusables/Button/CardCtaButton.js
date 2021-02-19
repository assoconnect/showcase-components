import React from 'react'
import styled from 'styled-components'
import { UI } from '../../..'

const CardCtaButtonStyled = styled.a`
  transition: background-color 0.3s;
  outline: 0;
  text-transform: uppercase;
  height: 43px;
  width: 154px;
  margin: 10px auto;
  border-radius: 21.5px;
  border: 0;
  font-size: 16px;
  font-weight: ${UI.fonts.weight.bold};
  line-height: 21px;
  white-space: pre-wrap;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${props => props.color}!important;
  background-color: ${props => props.bgcolor}!important;
  &:hover {
    color: ${props => props.bgcolor} !important;
    background-color: transparent !important;
    border: 1px solid ${props => props.bgcolor} !important;
  }
`
const CardCtaButton = ({ children, color, bgcolor, href }) => {
  return (
    <CardCtaButtonStyled href={href} color={color} bgcolor={bgcolor}>
      {children}
    </CardCtaButtonStyled>
  )
}

export default CardCtaButton
