import React from 'react'
import styled from 'styled-components'

import { AdaptiveImage, UI } from '../'

const AnimationImageStyled = styled.div`
  text-align: center;
`
const AnimationImageInner = styled.div`
  position: relative;
  display: inline-block;
  .image--hover {
    opacity: 0;
  }
  .slick-slide &,
  & img {
    height: 100%;
    width: auto;
    max-width: none !important;
    display: block;
  }
  &:hover {
    .image--hover {
      opacity: 1;
    }
    .image--current {
      opacity: 0;
    }
  }
`
const ImageStyled = styled(props => <AdaptiveImage {...props} />)`
  height: calc(100vw / 3 - 30px * 2);
  max-height: calc(1500px / 3 - 30px * 2);
  max-width: none !important;
  transition: 0.5s;

  @media screen and (max-width: ${UI.breakpoints.mobile}) {
    height: calc(100vw - 60px);
  }
`
const ImageFun = styled(props => <ImageStyled {...props} />)`
  position: absolute;
  top: 0;
  left: 0;
  transition: 0.5s;
`

/**
 * Component
 */
const AnimationSwapImage = ({ image, imageHover }) => (
  <AnimationImageStyled>
    <AnimationImageInner>
      <ImageStyled src={image} className="image--current" />
      <ImageFun src={imageHover} className="image--hover" />
    </AnimationImageInner>
  </AnimationImageStyled>
)

export default AnimationSwapImage
