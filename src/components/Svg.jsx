import React from 'react'
import { UI } from '../components'
import styled from 'styled-components'
import ReactSVG from 'react-svg'
import { LazyLoadComponent } from 'react-lazy-load-image-component'

/**
 * Style
 */
const SvgWrapper = styled.div`
  /* Hack whitespace */
  font-size: 0;
  /* Mobile mode */
  @media screen and (max-width: ${UI.breakpoints.mobile}) {
    text-align: center;
  }
`
const SvgStyled = styled(
  ({ color, colorSecondary, height, width, ...rest }) => <ReactSVG {...rest} />
)`
  svg {
    display: inline-block;
    height: ${({ height }) => height};
    width: ${({ width }) => width};
    .svg--color-primary {
      fill: ${({ color }) => UI.colors[color]};
    }
    .svg--color-secondary {
      fill: ${({ colorSecondary }) => UI.colors[colorSecondary]};
    }
  }
`

/**
 * Component
 */
const Svg = ({
  className,
  color = 'darkGrey',
  colorSecondary = 'turquoise',
  height = '',
  src,
  visibleByDefault = false,
  width = '',
}) => {
  let widthCalc = width
  let heightCalc = height
  if (width !== '' && height === '') {
    heightCalc = width
  } else if (width === '' && height !== '') {
    widthCalc = height
  }
  return (
    <LazyLoadComponent threshold={400} visibleByDefault={visibleByDefault}>
      <SvgWrapper className={className}>
        <SvgStyled
          src={`${process.env.GATSBY_CDN_HOST}/${src}.svg`}
          color={color}
          colorSecondary={colorSecondary}
          width={widthCalc}
          height={heightCalc}
          fallback={() => {
            console.error(`"${src}" failed to load.`)
            return <span className="error">{src} not found.</span>
          }}
        />
      </SvgWrapper>
    </LazyLoadComponent>
  )
}
Svg.displayName = 'Svg' // https://github.com/facebook/react/issues/4915#issuecomment-335803765

export default Svg
