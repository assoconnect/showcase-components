import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import { UI, AdaptiveImage, Svg } from '../../'
import 'slick-carousel/slick/slick.css'
import { LazyLoadComponent } from 'react-lazy-load-image-component'

/**
 * Style
 */
const SliderCardArrow = ({ onClick, navigation }) => {
  const SliderCardArrowStyled = styled.div`
    cursor: pointer;
    ${navigation === 'previous' && `transform: rotate( -180deg)`};
    .svg--color-primary {
      transition: 0.3s;
    }
    &:hover {
      .svg--color-primary {
        fill: ${UI.colors.middleGrey};
      }
    }
  `
  return (
    <SliderCardArrowStyled onClick={onClick}>
      <Svg src="common/icon/unicolor/arrow" width="2.5rem" color="lightGrey" />
    </SliderCardArrowStyled>
  )
}
const SliderCardDots = styled.ul`
  display: flex;
  justify-content: center;
  width: 100%;
  cursor: pointer;
`
const SliderCardDot = styled.span`
  height: 12px;
  width: 12px;
  border-radius: 50%;
  background-color: ${UI.colors.lightGrey};
  display: block;
  margin: 10px;
  transition: 0.3s;

  .slick-active & {
    background-color: ${UI.colors.turquoise};
  }
`
const SliderCardWrapper = styled.div`
  width: 100%;

  .slick-slider {
    display: flex;
    align-items: center;
    @media screen and (max-width: ${UI.breakpoints.mobile}) {
      flex-direction: column-reverse;

      .slick-list {
        width: 100vw;
      }
    }
  }
`
const SliderCardYado = styled(props => <AdaptiveImage {...props} />)`
  max-width: 100%;
  position: absolute;
  bottom: -1.765rem;
  right: calc(100% - 3rem);
  height: 20.5rem;

  @media screen and (max-width: ${UI.breakpoints.mobile}) {
    display: none;
  }
`

/**
 * Component
 */
const SliderCard = ({ children, yado, slidesToShow = 3 }) => {
  const settings = {
    infinite: true,
    slidesToShow: slidesToShow,
    focusOnSelect: true,
    centerPadding: '0',
    centerMode: true,
    nextArrow: <SliderCardArrow />,
    prevArrow: <SliderCardArrow navigation="previous" />,
    responsive: [
      {
        breakpoint: UI.breakpoints.mobile,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
          appendDots: dots => <SliderCardDots>{dots}</SliderCardDots>,
          customPaging: i => {
            return (
              <div>
                <SliderCardDot />
              </div>
            )
          },
        },
      },
    ],
  }
  return (
    <LazyLoadComponent threshold={400}>
      <SliderCardWrapper>
        <Slider {...settings}>{children}</Slider>
        {yado && (
          <SliderCardYado src={`common/yado/${yado.image}`} alt={yado.alt} />
        )}
      </SliderCardWrapper>
    </LazyLoadComponent>
  )
}

export default SliderCard
