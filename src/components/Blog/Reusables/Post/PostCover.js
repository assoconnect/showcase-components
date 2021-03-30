import React from 'react'
import styled from 'styled-components'

const PostCoverWrap = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  align-items: center;
  margin-bottom: 19px;
`

const PostCoverStyled = styled.img`
  display: block;
  flex: 1 1 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`
const PostCover = ({ children, image, alt }) => {
  return (
    <PostCoverWrap>
      <PostCoverStyled src={image} alt={alt}>
        {children}
      </PostCoverStyled>
    </PostCoverWrap>
  )
}

export default PostCover
