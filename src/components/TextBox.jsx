import React from 'react'
import { SmallTitle, Space, Text } from '.'
import styled from 'styled-components'

/**
 * Style
 */
const TextBoxStyled = styled.div`
  transition: opacity linear 0.3s;
  ${({ hoverAnimation }) => hoverAnimation && `opacity: .5`};

  &:hover {
    opacity: 1;
  }
`

/**
 * Component
 */
const TextBox = ({ datas, hoverAnimation = false }) => {
  return datas.map((data, i) => (
    <TextBoxStyled hoverAnimation={hoverAnimation} key={i}>
      <SmallTitle font="roboto" align="left" color="turquoise">
        {data.title}
      </SmallTitle>
      <Space size="tiny" />
      <Text align="left">{data.text}</Text>
      <Space size="medium" />
    </TextBoxStyled>
  ))
}

export default TextBox
