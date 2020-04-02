import React, { createElement } from 'react'
import { UI } from '../'
import styled from 'styled-components'
import classNames from 'classnames/bind'

/**
 * Style
 */
const BigTitleStyled = styled(({ tag, minHeight, children, ...props }) =>
  createElement(tag, props, children)
)`
  font-family: ${({ font }) => UI.fonts.family[font]};
  font-weight: ${UI.fonts.weight.light};
  font-size: 2.625rem;
  line-height: 3.375rem;
  text-align: ${({ align }) => align};
  color: ${({ color }) => UI.colors[color]};
  min-height: ${({ minHeight }) => minHeight};
  ${({ display }) => (display ? `display: ${display}` : ``)};

  /* Mobile mode */
  @media screen and (max-width: ${UI.breakpoints.mobile}) {
    font-size: 1.75rem;
    line-height: 2.5rem;
    text-align: center;
  }
`

/**
 * Component
 */
const BigTitle = ({
  align = 'center',
  children,
  className,
  color = 'white',
  font = 'baloo',
  tag = 'h2',
  display,
  minHeight = 'none',
  id,
}) => (
  <BigTitleStyled
    tag={tag}
    align={align}
    color={color}
    font={font}
    display={display}
    minHeight={minHeight}
    className={classNames('title--big', className)}
    id={id}
  >
    {children}
  </BigTitleStyled>
)
BigTitle.displayName = 'BigTitle' // https://github.com/facebook/react/issues/4915#issuecomment-335803765

export default BigTitle
