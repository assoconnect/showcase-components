import React from 'react'
import styled from 'styled-components'
import { UI } from '../../..'

const PostMainStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 0 0 66.666667%;
  max-width: 66.666667%;
  justify-content: space-between;
  flex-direction: column;
  @media screen and (max-width: ${UI.breakpoints.smallMobile}) {
    flex: auto;
    max-width: none;
    width: 100%;
  }
`
const PostMain = ({ children }) => {
  return <PostMainStyled>{children}</PostMainStyled>
}

export default PostMain
