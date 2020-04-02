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
const SmallTitleStyled = styled(({ tag, children, ...rest }: Props) =>
  createElement(tag, rest, children)
)`
  font-family: ${({ font }: Props) => UI.fonts.family[font]};
  font-weight: ${({ font }: Props) =>
    font === 'roboto' ? UI.fonts.weight.bold : UI.fonts.weight.light};
  font-size: 1.412rem;
  line-height: 1.875rem;
  letter-spacing: 0.03px;
  text-align: ${({ align }: Props) => align};
  color: ${({ color }: Props) => UI.colors[color]};

  /* Mobile mode */
  @media screen and (max-width: ${UI.breakpoints.mobile}) {
    font-size: 1.2rem;
    line-height: 1.8rem;
    text-align: center;
  }
`

/**
 * Component
 */
const SmallTitle = ({
  align = 'center',
  children,
  className,
  color = 'blue',
  font = 'baloo',
  tag = 'h3',
  id,
}: Props) => (
  <SmallTitleStyled
    tag={tag}
    align={align}
    color={color}
    font={font}
    id={id}
    className={classNames('title--small', className)}
  >
    {children}
  </SmallTitleStyled>
)
SmallTitle.displayName = 'SmallTitle' // https://github.com/facebook/react/issues/4915#issuecomment-335803765

export default SmallTitle
