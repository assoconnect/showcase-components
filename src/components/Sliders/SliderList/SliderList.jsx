import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import { UI, AdaptiveImage, Space } from '../../'
import SliderListNavigation from './SliderListNavigation'
import 'slick-carousel/slick/slick.css'
import { LazyLoadComponent } from 'react-lazy-load-image-component'

/**
 * Style
 */
const SliderListWrapper = styled.div`
  position: relative;

  & .slick-slider {
    display: flex;
    flex-direction: column-reverse;
  }

  @media screen and (max-width: ${UI.breakpoints.mobile}) {
    width: calc(100% + 60px);
    margin-left: -30px;
    max-width: none;

    & .slick-list {
      background-color: transparent;
      border-radius: 0;
      box-shadow: none;
    }
  }
`
const SliderListDots = styled.ul`
  display: flex;
  justify-content: center;
  width: 100%;
`
const SliderListYado = styled(props => <AdaptiveImage {...props} />)`
  max-width: 100%;
  position: absolute;
  bottom: -3rem;
  left: -100px;
  height: 20.5rem;

  @media screen and (max-width: ${UI.breakpoints.mobile}) {
    display: none;
  }
`

/**
 * Component
 */
const SliderList = ({ children, yado }) => {
  const settings = {
    infinite: true,
    arrows: false,
    dots: true,
    customPaging: i => {
      const { navigation } = children[i].props
      return <SliderListNavigation title={navigation} />
    },
    appendDots: dots => <SliderListDots>{dots}</SliderListDots>,
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
    <>
      <LazyLoadComponent threshold={400}>
        <SliderListWrapper>
          <Slider {...settings}>{children}</Slider>
          {yado && (
            <SliderListYado
              src={`common/yado/${yado.src}`}
              alt={yado.alt}
              className="hidden-mobile"
              visibleByDefault
            />
          )}
        </SliderListWrapper>
        <Space size="big" />
      </LazyLoadComponent>
    </>
  )
}

export default SliderList
