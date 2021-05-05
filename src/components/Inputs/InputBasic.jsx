import React from 'react'
import styled from 'styled-components'
import { UI, Svg } from '../'
import classNames from 'classnames/bind'

/**
 * Style
 */
const InputBasicWrapper = styled.span`
  border: 0.5px solid transparent;
  outline-style: none;
  background-color: ${UI.colors.white};
  border-radius: 2.941rem;
  display: inline-block;
  overflow: hidden;
  vertical-align: middle;

  ${({ icon }) =>
    icon &&
    `
      padding-left: 1rem;
      display: inline-flex;
      align-items: center;
    `};
`
const InputBasicStyled = styled.input`
  border: 0.5px solid transparent;
  outline-style: none;
  padding: 0;
  border-radius: 0;
  background-color: transparent;
  font-size: 1rem;
  font-family: ${UI.fonts.family.roboto};
  font-weight: ${UI.fonts.weight.normal};
  text-align: ${({ align }) => align || 'left'};
  color: ${UI.colors.darkGrey};

  &::placeholder {
    color: ${({ color }) => UI.colors[color || 'middleGrey']};
    opacity: 1;
  }
`
const InputBasicIco = styled(props => <Svg {...props} />)`
  margin-right: 0.8rem;
`

/**
 * Component
 */
const InputBasic = ({ className, placeholder, icon, name, ...rest }) => (
  <InputBasicWrapper className={classNames(className)} icon={icon}>
    {icon && (
      <InputBasicIco
        width="2rem"
        src={icon}
        className="animation--effect-wobble"
        color="middleGrey"
        visibleByDefault
      />
    )}
    <InputBasicStyled
      className="input"
      placeholder={placeholder}
      name={name}
      {...rest}
    />
  </InputBasicWrapper>
)

export default InputBasic
