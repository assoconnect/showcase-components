import React, { ReactNode } from 'react'
import { Button, Link } from '..'
import classNames from 'classnames/bind'

/**
 * Component
 */
const ButtonLink = ({
  align,
  children,
  className,
  href,
  target,
  theme,
  size,
}) => (
  <Link
    href={href}
    target={target}
    className={classNames('button', 'button--type-link', className)}
  >
    <Button align={align} size={size} theme={theme}>
      {children}
    </Button>
  </Link>
)
ButtonLink.displayName = 'ButtonLink' // https://github.com/facebook/react/issues/4915#issuecomment-335803765

export default ButtonLink
