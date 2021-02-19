import React from 'react'
import styled from 'styled-components'

const ArticleCoverWrap = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  align-items: center;
  margin-bottom: 19px;
`

const ArticleCoverStyled = styled.img`
  display: block;
  flex: 1 1 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`
const ArticleCover = ({ children, image, alt }) => {
  return (
    <ArticleCoverWrap>
      <ArticleCoverStyled src={image} alt={alt}>
        {children}
      </ArticleCoverStyled>
    </ArticleCoverWrap>
  )
}

export default ArticleCover
