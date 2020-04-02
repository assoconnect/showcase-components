import React from 'react'
import styled from 'styled-components'
import { UI, Svg } from '../../'

/**
 * Style
 */
const SliderFeatureNavigationStyled = styled.span`
  display: inline-block;
  text-align: center;
  padding: 1rem;
  position: relative;
  cursor: pointer;

  &::after {
    content: '';
    height: 3px;
    width: 0;
    background-color: ${UI.colors.turquoise};
    position: absolute;
    bottom: 0;
    left: 50%;
    transition: 0.3s;
  }

  &:hover::after {
    width: 25%;
    left: 37.5%;
  }
  .slick-active &::after {
    width: 100%;
    left: 0;
  }

  @media screen and (max-width: ${UI.breakpoints.mobile}) {
    border-bottom: 1px solid ${UI.colors.lightGrey};
    padding: 0.5rem;
  }
`
const SliderFeatureNavigationTitle = styled.p`
  font-family: ${UI.fonts.family.baloo};
  font-weight: ${UI.fonts.weight.light};
  color: ${UI.colors.middleGrey};
  transition: 0.3s;

  .slick-active & {
    color: ${UI.colors.turquoise};
  }
`
const SvgStyled = styled(props => <Svg {...props} />)`
  .svg--color-primary {
    transition: 0.3s;
  }
  .slick-active & .svg--color-primary {
    fill: ${UI.colors.darkGrey};
  }
  @media screen and (max-width: ${UI.breakpoints.mobile}) {
    svg {
      width: 100%;
      height: auto;
    }
  }
`

/**
 * Component
 */
const SliderFeatureNavigation = ({ image, title, onClick }) => (
  <SliderFeatureNavigationStyled onClick={onClick}>
    <SvgStyled
      width="5.882rem"
      color="middleGrey"
      src={`common/icon/multicolor/${image.link}`}
    />
    <SliderFeatureNavigationTitle className="hidden-mobile">
      {title}
    </SliderFeatureNavigationTitle>
  </SliderFeatureNavigationStyled>
)

export default SliderFeatureNavigation
