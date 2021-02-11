import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import styled from 'styled-components'
import { Svg } from '../'

const PagerWrap = styled.div`
  display: flex;
  text-align: center;
  margin: 30px auto;
  padding: 0;
`
const PagerButton = styled(GatsbyLink)`
  display: block;
  height: 38px;
  width: ${props => props.circle && '38px'};
  margin: 0 2px;
  color: #316bf2;
  &.active,
  &:hover {
    border-radius: 22.5px;
    background-color: #316bf2;
    color: #fff;
  }
`
const PagerText = styled.span`
  height: auto;
  line-height: 38px;
  padding: 15px;
`

const ArrowWhite = styled(props => (
  <Svg src="components/blog/blog-arrow-blue.svg" />
))`
  margin: 0 10px;
  width: 13.04px;
  height: 13.04px;
  transform: ${props => props.flip && 'rotate(180deg)'};
  display: none;
  ${PagerButton}:hover & {
    display: inline;
  }
`

const ArrowBlue = styled(props => (
  <Svg src="components/blog/icons/blog-arrow-blue.svg" />
))`
  margin: 0 10px;
  width: 13.04px;
  height: 13.04px;
  transform: ${props => props.flip && 'rotate(180deg)'};
  ${PagerButton}:hover & {
    display: none;
  }
`

const Pager = ({ pageContext }) => {
  const {
    previousPagePath,
    nextPagePath,
    pageNumber,
    numberOfPages,
  } = pageContext
  return (
    <PagerWrap>
      {previousPagePath && (
        <PagerButton to={`/${previousPagePath}`}>
          <ArrowBlue flip />
          <ArrowWhite flip />
          <PagerText>Previous</PagerText>
        </PagerButton>
      )}
      {Array.from({ length: numberOfPages }, (_, i) => (
        <PagerButton
          circle
          key={`pagination-number${i + 1}`}
          to={`/en-us/blog/${i === 0 ? '' : i + 1}`}
          className={pageNumber === i && 'active'}
        >
          <PagerText>{i + 1}</PagerText>
        </PagerButton>
      ))}
      {nextPagePath && (
        <PagerButton to={`/${nextPagePath}`}>
          <PagerText>Next</PagerText> <ArrowBlue /> <ArrowWhite />
        </PagerButton>
      )}
    </PagerWrap>
  )
}

export default Pager
