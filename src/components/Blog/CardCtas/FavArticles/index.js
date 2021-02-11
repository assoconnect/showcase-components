import React from 'react'

import styled from 'styled-components'
import { UI, Svg } from '../../..'
import { WrapperBordered, TitleBordered } from '../styled.js'
import { Link as GatsbyLink } from 'gatsby'

const ListItem = styled(GatsbyLink)`
  display: flex;
  margin-bottom: 40px;
  align-items: center !important;
  @media screen and (max-width: ${UI.breakpoints.mobile}) {
    flex-direction: column;
  }
`
const FavIconWrap = styled(props => (
  <Svg src="components/blog/icons/blog-fav.svg" />
))`
  height: 20px;
  margin-right: 10px;
`
const MiniImage = styled.div`
  flex: 0 0 130px;
  background-image: url(${props => props.image});
  height: 60px;
  background-size: cover;
  background-position: center;
  width: 164px;
`
const Name = styled.div`
  flex: 1;
  padding-left: 10px;
  margin: auto;
  font-size: 14px;
  line-height: 17px;
  font-weight: bold;
  color: #939393;
  @media screen and (max-width: ${UI.breakpoints.mobile}) {
    margin-top: 10px;
  }
`

const FavArticlesAside = props => {
  return (
    <WrapperBordered>
      <TitleBordered>
        Most <FavIconWrap />
        articles
      </TitleBordered>
      <div>
        {props.favlist.map((edge, i) => {
          return (
            <ListItem key={i} href={`/${edge.node.slug}`}>
              <MiniImage
                key={i}
                image={edge.node.feature_image.url}
              ></MiniImage>
              <Name key={i}>{edge.node.title}</Name>
            </ListItem>
          )
        })}
      </div>
    </WrapperBordered>
  )
}

export default FavArticlesAside
