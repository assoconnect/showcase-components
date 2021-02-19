import React from 'react'
import styled from 'styled-components'
import { UI } from '../../..'

export const TagStyled = styled.span`
  display: inline-block;
  margin-bottom: 10px;
  margin-right: 5px;
  padding: 6px 20px;
  border-radius: 3px;
  background-color: #00c1a2;
  color: #fff;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  font-family: ${UI.fonts.family.roboto};
`
const Tag = ({ children }) => {
  return <TagStyled>{children}</TagStyled>
}

export default Tag
