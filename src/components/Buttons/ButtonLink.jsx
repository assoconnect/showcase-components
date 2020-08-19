import React from 'react'
import { Button, Link } from '..'
import classNames from 'classnames/bind'

/**
 * Component
 */
const ButtonLink = ({
  align,
  id,
  children,
  className,
  href,
  target,
  theme,
  size,
}) => {
  return (
    <div id={id}>
      <Link
        href={href}
        target={target}
        className={classNames('button', 'button--type-link', className)}
      >
        <Button align={align} size={size} theme={theme}>
          {children}
        </Button>
      </Link>
    </div>
  )
}
ButtonLink.displayName = 'ButtonLink' // https://github.com/facebook/react/issues/4915#issuecomment-335803765

export default ButtonLink
