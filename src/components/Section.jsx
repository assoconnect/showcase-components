import React, { Children } from 'react'
import { UI, Flex, Svg } from './'
import styled from 'styled-components'
import classNames from 'classnames/bind'
import { LazyLoadComponent } from 'react-lazy-load-image-component'

/**
 * Style
 */
const SectionStyled = styled.section`
  position: relative;
  background: ${({ wave }) =>
    wave.color === 'blue'
      ? `linear-gradient(to bottom, ${UI.colors.mediumBlue}, ${UI.colors.blue} 11.765rem)`
      : wave !== false
      ? `linear-gradient(to bottom, #F5F5F5, ${UI.colors.white} 11.765rem)`
      : UI.colors.white};
  padding: 3rem 0 calc(3rem + 8vw);
  z-index: 10;
`
const SectionWave = styled(props => <Svg {...props} />)`
  display: block;
  pointer-events: none;
  position: absolute;
  bottom: calc(100% - 1px);
  left: -5vw;
  z-index: -1;
  ${({ wave }) => wave.direction === 'up' && `transform: scaleX(-1);`};
`

/**
 * Component
 */
const Section = ({
  className,
  children,
  wave = { color: 'extraLightGrey', direction: 'down' }, // Object or false for hide wave
  alignItems = 'center',
  justifyContent,
}) => {
  return (
    <SectionStyled wave={wave} className={classNames('section', className)}>
      {wave !== false && (
        <SectionWave
          color={(wave.color === 'blue' && 'mediumBlue') || 'extraLightGrey'}
          width="110vw"
          height="auto"
          src="components/section/wave"
          wave={wave}
        />
      )}
      <Flex
        alignItems={alignItems}
        flexWrap="wrap"
        py="2rem"
        justifyContent={justifyContent}
      >
        <LazyLoadComponent>
          {Children.map(children, child => {
            return React.cloneElement(child, { wave: wave.color })
          })}
        </LazyLoadComponent>
      </Flex>
    </SectionStyled>
  )
}

export default Section
