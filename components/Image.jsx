import React from 'react'
import styled from 'styled-components'
import { LazyLoadComponent } from 'react-lazy-load-image-component'
import RetinaImage from 'react-retina-image'
import classNames from 'classnames/bind'
import { UI } from '.'

/**
 * Style
 */
const ImageWrapper = styled.div`
  text-align: ${({ align }) => align};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin: auto;
  ${({ inline }) => inline && 'display: inline-block; vertical-align:middle;'}
`
const ImageStyled = styled(props => (
  <RetinaImage {...props} retinaImageSuffix="" />
))`
  &,
  .slick-slide & {
    display: inline-block;
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
  }
`
const ImageStyledRound = styled(props => (
  <RetinaImage {...props} retinaImageSuffix="" />
))`
  &,
  .slick-slide & {
    display: block;
    max-width: 100%;
    max-height: 100%;
  }
`
const ImageWrapperRound = styled.div`
  display: inline-block;
  width: ${({ width, height }) => width || height};
  height: ${({ width, height }) => width || height};
  border-radius: 50%;
  overflow: hidden;
  box-shadow: ${({ theme }) =>
    UI.shadows[theme === 'blue' ? 'slider' : 'sliderLight']};
`

/**
 * Component
 */
const Image = ({
  className,
  src,
  alt = '',
  align = 'center',
  width = 'auto',
  height = 'auto',
  roundShape = false,
  theme = 'white',
  visibleByDefault = false,
  inline,
}) => {
  if (roundShape) {
    return (
      <ImageWrapper
        align={align}
        className={classNames('image', className)}
        inline={inline}
      >
        <ImageWrapperRound width={width} height={height} theme={theme}>
          <LazyLoadComponent threshold={400}>
            <ImageStyledRound src={src} alt={alt} />
          </LazyLoadComponent>
        </ImageWrapperRound>
      </ImageWrapper>
    )
  } else {
    return (
      <ImageWrapper
        width={width}
        align={align}
        height={height}
        className={classNames('image', className)}
        inline={inline}
      >
        <LazyLoadComponent threshold={400} visibleByDefault={visibleByDefault}>
          <ImageStyled src={src} alt={alt} />
        </LazyLoadComponent>
      </ImageWrapper>
    )
  }
}
Image.displayName = 'Image'
export default Image
