import React from 'react'
import styled from 'styled-components'

const TagWrapStyled = styled.div`
  margin-bottom: 20px;
  min-height: ${props => props.minHeight && props.minHeight};
`

const TagWrap = ({ children, minHeight }) => {
  return <TagWrapStyled minHeight={minHeight}>{children}</TagWrapStyled>
}

export default TagWrap
