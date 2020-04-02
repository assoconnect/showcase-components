import React, { Children, createElement } from 'react'
import styled from 'styled-components'
import { UI, Link } from './'
import getDisplayName from 'react-display-name'
import classNames from 'classnames/bind'

/**
 * Style
 */
const CardStyled = styled(
  ({ children, itemId, tag, minHeight, align, ...rest }) =>
    createElement(tag, rest, children)
)`
  min-height: ${({ minHeight }) => minHeight};
  height: calc(100% - 2.4rem);
  padding: 1.875rem;
  transition: all linear 0.3s;
  border-radius: 1.647rem;
  text-align: ${({ align }) => align};
  box-shadow: ${({ theme }) =>
    UI.shadows[theme === 'blue' ? 'slider' : 'sliderLight']};
  background: ${({ theme }) => UI.colors[theme]};
  margin: 1.2rem 0;
  display: block;
  text-decoration: none !important;

  @media screen and (min-width: ${UI.breakpoints.mobile}) {
    &.card--hover-animation {
      border: 1px solid ${UI.colors.lightGrey};
      box-shadow: none;

      &:hover {
        box-shadow: ${({ theme }) =>
          UI.shadows[theme === 'blue' ? 'slider' : 'sliderLight']};
        border-color: transparent;
        .text {
          ${({ theme }) => theme === 'white' && `color: ${UI.colors.darkGrey}`};
        }
        .svg--color-primary {
          ${({ theme }) => theme === 'white' && `fill: ${UI.colors.darkGrey}`};
        }
      }
      .text {
        transition: color linear 0.3s;
      }
      svg * {
        transition: fill linear 0.3s;
      }
    }
  }
`

/**
 * Component
 */
const Card = ({
  align = 'center',
  children,
  hoverAnimation,
  minHeight = 'auto',
  theme = 'white',
  className,
  href = null,
}) => (
  <CardStyled
    align={align}
    theme={theme}
    tag={href ? Link : 'div'}
    minHeight={minHeight}
    className={classNames(className, {
      'card--hover-animation': hoverAnimation,
    })}
    href={href}
  >
    {theme === 'blue'
      ? Children.map(children, child => {
          if (child) {
            switch (getDisplayName(child.type)) {
              case 'MiddleTitle':
              case 'SmallTitle':
              case 'Text':
              case 'BulletList':
              case 'Svg':
                return React.cloneElement(child, {
                  color: child.props.color || 'white',
                })
              case 'Image':
                return React.cloneElement(child, {
                  theme: 'blue',
                })

              default:
                return child
            }
          }
        })
      : Children.map(children, child => {
          if (child) {
            switch (getDisplayName(child.type)) {
              case 'MiddleTitle':
              case 'SmallTitle':
                return React.cloneElement(child, {
                  color: child.props.color || 'turquoise',
                })
              case 'Text':
              case 'Svg':
                return React.cloneElement(child, {
                  color: child.props.color || 'middleGrey',
                })

              default:
                return child
            }
          }
        })}
  </CardStyled>
)

export default Card
