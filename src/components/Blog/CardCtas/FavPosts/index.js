import React from 'react'
import styled from 'styled-components'
import { UI, Svg, Link } from '../../..'
import { WrapperBordered, TitleBordered } from '../styled.js'
import btoa from 'btoa'

export const ListItem = styled(props => <Link {...props} />)`
  display: flex;
  margin-bottom: 40px;
  align-items: center !important;
  @media screen and (max-width: 1200px) {
    flex-direction: column;
    align-items: start !important;
  }
`

export const MiniImage = styled.div`
  flex: 0 0 130px;
  @media screen and (max-width: 1200px) {
    flex: 0 0 65px;
    margin: auto;
    width: 100%;
    max-width: 180px;
  }

  background-image: url(${props => props.image});
  height: 60px;
  background-size: cover;
  background-position: center;
  width: 164px;
`
export const Name = styled.div`
  flex: 1;
  margin: auto;
  font-size: 14px;
  line-height: 17px;
  font-weight: bold;
  color: #939393;
  font-family: ${UI.fonts.family.roboto};
  font-weight: bolder;
  padding-left: 10px;
  @media screen and (max-width: 1200px) {
    margin-top: 10px;
    max-width: 180px;
    padding-left: 0;
  }
`
export const HeartIcon = styled(props => (
  <Svg
    src="components/blog/icons/blog-fav"
    width="20px"
    alt="fav icon"
    {...props}
  />
))`
  width: 20px;
  vertical-align: middle;
  display: inline-block;
  margin-right: 8px;
`

const FavPostsAside = ({
  favoritesPosts,
  favoritesSlugs,
  favoritesSlugsObfuscation,
}) => {
  // Sort favoritesPosts
  favoritesPosts.sort(
    (a, b) =>
      favoritesSlugs.indexOf(a.node.slug) - favoritesSlugs.indexOf(b.node.slug)
  )
  const link = `/en-us/blog/${slug}/`
  return (
    <WrapperBordered>
      <TitleBordered>
        Most
        <HeartIcon />
        articles
      </TitleBordered>
      <div>
        {posts.map(({ node: { slug, feature_image, title } }, i) => (
          <ListItem
            key={i}
            href={favoritesSlugsObfuscation.includes(slug) ? btoa(link) : link}
          >
            <MiniImage image={feature_image.url}></MiniImage>
            <Name>{title}</Name>
          </ListItem>
        ))}
      </div>
    </WrapperBordered>
  )
}

export default FavPostsAside
