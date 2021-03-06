import React from 'react'
import styled from 'styled-components'

export const EmptyStyled = styled.div`
  height: 100%;
`
const Empty = ({ children }) => {
  return <EmptyStyled>{children}</EmptyStyled>
}

export default Empty
