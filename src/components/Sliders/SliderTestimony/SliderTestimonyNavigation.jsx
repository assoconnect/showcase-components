import React from 'react'
import styled from 'styled-components'
import { AdaptiveImage, Text, UI } from '../../'

/**
 * Style
 */
const SliderTestimonyNavigationStyled = styled.span`
  display: inline-block;
  text-align: center;
  padding: 1rem;
  position: relative;
  outline: none;
  border: 1px solid transparent;
  opacity: 0.3;
  transition: 0.3s;
  cursor: pointer;

  .slick-current & {
    opacity: 1;
  }
`
const SliderTestimonyNavigationProfilePicture = styled(props => (
  <AdaptiveImage {...props} />
))`
  /* Mobile mode */
  @media screen and (max-width: ${UI.breakpoints.mobile}) {
    width: 3.125rem;
    height: 3.125rem;
    margin: 15px 0 !important;
    transition: 0.3s;

    .slick-current & {
      width: 80px;
      height: 80px;
      margin: 0;
    }
  }
`

/**
 * Component
 */
const SliderTestimonyNavigation = ({
  picture = '',
  name = '',
  position = '',
  color = 'extraDarkGrey',
}) => (
  <SliderTestimonyNavigationStyled>
    <SliderTestimonyNavigationProfilePicture
      src={picture}
      width="2.941rem"
      height="2.941rem"
      maxDpi={1}
      roundShape
    />
    <Text align="center" className="hidden-mobile" color={color} size="small">
      <strong>
        {name.split(' ')[0]} <br />
        {name.replace(name.split(' ')[0], '')}
      </strong>
      <br />
      {position}
    </Text>
  </SliderTestimonyNavigationStyled>
)

export default SliderTestimonyNavigation
