import React, { ReactNode, createElement } from 'react'
import { UI } from '../'
import styled from 'styled-components'
import classNames from 'classnames/bind'

/**
 * Style
 */
interface Props {
  align: string
  children: ReactNode
  className: string
  color: string
  size: string
  light: boolean
  tag: string
}
const TextStyled = styled(({ tag, children, light, ...rest }: Props) =>
  createElement(tag, rest, children)
)`
  font-family: ${UI.fonts.family.roboto};
  text-align: ${({ align }: Props) => align};
  color: ${({ color }: Props) => UI.colors[color]};

  &.text--size-small {
    font-size: 0.824rem;
    font-weight: ${UI.fonts.weight.light};
  }
  &.text--size-big {
    font-size: 1rem;
    font-weight: ${({ light }: Props) =>
      UI.fonts.weight[light ? 'light' : 'normal']};
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
}: Props) => {
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
