import React from 'react'
import styled from 'styled-components'
import { Svg, UI, Link } from '..'
import classNames from 'classnames/bind'
import { LazyLoadComponent } from 'react-lazy-load-image-component'

/**
 * Style
 */
const NavigationChildStyled = styled(props => <Link {...props} />)`
  color: ${UI.colors.middleGrey};
  font-family: Roboto;
  font-size: 14px;
  text-transform: uppercase;
  display: block;
  padding: 9px 0;

  &:first-child {
    padding-top: 18px;
  }
  &:last-child {
    padding-bottom: 18px;
  }
  &:hover {
    color: ${UI.colors.turquoise};
  }
  /* Mobile mode */
  @media screen and (max-width: ${UI.breakpoints.mobile}) {
    margin: 22px auto 0;
    width: 270px;
    font-size: 16px;
  }
`
const NavigationChildIcon = styled(props => <Svg {...props} />)`
  vertical-align: middle;
  display: inline-block;
  margin-right: 20px;

  /* Mobile mode */
  @media screen and (max-width: ${UI.breakpoints.mobile}) {
    svg {
      width: 26px;
      height: 26px;
    }
  }
`
const NavigationChildText = styled.div`
  vertical-align: middle;
  display: inline-block;
`
const NavigationChildArrow = styled(props => <Svg {...props} />)`
  display: inline-block;
  vertical-align: middle;
  margin-left: 15px;
`

/**
 * Component
 */
const NavigationChild = ({
  arrow,
  className,
  href,
  icon,
  loadIcon = false,
  nofollow,
  text,
}) => (
  <LazyLoadComponent>
    <NavigationChildStyled
      className={classNames('animation--start-hover', className)}
      href={href}
      nofollow={nofollow}
    >
      {loadIcon && icon && (
        <NavigationChildIcon
          className={classNames(
            'animation--effect-wobble',
            'navigation__child'
          )}
          color="middleGrey"
          src={icon}
          width="24px"
        />
      )}
      <NavigationChildText>{text}</NavigationChildText>
      {arrow && (
        <NavigationChildArrow
          className="animation--effect-wobble"
          src="common/icon/unicolor/small-arrow"
          color="turquoise"
          width="16px"
        />
      )}
    </NavigationChildStyled>
  </LazyLoadComponent>
)

export default NavigationChild
