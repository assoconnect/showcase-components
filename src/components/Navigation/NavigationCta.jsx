import React from 'react'
import styled from 'styled-components'
import { ButtonLink, UI } from '..'

/**
 * Style
 */
const NavigationCtaWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  /* Mobile mode */
  @media screen and (max-width: ${UI.breakpoints.mobile}) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column-reverse;
    background-color: ${UI.colors.blue};
    margin-top: auto;
    height 190px;
  }
`
const NavigationCtaStyled = styled(props => <ButtonLink {...props} />)`
  display: inline-block;
  margin: 0 10px;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }

  /* Mobile mode */
  @media screen and (max-width: ${UI.breakpoints.mobile}) {
    margin: 15px;

    .button {
      font-size: 1.16rem;

      &.button--theme-line-white {
        color: ${UI.colors.white};
        border-color: ${UI.colors.white};
      }
    }
  }
`

/**
 * Component
 */
const NavigationCta = ({ navigationCta, navigationType }) => (
  <NavigationCtaWrapper width="auto" alignItems="flex-end">
    <NavigationCtaStyled
      href="https://app.assoconnect.com/login"
      size="small"
      theme="line-white"
      className="navigation__cta"
    >
      Se&nbsp;connecter
    </NavigationCtaStyled>
    {navigationType !== 'signUp' && (
      <NavigationCtaStyled
        href={
          navigationCta[navigationType === 'network' ? 'network' : 'default']
            .href
        }
        size="small"
        className="navigation__cta"
        target="_self"
      >
        <span>
          {
            navigationCta[navigationType === 'network' ? 'network' : 'default']
              .text
          }
        </span>
      </NavigationCtaStyled>
    )}
  </NavigationCtaWrapper>
)

export default NavigationCta
