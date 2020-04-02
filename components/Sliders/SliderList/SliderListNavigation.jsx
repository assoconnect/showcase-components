import React from 'react'
import styled from 'styled-components'
import { UI, SmallTitle } from '../../'

/**
 * Style
 */
const SliderListNavigationStyled = styled.span`
  display: inline-block;
  text-align: center;
  padding: 1rem;
  position: relative;
  cursor: pointer;
  border-bottom: 1px solid ${UI.colors.lightGrey};

  &:hover::after {
    width: 90%;
    left: 5%;
  }
  &::after {
    content: '';
    height: 3px;
    width: 0;
    background-color: ${UI.colors.lightGrey};
    position: absolute;
    bottom: -1px;
    left: 50%;
    transition: 0.3s;

    .slick-active & {
      width: 100%;
      left: 0;
      background-color: ${UI.colors.turquoise};
    }
  }

  @media screen and (max-width: ${UI.breakpoints.mobile}) {
    border: none;
    &::after {
      content: none;
    }
    &::before {
      height: 12px;
      width: 12px;
      border-radius: 50%;
      background-color: ${UI.colors.lightGrey};
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      transition: 0.3s;

      .slick-active & {
        background-color: ${UI.colors.darkGrey};
      }
    }
  }
`
const SliderListNavigationSmallTitleStyled = styled(props => (
  <SmallTitle {...props} />
))`
  transition: 0.3s;

  .slick-active & {
    color: ${UI.colors.turquoise};
  }
`

/**
 * Component
 */
const SliderListNavigation = ({ title, onClick }) => (
  <SliderListNavigationStyled onClick={onClick}>
    <SliderListNavigationSmallTitleStyled
      font="roboto"
      color="lightGrey"
      className="hidden-mobile"
    >
      {title}
    </SliderListNavigationSmallTitleStyled>
  </SliderListNavigationStyled>
)

export default SliderListNavigation
