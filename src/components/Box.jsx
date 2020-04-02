import React, { Children } from 'react'
import styled from 'styled-components'
import { Box } from '@rebass/grid'
import { UI } from '.'
import getDisplayName from 'react-display-name'

/**
 * Style
 */
const setBoxOverflow = ({ overflowLeft, overflowRight }, overflowValue) => {
  if (overflowLeft) {
    return `
      width: calc(100% + ${overflowValue}px);
      margin-left: -${overflowValue}px;
    `
  } else if (overflowRight) {
    return `
      width: calc(100% + ${overflowValue}px);
      margin-right: -${overflowValue}px;
    `
  }
}
const BoxOverflow = styled.div`
  height: 100%;
  text-align: ${({ align }) => align};
  ${props => setBoxOverflow(props, 200)};

  @media screen and (max-width: 1700px) {
    ${props => setBoxOverflow(props, 150)};
  }
  @media screen and (max-width: 1600px) {
    ${props => setBoxOverflow(props, 75)};
  }
  @media screen and (max-width: ${UI.breakpoints.mobile}) {
    ${props => setBoxOverflow(props, 0)};
  }
`

/**
 * Component
 */
const BoxCustom = ({
  align = 'left',
  children,
  overflowLeft,
  overflowRight,
  wave,
  width,
  ...rest
}) => {
  let widthFilter
  if (Array.isArray(width)) {
    widthFilter = width
  } else {
    widthFilter = [1, width]
  }
  // Do not use px because it has a higher priority than pr and pl
  return (
    <Box
      width={widthFilter}
      pl={overflowLeft || overflowRight ? [0, '2.5rem'] : '2.5rem'}
      pr={overflowLeft || overflowRight ? [0, '2.5rem'] : '2.5rem'}
      {...rest}
    >
      <BoxOverflow
        overflowLeft={overflowLeft}
        overflowRight={overflowRight}
        align={align}
      >
        {Children.map(children, child => {
          if (child) {
            let props = {}
            if (wave === 'blue') {
              switch (getDisplayName(child.type)) {
                case 'Arrow':
                case 'Text':
                case 'MiddleTitle':
                case 'SmallTitle':
                case 'SliderTestimony':
                case 'SliderTestimonyCompact':
                  props.color = child.props.color || 'white'
                  break
                case 'Image':
                  props.theme = 'blue'
                  break
                default:
              }
            } else {
              switch (getDisplayName(child.type)) {
                case 'Subtitle':
                  props.color = child.props.color || 'middleGrey'
                  break
                case 'MiddleTitle':
                  props.color = child.props.color || 'blue'
                  break
                default:
              }
            }
            return React.cloneElement(child, props)
          }
        })}
      </BoxOverflow>
    </Box>
  )
}

export default BoxCustom
