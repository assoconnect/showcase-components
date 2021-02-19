import React from 'react'
import styled from 'styled-components'
import { UI } from '../../..'

const BlogSectionStyled = styled.section`
  margin: 30px auto;
  padding-bottom: ${props => props.paddingBottom};
  max-width: 1140px;
  @media screen and (max-width: ${UI.breakpoints.mobile}) {
    margin: 30px 5%;
    padding-bottom: 0px;
  }
`
const BlogSection = ({ children, paddingBottom }) => {
  return (
    <BlogSectionStyled paddingBottom={paddingBottom}>
      {children}
    </BlogSectionStyled>
  )
}

export default BlogSection
