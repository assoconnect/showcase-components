import React from 'react'
import styled, { css } from 'styled-components'
import { Box, Flex, UI, Svg, Link } from '..'

/**
 * Style
 */
const navigationToggleWhiteCss = css`
  background-color: ${UI.colors.white};
  box-shadow: 0 1px 14px 0 rgba(0, 0, 0, 0.19);
`
const NavigationToggleStyled = styled(props => <Flex {...props} />)`
  height: 60px;
  flex-direction: row !important; /* Force row direction in mobile mode */
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 25;

  /* White mode */
  transition: background-color ease-out 0.2s;
  ${({ navigationType, navigationIsFixed, navigationMobileIsOpened }) =>
    ['white', 'signUp', 'network'].includes(navigationType) ||
    navigationIsFixed ||
    navigationMobileIsOpened
      ? navigationToggleWhiteCss
      : `background-color: ${UI.colors.blue}`};

  /* Desktop mode */
  @media screen and (min-width: ${UI.breakpoints.mobile}) {
    display: none;
  }
`
const NavigationToggleLogo = styled(props => <Svg {...props} />)`
  text-align: left !important;
`
const NavigationToggleBurger = styled.div`
  margin-left: auto;
  width: 30px;
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  transition: transform 330ms ease-out;

  /* Mobile navigation open */
  ${({ navigationMobileIsOpened }) =>
    navigationMobileIsOpened && `transform: rotate(-45deg);`};
`
const NavigationToggleBurgerLine = styled.div`
  border-radius: 5px;
  width: 100%;
  height: 6px;

  &.navigation__line--half {
    width: 50%;
  }
  &.navigation__line--start {
    transition: transform 330ms cubic-bezier(0.54, -0.81, 0.57, 0.57);
    transform-origin: right;

    /* Mobile navigation open */
    ${({ navigationMobileIsOpened }) =>
      navigationMobileIsOpened && `transform: rotate(-90deg) translateX(3px);`};
  }
  &.navigation__line--end {
    align-self: flex-end;
    transition: transform 330ms cubic-bezier(0.54, -0.81, 0.57, 0.57);
    transform-origin: left;

    /* Mobile navigation open */
    ${({ navigationMobileIsOpened }) =>
      navigationMobileIsOpened &&
      `transform: rotate(-90deg) translateX(-3px);`};
  }
  /* White mode */
  background-color: ${({
    navigationType,
    navigationIsFixed,
    navigationMobileIsOpened,
  }) =>
    navigationType !== 'white' &&
    navigationType !== 'signUp' &&
    !navigationIsFixed &&
    !navigationMobileIsOpened
      ? UI.colors.white
      : UI.colors.blue};
`

/**
 * Component
 */
const NavigationToggle = ({
  navigationToggleBurgerFunction,
  navigationType,
  navigationMobileIsOpened,
  navigationIsFixed,
}) => (
  <NavigationToggleStyled
    navigationMobileIsOpened={navigationMobileIsOpened}
    navigationIsFixed={navigationIsFixed}
    alignItems="center"
    navigationType={navigationType}
  >
    <Box width="auto">
      <Link href="/">
        <NavigationToggleLogo
          height="40px"
          color="blue"
          src="common/logo/assoconnect-simple"
        />
      </Link>
    </Box>
    <Box width="auto" ml="auto">
      <NavigationToggleBurger
        navigationMobileIsOpened={navigationMobileIsOpened}
        onClick={navigationToggleBurgerFunction}
      >
        <NavigationToggleBurgerLine
          navigationIsFixed={navigationIsFixed}
          navigationMobileIsOpened={navigationMobileIsOpened}
          className="navigation__line--half navigation__line--start"
          navigationType={navigationType}
        />
        <NavigationToggleBurgerLine
          navigationIsFixed={navigationIsFixed}
          navigationMobileIsOpened={navigationMobileIsOpened}
          navigationType={navigationType}
        />
        <NavigationToggleBurgerLine
          navigationIsFixed={navigationIsFixed}
          navigationMobileIsOpened={navigationMobileIsOpened}
          className="navigation__line--half navigation__line--end"
          navigationType={navigationType}
        />
      </NavigationToggleBurger>
    </Box>
  </NavigationToggleStyled>
)
export default NavigationToggle
