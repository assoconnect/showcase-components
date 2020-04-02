import React from 'react'
import styled from 'styled-components'
import classNames from 'classnames/bind'

/**
 * Style
 */
const SpaceStyled = styled.span`
  display: block;
  &.space--tiny {
    padding-top: 0.5882rem;
  }
  &.space--small {
    padding-top: 1.176rem;
  }
  &.space--medium {
    padding-top: 2.353rem;
  }
  &.space--big {
    padding-top: 2.941rem;
  }
`

/**
 * Component
 */
const Space = ({ size = 'medium', className }) => (
  <SpaceStyled className={classNames(className, `space--${size}`)} />
)

export default Space
