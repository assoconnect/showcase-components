import React, { createElement } from 'react'
import { UI } from '../'
import styled from 'styled-components'
import classNames from 'classnames/bind'

/**
 * Style
 */
const MiddleTitleStyled = styled(({ tag, children, ...rest }) =>
  createElement(tag, rest, children)
)`
  font-family: ${({ font }) => UI.fonts.family[font]};
  font-weight: ${UI.fonts.weight.light};
  font-size: 2.059rem;
  line-height: 3rem;
  letter-spacing: 0.5px;
  text-align: ${({ align }) => align};
  color: ${({ color }) => UI.colors[color]};

  /* Mobile mode */
  @media screen and (max-width: ${UI.breakpoints.mobile}) {
    font-size: 1.5rem;
    line-height: 2.3rem;
    text-align: center;
  }
`

/**
 * Component
 */
const MiddleTitle = ({
  align = 'center',
  children,
  className,
  color = 'blue',
  font = 'baloo',
  tag = 'h2',
  id,
}) => (
  <MiddleTitleStyled
    tag={tag}
    align={align}
    color={color}
    font={font}
    id={id}
    className={classNames('title--middle', className)}
  >
    {children}
  </MiddleTitleStyled>
)
MiddleTitle.displayName = 'MiddleTitle' // https://github.com/facebook/react/issues/4915#issuecomment-335803765

export default MiddleTitle
