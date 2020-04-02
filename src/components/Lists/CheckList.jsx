import React from 'react'
import styled from 'styled-components'
import { Text, Svg, UI } from '../'
import classNames from 'classnames/bind'

/**
 * Style
 */
const CheckStyled = styled(props => <Svg {...props} />)`
  margin-right: 1rem;
`
const ItemStyled = styled.li`
  display: flex;
  align-items: center;
  margin: 20px;
`
const TextStyled = styled(props => <Text {...props} />)`
  flex: 1;
  transition: 0.3s;

  .slick-current & {
    color: ${UI.colors.darkGrey};
  }
`

/**
 * Component
 */
const CheckList = ({ content, className }) => (
  <ul className={classNames(className)}>
    {content.map((field, i) => (
      <ItemStyled key={i} className="check-list__item">
        <CheckStyled
          src="components/check-list/check"
          width="1rem"
          color="turquoise"
        />
        <TextStyled align="left">{field}</TextStyled>
      </ItemStyled>
    ))}
  </ul>
)

export default CheckList
