import React, { Children } from 'react'
import styled from 'styled-components'
import { UI, Svg } from '../../'
import getDisplayName from 'react-display-name'

/**
 * Style
 */
const SliderCardStyled = styled.div`
  padding: 2rem 3rem 3rem;
  cursor: pointer;

  @media screen and (max-width: 1300px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  @media screen and (max-width: ${UI.breakpoints.mobile}) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`
const SliderCardSlideInner = styled(props => <div {...props} />)`
  border-radius: 1.176rem;
  background-color: ${UI.colors.white};
  border: 1px solid ${UI.colors.lightGrey};
  box-shadow: none;
  text-align: center;
  transition: 0.3s;
  padding: calc(2rem + 15px) 1rem;

  .slick-current & {
    box-shadow: ${UI.shadows.slider};
    border-color: transparent;
  }
`
const SliderCardSlideSvgStyled = styled(props => <Svg {...props} />)`
  .slick-current & .svg--color-primary {
    fill: ${UI.colors.darkGrey};
  }
`

/**
 * Component
 */
const SliderCard = ({ children }) => (
  <SliderCardStyled>
    <SliderCardSlideInner>
      {Children.map(children, child => {
        if (child) {
          switch (getDisplayName(child.type)) {
            case 'ButtonLink':
              return React.cloneElement(child, {
                button: {
                  theme:
                    (child.props.button && child.props.button.theme) ||
                    'yellow',
                  size:
                    (child.props.button && child.props.button.size) || 'big',
                },
              })
            case 'MiddleTitle':
            case 'SmallTitle':
              return React.cloneElement(child, {
                color: child.props.color || 'turquoise',
              })
            case 'Image':
              return React.cloneElement(child, {
                visibleByDefault: true,
              })
            case 'Svg':
              return (
                <SliderCardSlideSvgStyled
                  color="middleGrey"
                  width="125px"
                  {...child.props}
                />
              )

            default:
              return child
          }
        }
      })}
    </SliderCardSlideInner>
  </SliderCardStyled>
)

export default SliderCard
