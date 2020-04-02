import React, { ReactNode } from 'react'
import { UI } from '../'
import styled from 'styled-components'
import classNames from 'classnames/bind'

/**
 * Style
 */
interface PropsButtonWrapper {
  align: string
}
const ButtonWrapper = styled.div`
  text-align: ${({ align }: PropsButtonWrapper) => align};

  /* Mobile mode */
  @media screen and (max-width: ${UI.breakpoints.mobile}) {
    text-align: center;
  }
`
const ButtonStyled = styled.button`
  border-radius: 2.941rem;
  outline-style: none;
  text-transform: uppercase;
  cursor: pointer;
  font-weight: ${UI.fonts.weight.bold};
  font-family: ${UI.fonts.family.roboto};

  /* Sizes */
  &.button--size-big {
    font-size: 1rem;
    padding: 0.647rem 1.765rem;
  }
  &.button--size-small {
    font-size: 0.824rem;
    padding: 0.471rem 1.176rem;
  }
  /* Themes */
  &.button--theme-yellow {
    background-color: ${UI.colors.yellow};
    color: ${UI.colors.white};
    border: 0.5px solid ${UI.colors.yellow};
  }
  &.button--theme-white {
    background-color: ${UI.colors.white};
    color: ${UI.colors.yellow};
    border: 0.5px solid ${UI.colors.white};
  }
  &.button--theme-blue {
    background-color: ${UI.colors.blue};
    color: ${UI.colors.white};
    border: 0.5px solid ${UI.colors.blue};
  }
  &.button--theme-line-white {
    font-weight: ${UI.fonts.weight.normal};
    background-color: transparent;
    color: ${UI.colors.white};
    border: 1px solid ${UI.colors.white};
  }
  &.button--theme-line-middleGrey {
    font-weight: ${UI.fonts.weight.normal};
    background-color: transparent;
    color: ${UI.colors.middleGrey};
    border: 1px solid ${UI.colors.middleGrey};
  }
`
interface PropsButton {
  children: ReactNode
  animationOff: boolean
  className: string
  size: string
  theme: string
  type: string
  align: string
}

/**
 * Component
 */
const Button = ({
  children,
  animationOff,
  className,
  size,
  theme,
  type,
  align = 'left',
}: PropsButton) => (
  <ButtonWrapper align={align} className={classNames(className)}>
    <ButtonStyled
      type={type}
      className={classNames(
        'button',
        'button--type-color',
        `button--size-${size || 'big'}`,
        `button--theme-${theme || 'yellow'}`,
        { 'animation--start-hover animation--effect-bouncing': !animationOff }
      )}
    >
      {children}
    </ButtonStyled>
  </ButtonWrapper>
)
Button.displayName = 'Button' // https://github.com/facebook/react/issues/4915#issuecomment-335803765

export default Button
