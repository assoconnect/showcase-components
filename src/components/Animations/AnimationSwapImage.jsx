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

    @media screen and (max-width: ${UI.breakpoints.mobile}) {
      height: calc(100vw - 60px) !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
    }
  }
  .slick-slide &,
  & picture {
    @media screen and (max-width: ${UI.breakpoints.mobile}) {
      display: flex !important;
      justify-content: center !important;
      align-items: center !important;
      width: 100% !important;
    }
  }
  &:hover {
    .image--hover {
      opacity: 1;
    }
    .image--current {
      opacity: 0;
    }
  }

  @media screen and (max-width: ${UI.breakpoints.mobile}) {
    height: calc(100vw - 60px) !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
  }
`
const ImageStyled = styled(props => <AdaptiveImage {...props} />)`
  height: calc(100vw / 3 - 30px * 2);
  max-height: calc(1500px / 3 - 30px * 2);
  max-width: none !important;
  transition: 0.5s;

  @media screen and (max-width: ${UI.breakpoints.mobile}) {
    height: calc(100vw - 60px);
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
const ImageFun = styled(props => <ImageStyled {...props} />)`
  position: absolute;
  top: 0;
  left: 0;
  transition: 0.5s;
  width: 100%;
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
