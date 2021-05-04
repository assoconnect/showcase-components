import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import { Box, Flex, Svg, UI, Link } from '..'
import NavigationChild from './NavigationChild'
import NavigationButtons from './NavigationButtons'
import NavigationItem from './NavigationItem'
import NavigationToggle from './NavigationToggle'
import { formatMessage } from '../../utils/translations'

/**
 * Helpers css
 */
const navigationWhiteCss = css`
  background-color: ${UI.colors.white};

  > .navigation__arrow .svg--color-primary,
  .navigation__logo .svg--color-primary {
    fill: ${UI.colors.blue};
  }
  .navigation__buttons .button--theme-line-white {
    color: ${UI.colors.middleGrey};
    border-color: ${UI.colors.middleGrey};
  }
  .navigation__inner {
    opacity: 1;
    color: ${UI.colors.middleGrey};

    &:hover {
      color: ${UI.colors.blue};

      > .navigation__arrow .svg--color-primary {
        fill: ${UI.colors.blue};
      }
    }
    .navigation__arrow {
      opacity: 1;

      .svg--color-primary {
        fill: ${UI.colors.middleGrey};
      }
    }
  }
`
const navigationFixedCss = css`
  @media screen and (min-width: ${UI.breakpoints.mobile}) {
    position: fixed;
    box-shadow: 0 1px 14px 0 rgba(0, 0, 0, 0.19);
    ${navigationWhiteCss};
  }
`
const navigationInnerFixedCss = css`
  @media screen and (min-width: ${UI.breakpoints.mobile}) {
    && {
      height: 60px;
      margin-bottom: 0;
      align-items: center;
    }
  }
`

/**
 * Style
 */
const NavigationMargin = styled.div`
  @media screen and (max-width: ${UI.breakpoints.mobile}) {
    height: 59px;
  }
  @media screen and (min-width: ${UI.breakpoints.mobile}) {
    height: 100px;
  }
`
const NavigationStyled = styled.nav`
  transition: background-color ease-out 0.2s;
  background-color: ${UI.colors.blue};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20;
  padding-left: 2.5rem;

  /* White mode */
  ${({ headerBackgroundColor }) =>
    headerBackgroundColor === 'white' && navigationWhiteCss};
  /* Scroll Fixed (only desktop mode) */
  ${({ navigationIsFixed }) => navigationIsFixed && navigationFixedCss};
  /* Mobile mode */
  @media screen and (max-width: ${UI.breakpoints.mobile}) {
    padding-left: 0;
    transition: all ease-out 0.2s;
    ${({ navigationMobileIsOpened }) =>
      !navigationMobileIsOpened && 'left:-100%'};
    position: fixed;
    bottom: 0;
    ${navigationWhiteCss};
  }
`
const NavigationInner = styled(props => <Flex {...props} />)`
  /* Specific style for all features */
  .navigation__child--all-features {
    color: ${UI.colors.darkGrey};
    font-weight: ${UI.fonts.weight.bold};

    /* Desktop mode */
    @media screen and (min-width: ${UI.breakpoints.mobile}) {
      border-top: 1px solid ${UI.colors.extraLightGrey};
      text-align: center;
      padding-top: 18px;
      margin-top: 0;
    }
  }

  /* Desktop mode */
  @media screen and (min-width: ${UI.breakpoints.mobile}) {
    && {
      height: 85px;
      margin-bottom: 15px;
    }
  }
  /* Mobile mode */
  @media screen and (max-width: ${UI.breakpoints.mobile}) {
    height: calc(100% - 60px);
    margin-top: 60px;
    overflow-y: scroll;
  }
  /* Scroll fixed (only desktop mode) */
  ${({ navigationIsFixed }) => navigationIsFixed && navigationInnerFixedCss};
`
const NavigationLogoWrapper = styled(props => <Box {...props} />)`
  /* Mobile mode */
  @media screen and (max-width: ${UI.breakpoints.mobile}) {
    display: none;
  }
`
const NavigationLogo = styled(props => <Svg {...props} />)`
  display: block;
  text-align: center;
  ${({ navigationIsFixed }) => navigationIsFixed && `margin: auto;`}
`
const NavigationChildTitle = styled.div`
  margin: 18px 0;
  font-family: ${UI.fonts.family.roboto};
  font-weight: ${UI.fonts.weight.bold};
  color: ${UI.colors.darkGrey};
  font-size: 14px;

  /* Mobile mode */
  @media screen and (max-width: ${UI.breakpoints.mobile}) {
    width: 270px;
    margin: 25px auto 0;
  }
`
// Fix https://gitlab.com/assoconnect/assoconnect/-/issues/18784
const NavigationItemWrapper = styled(props => <Box {...props} />)`
  white-space: nowrap;
`

/**
 * Component
 */
class Navigation extends Component {
  state = {
    navigationChildIconLoad: false,
    navigationIsFixed: false,
    navigationMobileIsOpened: false,
  }

  /**
   * Component did mount
   */
  componentDidMount() {
    // Fixed navigation on scroll
    window.onscroll = () => {
      const { navigationMobileIsOpened, navigationIsFixed } = this.state
      // Breakpoint
      let breakpoint
      if (window.innerWidth > parseInt(UI.breakpoints.mobile.slice(0, -2))) {
        breakpoint = 100
      } else {
        breakpoint = 0
      }
      // Set state
      if (window.pageYOffset > breakpoint) {
        if (!navigationIsFixed) {
          this.setState({ navigationIsFixed: true })
        }
      } else if (navigationIsFixed) {
        this.setState({ navigationIsFixed: false })
      }
      // Toggle overflow of body
      if (navigationMobileIsOpened) {
        document.body.style.overflowY = 'hidden'
      } else {
        document.body.style.overflowY = 'scroll'
      }
    }
  }

  /**
   * Functions
   */
  // Update state after hover the navigation
  handleNavigationItemsMouseOver = () => {
    const { navigationChildIconLoad } = this.state
    if (!navigationChildIconLoad) {
      this.setState({
        navigationChildIconLoad: true,
      })
    }
  }

  // Toggle mobile navigation
  handleNavigationToggleBurger = () => {
    const { navigationMobileIsOpened } = this.state
    this.setState({
      navigationMobileIsOpened: !navigationMobileIsOpened,
    })
  }

  getNavigationLogoSrc = navigationIsFixed => {
    const { translations } = this.props
    return navigationIsFixed
      ? `common/logo/${formatMessage('site_name', translations)}-simple`
      : `common/logo/${formatMessage('site_name', translations)}`
  }

  /**
   * Render
   */
  render() {
    const {
      headerBackgroundColor,
      homePath,
      items,
      navigationButtons,
      translations,
    } = this.props
    const {
      navigationChildIconLoad,
      navigationIsFixed,
      navigationMobileIsOpened,
    } = this.state
    return (
      <>
        <NavigationMargin />
        <NavigationToggle
          navigationIsFixed={navigationIsFixed}
          navigationToggleBurgerFunction={this.handleNavigationToggleBurger}
          navigationMobileIsOpened={navigationMobileIsOpened}
          translations={translations}
        />
        <NavigationStyled
          headerBackgroundColor={headerBackgroundColor}
          navigationIsFixed={navigationIsFixed}
          navigationMobileIsOpened={navigationMobileIsOpened}
        >
          <NavigationInner
            navigationIsFixed={navigationIsFixed}
            className="navigation__inner"
            alignItems="flex-end"
          >
            <NavigationLogoWrapper px="0" width="125px">
              <Link href={homePath} isStyled={false}>
                <NavigationLogo
                  className="navigation__logo"
                  navigationIsFixed={navigationIsFixed}
                  color="white"
                  width="auto"
                  height={navigationIsFixed ? '38px' : '65px'}
                  src={this.getNavigationLogoSrc(navigationIsFixed)}
                  visibleByDefault
                />
              </Link>
            </NavigationLogoWrapper>
            {!!items && (
              <NavigationItemWrapper
                width="auto"
                px={[0, '30px']}
                mb={['40px', '-4px']}
                onMouseOver={this.handleNavigationItemsMouseOver}
                onFocus={this.handleNavigationItemsMouseOver}
              >
                {items.map((navigationItem, i) => (
                  <React.Fragment key={i}>
                    {navigationItem.boxes ? (
                      <NavigationItem
                        width={navigationItem.width}
                        navigationMobileIsOpened={navigationMobileIsOpened}
                        text={navigationItem.text}
                        href={navigationItem.href}
                        nofollow={navigationItem.nofollow}
                      >
                        {navigationItem.boxes.map((box, j) => (
                          <Box key={j} width="auto" px={[0, '20px']}>
                            <NavigationChildTitle>
                              {box.title}
                            </NavigationChildTitle>
                            {box.children.map((navigationChild, k) => (
                              <NavigationChild
                                arrow={navigationChild.arrow}
                                href={navigationChild.href}
                                icon={
                                  navigationChild.icon && navigationChild.icon
                                }
                                key={k}
                                loadIcon={navigationChildIconLoad}
                                text={navigationChild.text}
                                nofollow={navigationChild.nofollow}
                              />
                            ))}
                          </Box>
                        ))}
                        {navigationItem.footer && (
                          <Box width={1} px={0}>
                            <NavigationChild
                              text={navigationItem.footer.text}
                              arrow
                              className="navigation__child--all-features"
                              href={navigationItem.footer.href}
                              loadIcon={navigationChildIconLoad}
                              nofollow={navigationItem.footer.nofollow}
                            />
                          </Box>
                        )}
                      </NavigationItem>
                    ) : (
                      <NavigationItem
                        width={navigationItem.width}
                        navigationMobileIsOpened={navigationMobileIsOpened}
                        text={navigationItem.text}
                        href={navigationItem.href}
                        nofollow={navigationItem.nofollow}
                      />
                    )}
                  </React.Fragment>
                ))}
              </NavigationItemWrapper>
            )}
            <Box width="auto" mt={['auto', 0]} ml="auto" px={[0, '30px']}>
              <NavigationButtons navigationButtons={navigationButtons} />
            </Box>
          </NavigationInner>
        </NavigationStyled>
      </>
    )
  }
}

export default Navigation
