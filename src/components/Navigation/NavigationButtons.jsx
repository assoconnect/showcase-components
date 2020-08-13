import React from 'react'
import styled from 'styled-components'
import { ButtonLink, UI } from '..'

/**
 * Style
 */
const NavigationButtonsWrapper = styled.div`
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
const NavigationButtonsStyled = styled(props => <ButtonLink {...props} />)`
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
const NavigationButtons = ({ navigationButtons = [] }) => (
  <NavigationButtonsWrapper width="auto" alignItems="flex-end">
    {navigationButtons.map((navButton, i) => (
      <NavigationButtonsStyled
        href={navButton.href}
        size="small"
        className="navigation__buttons"
        target="_self"
        theme={navButton.theme || undefined}
        key={i}
      >
        <span>{navButton.text}</span>
      </NavigationButtonsStyled>
    ))}
  </NavigationButtonsWrapper>
)

export default NavigationButtons
