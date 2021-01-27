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
      <Gatsbytyled
        to={href}
        className={classNames('link', 'link--internal', className)}
        target={target}
        isStyled={isStyled}
        {...props}
      >
        {children}
      </Gatsbytyled>
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
      <AStyled
        href={href}
        className={classNames('link', 'link--external', className)}
        isStyled={isStyled}
        target={target}
        {...props}
      >
        {children}
      </AStyled>
    )
  }
}

export default Link
