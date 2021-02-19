import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import styled from 'styled-components'
import { UI, Svg } from '../..'

export const PagerWrap = styled.ul`
  display: inline-block;
  text-align: center;
  margin: 30px auto;
  padding: 0;
`

export const PagerRule = styled.span`
  text-align: center;
`

export const ArrowBlue = styled(props => (
  <Svg src="components/blog/icons/blog-arrow-blue" width="15px" {...props} />
))`
  ${({ transform }) => `transform: ${transform};`}
  ${({ margin }) => `margin: ${margin};`}
  display: inline-flex;
  width: 13.04px;
  vertical-align: middle;
  > div > div {
    display: flex;
  }
`

export const ArrowWhite = styled(props => (
  <Svg src="components/blog/icons/blog-arrow-white" width="15px" {...props} />
))`
  ${({ transform }) => `transform: ${transform};`}
  ${({ margin }) => `margin: ${margin};`}
  display: none;
  width: 13.04px;
  vertical-align: middle;
  > div > div {
    display: flex;
  }
`

export const PagerLink = styled(GatsbyLink)`
  padding: 5px 8px !important;
  color: #316bf2;
  text-decoration: none;
  line-height: 38px;
  background-color: transparent;
  font-family: ${UI.fonts.family.roboto};
  &.active {
    color: white !important;
  }
`

export const PagerNextPrev = styled.li`
  float: none;
  display: inline-block;
  margin: 5px;
  padding: 0 7px;
  font-family: ${UI.fonts.family.roboto};

  &.active,
  &:hover {
    border-radius: 22.5px;
    background-color: #316bf2;
    color: #fff;
  }
  &:hover ${ArrowBlue} {
    display: none !important;
  }
  &:hover ${ArrowWhite} {
    display: inline-flex !important;
  }
  &:hover ${PagerLink} {
    color: #fff;
  }
`
export const PagerNum = styled.li`
  width: 38px;
  height: 38px;
  text-align: center;
  display: inline-block;
  margin: 5px;
  &.active,
  &:hover {
    border-radius: 22.5px;
    background-color: #316bf2;
    color: #fff;
  }
  &.active,
  &:hover ${PagerLink} {
    color: #fff;
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
      <PagerNextPrev>
        {previousPagePath && (
          <PagerLink to={`/${previousPagePath}`}>
            <ArrowBlue
              alt="arrow pager"
              transform="rotate(180deg)"
              margin="auto 10px auto auto"
            ></ArrowBlue>
            <ArrowWhite
              alt="arrow pager"
              transform="rotate(180deg)"
              margin="auto 10px auto auto"
            ></ArrowWhite>
            Previous
          </PagerLink>
        )}
      </PagerNextPrev>
      {Array.from({ length: numberOfPages }, (_, i) => (
        <PagerNum className={pageNumber === i && 'active'}>
          <PagerLink
            circle
            key={`pagination-number${i + 1}`}
            to={`/en-us/blog/${i === 0 ? '' : i + 1}`}
            className={pageNumber === i && 'active'}
          >
            {i + 1}
          </PagerLink>
        </PagerNum>
      ))}
      <PagerNextPrev>
        {nextPagePath && (
          <PagerLink to={`/${nextPagePath}`}>
            Next{' '}
            <ArrowBlue
              alt="arrow pager"
              margin="auto auto auto 10px"
            ></ArrowBlue>
            <ArrowWhite
              alt="arrow pager"
              margin="auto auto auto 10px"
            ></ArrowWhite>
          </PagerLink>
        )}
      </PagerNextPrev>
    </PagerWrap>
  )
}

export default Pager
