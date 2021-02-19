import React from 'react'
import styled from 'styled-components'
import { UI } from '../../..'

export const BlogPageTitleStyled = styled.h1`
  font-family: ${UI.fonts.family.roboto};
  padding: 10px 0px;
  font-size: 36px;
  line-height: 48px;
  font-weight: 900;
  color: #9b9b9b;
  width: 100%;
  padding-right: 15px;
  @media screen and (max-width: ${UI.breakpoints.mobile}) {
    padding-right: 0;
  }
`
const BlogPageTitle = ({ children }) => {
  return <BlogPageTitleStyled>{children}</BlogPageTitleStyled>
}

export default BlogPageTitle
