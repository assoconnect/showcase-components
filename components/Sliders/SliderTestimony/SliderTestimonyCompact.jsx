import React, { Component } from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import { UI, Svg } from '../../'
import 'slick-carousel/slick/slick.css'
import classNames from 'classnames/bind'

/**
 * Style
 */
const SliderTestimonyCompactWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  text-align: center;

  /* Mobile mode */
  @media screen and (max-width: ${UI.breakpoints.mobile}) {
    width: calc(100% + (2.5rem * 2));
    margin-left: -2.5rem;
  }
  .slick-track {
    display: flex;
    align-items: center;
  }
  .slick-slider {
    display: flex;
  }
`
const SliderTestimonyCompactStyled = styled.div`
  width: 100%;
  position: relative;
`
const SliderTestimonyCompactArrowsStyled = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;

  .slick-prev,
  .slick-next {
    display: flex;
    align-items: center;
  }

  .slick-prev {
    transform: rotate(180deg);
  }

  /* Mobile mode */
  @media screen and (max-width: ${UI.breakpoints.mobile}) {
    display: none;
  }
`
const SliderTestimonyCompactArrows = ({ onClick, color, className }) => (
  <SliderTestimonyCompactArrowsStyled onClick={onClick}>
    <Svg
      width="1.941rem"
      height="1.941rem"
      src="common/icon/unicolor/arrow"
      color={color}
      className={classNames(className)}
    />
  </SliderTestimonyCompactArrowsStyled>
)

/**
 * Component
 */
class SliderTestimonyCompact extends Component {
  // Slick settings
  settingsSlider = {
    infinite: true,
    dots: false,
    nextArrow: <SliderTestimonyCompactArrows color={this.props.color} />,
    prevArrow: <SliderTestimonyCompactArrows color={this.props.color} />,
    autoplay: true,
    autoplaySpeed: 15000,
    responsive: [
      {
        breakpoint: UI.breakpoints.mobile,
        settings: {
          focusOnSelect: true,
        },
      },
    ],
  }

  render = () => (
    <SliderTestimonyCompactWrapper className={classNames(this.props.className)}>
      <SliderTestimonyCompactStyled>
        <Slider {...this.settingsSlider}>
          {React.Children.map(this.props.children, child =>
            React.cloneElement(child, {
              maxLenghtTestimony: this.props.maxLenghtTestimony,
              color: this.props.color,
            })
          )}
        </Slider>
      </SliderTestimonyCompactStyled>
    </SliderTestimonyCompactWrapper>
  )
}
SliderTestimonyCompact.displayName = 'SliderTestimonyCompact' // https://github.com/facebook/react/issues/4915#issuecomment-335803765

export default SliderTestimonyCompact
