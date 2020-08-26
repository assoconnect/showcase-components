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
  
  & > div:first-child > a {
    margin-left: 0;
  }

  & > div:last-child > a{
    margin-right: 0;
  }
  
`
const NavigationButtonsStyled = styled((props) => <ButtonLink {...props} />)`
  display: inline-block;
  margin: 0 10px;
  
  & .button--size-small {
    padding-top: 0.375rem;
    padding-bottom: 0.375rem;
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
