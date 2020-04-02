import React, { createElement } from 'react'
import { UI } from '../'
import styled from 'styled-components'
import classNames from 'classnames/bind'

/**
 * Style
 */
const TextStyled = styled(({ tag, children, light, ...rest }) =>
  createElement(tag, rest, children)
)`
  font-family: ${UI.fonts.family.roboto};
  text-align: ${({ align }) => align};
  color: ${({ color }) => UI.colors[color]};

  &.text--size-small {
    font-size: 0.824rem;
    font-weight: ${UI.fonts.weight.light};
  }
  &.text--size-big {
    font-size: 1rem;
    font-weight: ${({ light }) => UI.fonts.weight[light ? 'light' : 'normal']};
  }
`

/**
 * Component
 */
const Text = ({
  align = 'left',
  children,
  className,
  color = 'middleGrey',
  size = 'big',
  tag = 'div',
  light = false,
}) => {
  /**
   * Output
   */
  return (
    <TextStyled
      tag={tag}
      align={align}
      color={color}
      light={light}
      className={classNames('text', `text--size-${size}`, className)}
    >
      {children}
    </TextStyled>
  )
}
Text.displayName = 'Text' // https://github.com/facebook/react/issues/4915#issuecomment-335803765

export default Text
