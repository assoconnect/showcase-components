import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import { UI, AdaptiveImage } from '../../'
import SliderFeatureNavigation from './SliderFeatureNavigation'
import 'slick-carousel/slick/slick.css'
import { LazyLoadComponent } from 'react-lazy-load-image-component'

/**
 * Style
 */
const SliderFeatureWrapper = styled.div`
  max-width: 90%;
  width: 55.882rem;
  margin: 0 auto;
  position: relative;

  & .slick-list {
    background-color: ${UI.colors.white};
    border-radius: 0 0 1.176rem 1.176rem;
    box-shadow: ${UI.shadows.slider};
  }
  & .slick-slider {
    display: flex;
    flex-direction: column-reverse;
  }

  @media screen and (max-width: ${UI.breakpoints.mobile}) {
    width: calc(100% + 5rem);
    margin-left: -2.5rem;
    max-width: none;

    & .slick-list {
      background-color: transparent;
      border-radius: 0;
      box-shadow: none;
    }
  }
`
const SliderFeatureDots = styled.ul`
  display: flex;
  justify-content: center;
  width: 100%;
`
const SliderFeatureYado = styled(props => <AdaptiveImage {...props} />)`
  max-width: 100%;
  position: absolute;
  bottom: -1.765rem;
  right: calc(100% - 3rem);
  height: 20.5rem;
  img {
    max-width: none;
    width: auto;
    height: auto;
  }
`

/**
 * Component
 */
const SliderFeature = ({ children, yado }) => {
  const settings = {
    infinite: true,
    arrows: false,
    dots: true,
    customPaging: i => {
      const { title, image } = children[i].props
      return <SliderFeatureNavigation title={title} image={image} />
    },
    appendDots: dots => <SliderFeatureDots>{dots}</SliderFeatureDots>,
    responsive: [
      {
        breakpoint: UI.breakpoints.mobile,
        settings: {
          focusOnSelect: true,
        },
      },
    ],
  }
  return (
    <LazyLoadComponent threshold={400}>
      <SliderFeatureWrapper>
        <Slider {...settings}>{children}</Slider>
        {yado && (
          <SliderFeatureYado
            src={`common/yado/${yado.image}`}
            alt={yado.alt}
            className="hidden-mobile"
            visibleByDefault
          />
        )}
      </SliderFeatureWrapper>
    </LazyLoadComponent>
  )
}

export default SliderFeature
