import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import classNames from 'classnames/bind'
import styled, { css } from 'styled-components'
import atob from 'atob'

/**
 * Style
 */
const commonStyle = css`
  text-decoration: underline;
`
const GatsbyLinkStyled = styled(({ isStyled, ...rest }) => (
  <GatsbyLink {...rest} />
))`
  ${({ isStyled }) => isStyled && commonStyle};
`
const AnchorLinkStyled = styled(({ isStyled, ...rest }) => (
  <AnchorLink {...rest} />
))`
  ${({ isStyled }) => isStyled && commonStyle};
`
const LinkStyled = styled(({ isStyled, children, ...rest }) => (
  <a {...rest}>{children}</a>
))`
  ${({ isStyled }) => isStyled && commonStyle};
`
const ObfuscatedLinkStyled = styled(({ isStyled, ...rest }) => (
  <span {...rest} />
))`
  cursor: pointer;
  ${({ isStyled }) => isStyled && commonStyle};
`

/**
 * Returns the rel noopener and noreferrer if target === _blank
 */
const getNoopenerNoreferrer = target =>
  target === '_blank' ? 'noopener noreferrer' : ''

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
  // Anchor link
  if (href && href.indexOf('#') === 0) {
    return (
      <AnchorLinkStyled
        href={href}
        offset={60}
        className={classNames(className)}
        isStyled={isStyled}
      >
        {children}
      </AnchorLinkStyled>
    )
  }
  // Internal link
  else if (href && href.indexOf('/') === 0) {
    const rel = []
    const props = {}
    // Follow by default, add nofollow if property nofollow === true
    if (nofollow) {
      rel.push('nofollow')
    }
    // Noopener noreferrer To avoid the warning "Using target="_blank" without rel="noopener noreferrer" is a security risk: see https://mathiasbynens.github.io/rel-noopener..."
    const noopenerNoreferrer = getNoopenerNoreferrer(target)
    if (noopenerNoreferrer) {
      rel.push(noopenerNoreferrer)
    }
    // Add the tag only if it contains information to optimize the seo
    if (rel.length) {
      props.rel = rel.join(' ')
    }
    return (
      <GatsbyLinkStyled
        to={href}
        className={classNames('link', className)}
        target={target}
        isStyled={isStyled}
        {...props}
      >
        {children}
      </GatsbyLinkStyled>
    )
  }
  // Obfuscate link
  else if (
    href.match(
      /^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)?$/
    ) !== null
  ) {
    const hrefDecoded = atob(href)
    return (
      <ObfuscatedLinkStyled
        onClick={() => {
          // New tab
          if (target || hrefDecoded.indexOf('http') !== -1) {
            window.open(hrefDecoded, target || '_blank')
          }
          // Current tab
          else {
            window.location.href = hrefDecoded
          }
        }}
        className={classNames('link', className)}
        isStyled={isStyled}
      >
        {children}
      </ObfuscatedLinkStyled>
    )
  }
  // External link
  else {
    const rel = []
    const props = {}
    // Nofollow by default and overwrite if property nofollow === false (fix: https://gitlab.com/assoconnect/assoconnect/-/issues/18675)
    if (nofollow !== false) {
      rel.push('nofollow')
    }
    // Target default value for the external link
    target = target || '_blank'
    // Noopener noreferrer To avoid the warning "Using target="_blank" without rel="noopener noreferrer" is a security risk: see https://mathiasbynens.github.io/rel-noopener..."
    const noopenerNoreferrer = getNoopenerNoreferrer(target)
    if (noopenerNoreferrer) {
      rel.push(noopenerNoreferrer)
    }
    // Add the tag only if it contains information to optimize the seo
    if (rel.length) {
      props.rel = rel.join(' ')
    }
    return (
      <LinkStyled
        href={href}
        className={classNames('link', className)}
        isStyled={isStyled}
        target={target}
        {...props}
      >
        {children}
      </LinkStyled>
    )
  }
}

export default Link
