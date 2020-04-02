import React, { Component } from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import { UI, Svg, Flex } from '../../'
import SliderTestimonyNavigation from './SliderTestimonyNavigation'
import 'slick-carousel/slick/slick.css'
import classNames from 'classnames/bind'

/**
 * Style
 */
const widthNav = 150
const SliderTestimonyWrapper = styled.div`
  max-width: 90%;
  width: 63.529rem;
  margin: 0 auto;
  text-align: center;

  /* Mobile mode */
  @media screen and (max-width: ${UI.breakpoints.mobile}) {
    max-width: none;
    width: 100vw;
    margin-left: -2.5rem;
  }
`
const SliderTestimonyFlex = styled(props => <Flex {...props} />)`
  @media screen and (max-width: ${UI.breakpoints.mobile}) {
    flex-direction: column-reverse;
  }
`
const SliderTestimonyStyled = styled.div`
  width: calc(100% - ${widthNav * 2}px);
  margin-left: ${widthNav}px;
  position: relative;

  /* Desktop mode */
  @media screen and (min-width: ${UI.breakpoints.mobile}) {
    & .slick-list {
      background-color: ${UI.colors.white};
      border-radius: 1.176rem;
      box-shadow: ${UI.shadows.slider};
    }
  }
  /* Mobile mode */
  @media screen and (max-width: ${UI.breakpoints.mobile}) {
    width: 100%;
    margin-left: 0;
  }
`
const SliderTestimonyQuote = styled(props => <Svg {...props} />)`
  position: absolute;
  z-index: 1;
  top: -2.714rem;
  left: -3.353rem;

  /* Mobile mode */
  @media screen and (max-width: ${UI.breakpoints.mobile}) {
    left: auto;
    top: -1rem;
    right: 40px;
    svg {
      width: 5.5rem;
      height: 5.5rem;
    }
  }
`
const SliderTestimonyNavigationStyled = styled.div`
  .slick-list {
    width: ${widthNav}px;
  }

  /* Mobile mode */
  @media screen and (max-width: ${UI.breakpoints.mobile}) {
    width: 100vw;
    max-width: 350px;
    .slick-list {
      width: 100%;
    }
  }
`
const SliderTestimonyArrowsStyled = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;

  .slick-prev {
    transform: rotate(-90deg);
  }
  .slick-next {
    transform: rotate(90deg);
  }
  /* Mobile mode */
  @media screen and (max-width: ${UI.breakpoints.mobile}) {
    display: none;
  }
`
const SliderTestimonyArrows = ({ onClick, color, className }) => (
  <SliderTestimonyArrowsStyled onClick={onClick}>
    <Svg
      width="1.941rem"
      height="1.941rem"
      src="common/icon/unicolor/arrow"
      color={color}
      className={classNames(className)}
    />
  </SliderTestimonyArrowsStyled>
)

/**
 * Component
 */
class SliderTestimony extends Component {
  // Slick settings
  settingsSlider = {
    infinite: true,
    arrows: false,
    dots: false,
    fade: true,
    responsive: [
      {
        breakpoint: UI.breakpoints.mobile,
        settings: {
          focusOnSelect: true,
        },
      },
    ],
  }
  settingsNavigation = {
    infinite: true,
    slidesToShow: 3,
    vertical: true,
    focusOnSelect: true,
    centerPadding: '0',
    centerMode: true,
    nextArrow: <SliderTestimonyArrows color={this.props.color} />,
    prevArrow: <SliderTestimonyArrows color={this.props.color} />,
    responsive: [
      {
        breakpoint: UI.breakpoints.mobile,
        settings: {
          vertical: false,
        },
      },
    ],
  }

  state = {
    nav: null,
    slider: null,
  }

  componentDidMount() {
    this.setState({
      nav: this.nav,
      slider: this.slider,
    })
  }

  render = () => (
    <SliderTestimonyWrapper className={classNames(this.props.className)}>
      <SliderTestimonyFlex custom={false} alignItems="center">
        <SliderTestimonyStyled>
          <SliderTestimonyQuote
            width="6rem"
            color="turquoise"
            src="components/slider-testimonies/quote"
          />
          <Slider
            ref={slider => (this.slider = slider)}
            asNavFor={this.nav}
            {...this.settingsSlider}
          >
            {React.Children.map(this.props.children, child =>
              React.cloneElement(child, {
                maxLenghtTestimony: this.props.maxLenghtTestimony,
              })
            )}
          </Slider>
        </SliderTestimonyStyled>

        <SliderTestimonyNavigationStyled>
          <Slider
            ref={slider => (this.nav = slider)}
            asNavFor={this.slider}
            {...this.settingsNavigation}
          >
            {React.Children.map(
              this.props.children,
              ({ props: { user } }, i) => {
                return (
                  <SliderTestimonyNavigation
                    color={this.props.color}
                    key={i}
                    maxLenghtTestimony={this.props.maxLenghtTestimony}
                    {...user}
                  />
                )
              }
            )}
          </Slider>
        </SliderTestimonyNavigationStyled>
      </SliderTestimonyFlex>
    </SliderTestimonyWrapper>
  )
}
SliderTestimony.displayName = 'SliderTestimony' // https://github.com/facebook/react/issues/4915#issuecomment-335803765

export default SliderTestimony
