import React, { ReactNode } from 'react'
import { UI, Svg, Link } from '../'
import styled from 'styled-components'
import classNames from 'classnames/bind'

/**
 * Style
 */
const ButtonStyled = styled(props => <Link {...props} />)`
  font-weight: ${UI.fonts.weight.bold};
  font-family: ${UI.fonts.family.roboto};
  font-size: 0.824rem;
  text-transform: uppercase;
  position: relative;
  display: inline-flex;
  align-items: center;
  padding: 0.235rem 0.706rem;
  transition: all 0.2s ease;
  color: ${UI.colors.extraDarkGrey};
  cursor: pointer;
  height: 1.529rem;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    border-radius: 1.647rem;
    background: ${UI.colors.yellow};
    opacity: 0.5;
    width: 1.529rem;
    height: 1.529rem;
    transition: all 0.3s ease;
  }
  &:hover::before {
    width: 100%;
    opacity: 1;
  }
  &:active {
    transform: scale(0.96);
  }
  /* Mobile mode */
  @media screen and (max-width: ${UI.breakpoints.mobile}) {
    font-size: 1.05rem;
  }
`
const ButtonTextChildren = styled.div`
  position: relative;
  vertical-align: middle;
  display: inline-block;
  line-height: 0.7rem;
  font-size: 0.8rem;
`
const ButtonTextArrow = styled(props => <Svg {...props} />)`
  margin-left: 0.5rem;
  position: relative;

  svg {
    vertical-align: middle;
    display: inline-block;
  }
`

/**
 * Component
 */
interface Props {
  children: ReactNode
  className: string
  href: string
}
const ButtonText = ({
  className,
  href,
  children = 'en savoir plus',
}: Props) => {
  return (
    <ButtonStyled
      className={classNames('button', 'button--type-text', className)}
      href={href}
      isStyled={false}
    >
      <ButtonTextChildren>{children}</ButtonTextChildren>
      <ButtonTextArrow
        width="0.765rem"
        color="extraDarkGrey"
        src="common/icon/unicolor/small-arrow"
      />
    </ButtonStyled>
  )
}
ButtonText.displayName = 'ButtonText' // https://github.com/facebook/react/issues/4915#issuecomment-335803765

export default ButtonText
