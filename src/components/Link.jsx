import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { Link as ScrollLink } from 'react-scroll'
import classNames from 'classnames/bind'
import styled, { css } from 'styled-components'

/**
 * Component Styled
 */
const linkStyled = css`
  text-decoration: underline;
`
const Gatsbytyled = styled(({ isStyled, ...props }) => (
  <GatsbyLink {...props} />
))`
  ${({ isStyled }) => isStyled && linkStyled};
`
const ScrollStyled = styled(({ isStyled, ...props }) => (
  <ScrollLink {...props} />
))`
  ${({ isStyled }) => isStyled && linkStyled};
`
const AStyled = styled.a`
  ${({ isStyled }) => isStyled && linkStyled};
`

/**
 * Component
 */
const Link = ({
  children,
  className,
  href = '',
  nofollow = null,
  isStyled = true,
  target = null,
}) => {
  if (href && href.indexOf('#') === 0) {
    return (
      <ScrollStyled
        to={href.substring(1)}
        smooth={true}
        offset={-60}
        className={classNames(className)}
        isStyled={isStyled}
      >
        {children}
      </ScrollStyled>
    )
  } else if (href && href.indexOf('/') === 0) {
    return (
      <Gatsbytyled
        to={href}
        className={classNames('link', 'link--internal', className)}
        rel={nofollow && 'nofollow'}
        target={target}
        isStyled={isStyled}
      >
        {children}
      </Gatsbytyled>
    )
  } else if (
    href &&
    (href.indexOf('mailto:') === 0 || href.indexOf('tel:') === 0)
  ) {
    return (
      <AStyled
        href={href}
        rel="noopener noreferrer nofollow"
        className={classNames('link', 'link--external', className)}
        target={target}
        isStyled={isStyled}
      >
        {children}
      </AStyled>
    )
  } else {
    // Duplicate code to avoid the "warning  Using target="_blank" without rel="noopener noreferrer" is a security risk: see https://mathiasbynens.github.io/rel-noopener  react/jsx-no-target-blank" error that appears when rel = {``} is used instead of rel = ""
    if (nofollow || nofollow === null) {
      return (
        <AStyled
          href={href}
          target={target || '_blank'}
          rel="noopener noreferrer nofollow"
          className={classNames('link', 'link--external', className)}
          isStyled={isStyled}
        >
          {children}
        </AStyled>
      )
    } else {
      return (
        <AStyled
          href={href}
          target={target || '_blank'}
          rel="noopener noreferrer"
          className={classNames('link', 'link--external', className)}
          isStyled={isStyled}
        >
          {children}
        </AStyled>
      )
    }
  }
}

export default Link
