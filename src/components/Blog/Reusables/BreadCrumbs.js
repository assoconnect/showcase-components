import React from 'react'
import styled from 'styled-components'
import { Link as GatsbyLink } from 'gatsby'
import { UI } from '../..'

const BreadCrumbsWrap = styled.ol`
  margin: 15px 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  font-family: ${UI.fonts.family.roboto};
  flex-direction: row;
`

const BreadCrumbsItem = styled.li`
  margin: 15px 0;
  padding: 0 5px 0 10px;
`
const BreadCrumbsLink = styled(GatsbyLink)`
  margin: 15px 0;
  padding: 0;
  color: ${props => (props.color ? props.color : '#4a4a4a')};
  &:hover {
    color: #4a4a4a;
  }
`

const BreadCrumbs = props => {
  return (
    <BreadCrumbsWrap>
      <BreadCrumbsItem>
        <BreadCrumbsLink color="#939393" to={props.homeUrl}>
          Blog
        </BreadCrumbsLink>
      </BreadCrumbsItem>
      <BreadCrumbsItem>{'>'}</BreadCrumbsItem>
      <BreadCrumbsItem>
        <BreadCrumbsLink to={props.postUrl}>{props.postName}</BreadCrumbsLink>
      </BreadCrumbsItem>
    </BreadCrumbsWrap>
  )
}

export default BreadCrumbs
