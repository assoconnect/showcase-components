import React, { ReactNode, createElement } from 'react'
import { UI } from '../'
import styled from 'styled-components'
import classNames from 'classnames/bind'

/**
 * Style
 */
interface Props {
  align: string
  children: ReactNode
  className: string
  color: string
  font: string
  tag: string
  id: string
}
const MiddleTitleStyled = styled(({ tag, children, ...rest }: Props) =>
  createElement(tag, rest, children)
)`
  font-family: ${({ font }: Props) => UI.fonts.family[font]};
  font-weight: ${UI.fonts.weight.light};
  font-size: 2.059rem;
  line-height: 3rem;
  letter-spacing: 0.5px;
  text-align: ${({ align }: Props) => align};
  color: ${({ color }: Props) => UI.colors[color]};

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
}: Props) => (
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
