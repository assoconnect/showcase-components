import React, { Children } from 'react'
import styled, { css } from 'styled-components'
import { UI, Svg } from '.'
import getDisplayName from 'react-display-name'
import classNames from 'classnames/bind'

/**
 * Style
 */
const ArrowStyled = styled.span`
  font-family: ${UI.fonts.family.caveat};
  color: ${UI.colors.yellow};
  display: inline-block;
  font-size: 34px;
  position: relative;
  text-align: ${({ align }) => align};
  @media screen and (max-width: ${UI.breakpoints.mobile}) {
    width: 100%;
  }
`
const positionRight = css`
  right: 0;
`
const positionLeft = css`
  left: 0;
`
const directionLeft = css`
  transform: scaleX(-1);
`
const SvgStyled = styled(props => <Svg {...props} />)`
  position: absolute;
  top: 100%;
  ${({ position }) => position === 'left' && positionLeft};
  ${({ position }) => position === 'right' && positionRight};
  ${({ direction }) => direction === 'left' && directionLeft}
`

/**
 * Component
 */
const Arrow = ({
  align = 'left',
  children,
  color,
  direction = 'right',
  position = 'left',
  className,
}) => (
  <ArrowStyled className={classNames(className)} align={align}>
    {color === 'white'
      ? Children.map(children, child => {
          if (child.type) {
            switch (getDisplayName(child.type)) {
              case 'MiddleTitle':
              case 'SmallTitle':
              case 'Text':
              case 'BulletList':
              case 'Svg':
                return React.cloneElement(child, {
                  color: child.props.color || color,
                  align: child.props.align || align,
                })
              default:
                return child
            }
          } else return child
        })
      : Children.map(children, child => {
          if (child.type) {
            switch (getDisplayName(child.type)) {
              case 'MiddleTitle':
              case 'SmallTitle':
              case 'Text':
              case 'BulletList':
              case 'Svg':
                return React.cloneElement(child, {
                  align: child.props.align || align,
                })
              default:
                return child
            }
          } else return child
        })}

    <SvgStyled
      src="components/arrow/curve-arrow"
      color="yellow"
      width="60px"
      position={position}
      direction={direction}
      className="hidden-mobile"
    />
  </ArrowStyled>
)
Arrow.displayName = 'Arrow' // https://github.com/facebook/react/issues/4915#issuecomment-335803765

export default Arrow
