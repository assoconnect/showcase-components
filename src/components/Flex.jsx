import React from 'react'
import styled from 'styled-components'
import { Flex } from '@rebass/grid'
import { UI } from '.'

/**
 * Style
 */
const FlexStyled = styled(props => <Flex {...props} />)`
  max-width: 1500px;
  width: 100%;
  margin: auto;

  /* Mobile mode */
  @media screen and (max-width: ${UI.breakpoints.mobile}) {
    flex-direction: column;
  }
`

/**
 * Component
 */
const FlexCustom = ({ children, custom = true, ...rest }) => {
  if (custom) return <FlexStyled {...rest}>{children}</FlexStyled>
  else return <Flex {...rest}>{children}</Flex>
}

export default FlexCustom
