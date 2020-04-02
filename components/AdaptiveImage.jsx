import React from 'react'
import styled from 'styled-components'
import classNames from 'classnames/bind'
import { LazyLoadComponent } from 'react-lazy-load-image-component'

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

const ImageStyled = styled.img`
  &,
  .slick-slide & {
    display: inline-block;
    max-width: 100%;
    max-height: 100%;
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    ${({ roundShape }) => roundShape && 'border-radius:50%'}
  }
`

/**
 * Component
 */
const AdaptiveImage = ({
  src,
  className,
  alt = '',
  align = 'center',
  width = 'auto',
  height = 'auto',
  maxDpi = 2,
  visibleByDefault = false,
  inline,
  roundShape = false,
  style,
}) => (
  <ImageWrapper
    width={width}
    align={align}
    height={height}
    className={classNames('image', className)}
    inline={inline}
    style={style}
  >
    <LazyLoadComponent threshold={400} visibleByDefault={visibleByDefault}>
      <picture>
        <source
          type="image/webp"
          media="(max-width: 500px)"
          srcSet={
            `${process.env.GATSBY_CDN_HOST}/${src}-mobile.webp, ${process.env.GATSBY_CDN_HOST}/${src}-mobile-2x.webp 2x` +
            (maxDpi >= 2
              ? `, ${process.env.GATSBY_CDN_HOST}/${src}-mobile-4x.webp 4x`
              : '')
          }
        />
        <source
          type="image/webp"
          srcSet={
            `${process.env.GATSBY_CDN_HOST}/${src}.webp` +
            (maxDpi >= 2
              ? `, ${process.env.GATSBY_CDN_HOST}/${src}-2x.webp 2x`
              : '') +
            (maxDpi >= 4
              ? `, ${process.env.GATSBY_CDN_HOST}/${src}-4x.webp 4x`
              : '')
          }
        />
        <source
          media="(max-width: 500px)"
          srcSet={
            `${process.env.GATSBY_CDN_HOST}/${src}-mobile.png, ${process.env.GATSBY_CDN_HOST}/${src}-mobile-2x.png 2x` +
            (maxDpi >= 2
              ? `, ${process.env.GATSBY_CDN_HOST}/${src}-mobile-4x.png 4x`
              : '')
          }
        />
        <source
          srcSet={
            `${process.env.GATSBY_CDN_HOST}/${src}.png` +
            (maxDpi >= 2
              ? `, ${process.env.GATSBY_CDN_HOST}/${src}-2x.png 2x`
              : '') +
            (maxDpi >= 4
              ? `, ${process.env.GATSBY_CDN_HOST}/${src}-4x.png 4x`
              : '')
          }
        />
        <ImageStyled
          src={`${process.env.GATSBY_CDN_HOST}/${src}.png`}
          alt={alt}
          roundShape={roundShape}
          width={width}
          height={height}
        />
      </picture>
    </LazyLoadComponent>
  </ImageWrapper>
)

AdaptiveImage.displayName = 'AdaptiveImage'
export default AdaptiveImage
