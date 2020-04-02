import React, { ReactNode, createElement } from 'react'
import { UI } from '../'
import styled from 'styled-components'
import classNames from 'classnames/bind'

/**
 * Style
 */
const SubtitleStyled = styled(({ tag, children, ...rest }) =>
  createElement(tag, rest, children)
)`
  font-family: ${UI.fonts.family.roboto};
  font-weight: ${UI.fonts.weight.light};
  font-size: 1.375rem;
  line-height: 2.1875rem;
  letter-spacing: 0.5px;
  text-align: ${({ align }) => align};
  color: ${({ color }) => UI.colors[color]};

  /* Mobile mode */
  @media screen and (max-width: ${UI.breakpoints.mobile}) {
    font-size: 0.95rem;
    text-align: center;
    line-height: 1.412rem;
  }
`

/**
 * Component
 */
const Subtitle = ({
  align = 'center',
  children,
  className,
  color = 'lightGrey',
  tag = 'h5',
}) => (
  <SubtitleStyled
    tag={tag}
    align={align}
    color={color}
    className={classNames(className)}
  >
    {children}
  </SubtitleStyled>
)
Subtitle.displayName = 'Subtitle' // https://github.com/facebook/react/issues/4915#issuecomment-335803765

export default Subtitle
