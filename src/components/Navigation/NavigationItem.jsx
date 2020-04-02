import React, { Component } from 'react'
import styled from 'styled-components'
import { UI, Svg, Flex, Link } from '..'
import AnimateHeight from 'react-animate-height'

/**
 * Style
 */
const NavigationItemStyled = styled.div`
  display: inline-block;
  position: relative;

  /* Show children */
  &:hover .navigation__children {
    visibility: visible;
    opacity: 1;
  }
  /* Mobile mode */
  @media screen and (max-width: ${UI.breakpoints.mobile}) {
    display: block;
    text-align: center;
    margin-top: 40px;
    margin-bottom: 15px;

    &:first-child {
      margin-top: 65px;
    }
  }
`
const NavigationItemInner = styled.div`
  display: inline-block;
  font-family: ${UI.fonts.family.roboto};
  font-weight: ${UI.fonts.weight.light};
  font-size: 14px;
  margin: 0 26px;
  cursor: pointer;
  letter-spacing: 0.02px;
  color: ${UI.colors.white};
  transition: all linear 0.2s;
  opacity: 0.7;
  text-align: left;

  &:hover {
    opacity: 1;

    .navigation__arrow {
      opacity: 1;
    }
  }
  /* Mobile mode */
  @media screen and (max-width: ${UI.breakpoints.mobile}) {
    font-weight: ${UI.fonts.weight.normal};
    display: flex;
    flex-direction: row !important; /* Force row direction in mobile mode */
    align-items: center;
    margin: auto;
    width: 260px;
    font-size: 17px;
    padding-bottom: 15px;
  }
`
const NavigationItemArrow = styled(props => <Svg {...props} />)`
  display: inline-block;
  margin-left: 10px;
  transition: all linear 0.4s, rotate 0s;
  opacity: 0.7;
  transform: rotate(90deg);

  .svg--color-primary {
    transition: fill linear 0.2s;
  }
  /* Mobile mode */
  @media screen and (max-width: ${UI.breakpoints.mobile}) {
    margin-left: auto;
  }
`
const NavigationChildren = styled(props => <AnimateHeight {...props} />)`
  /* Desktop mode */
  @media screen and (min-width: ${UI.breakpoints.mobile}) {
    position: absolute;
    top: 16px;
    padding-top: 14px;
    visibility: hidden;
    opacity: 0;
    transition: all 0.3s ease-out, left 0s;
    display: block !important; /* Ignore the display none of the SlideToggle component */
    width: ${({ width }) => width}px;
    left: -${({ width }) => width / 3}px;
  }
  /* Mobile mode */
  @media screen and (max-width: ${UI.breakpoints.mobile}) {
    box-shadow: inset 0 1px 16px 0 #dedede;
    background-color: ${UI.colors.extraLightGrey};
  }
`
const NavigationChildrenInner = styled(props => <Flex {...props} />)`
  /* Desktop mode */
  @media screen and (min-width: ${UI.breakpoints.mobile}) {
    background-color: ${UI.colors.white};
    border-radius: 10px;
    white-space: nowrap;
    position: relative;
    box-shadow: ${UI.shadows.slider};
    flex-wrap: wrap;

    &:before {
      top: -6px;
      left: 50%;
      margin-left: -10px;
      position: absolute;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 15px 10px;
      border-color: transparent transparent ${UI.colors.white} transparent;
      content: ' ';
    }
  }
  /* Mobile mode */
  @media screen and (max-width: ${UI.breakpoints.mobile}) {
    padding-bottom: 22px;
  }
`

/**
 * Component
 */
class NavigationItem extends Component {
  state = {
    height: 0,
  }
  toggle = () => {
    const { height } = this.state
    const { navigationMobileIsOpened } = this.props
    // Never use AnimateHeight if the navigation mobile is closed
    if (navigationMobileIsOpened) {
      this.setState({
        height: height === 0 ? 'auto' : 0,
      })
    }
  }
  render() {
    const {
      href,
      text,
      children,
      color,
      width,
      navigationMobileIsOpened,
    } = this.props
    return (
      <NavigationItemStyled color={color}>
        <NavigationItemInner
          className="navigation__inner"
          onClick={this.toggle}
        >
          {href ? (
            <Link href={href} isStyled={false}>
              {text}
            </Link>
          ) : (
            text
          )}
          {children && (
            <NavigationItemArrow
              height="10px"
              width="10px"
              color="white"
              className="navigation__arrow"
              src="common/icon/unicolor/arrow"
            />
          )}
        </NavigationItemInner>
        {children && (
          <NavigationChildren
            // Never use AnimateHeight if the navigation mobile is closed
            height={navigationMobileIsOpened ? this.state.height : 'auto'}
            duration={300}
            width={width}
            className="navigation__children"
          >
            <NavigationChildrenInner py="5px">
              {children}
            </NavigationChildrenInner>
          </NavigationChildren>
        )}
      </NavigationItemStyled>
    )
  }
}

export default NavigationItem
