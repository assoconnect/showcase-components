import React from 'react'
import styled from 'styled-components'

const BlogGridStyled = styled.div`
  display: flex;
`
const BlogGrid = ({ children }) => {
  return <BlogGridStyled>{children}</BlogGridStyled>
}

export default BlogGrid
