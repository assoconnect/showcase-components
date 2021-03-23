import React from 'react'
import {
  Wrapper,
  StyledLink,
  FrontMatterBlock,
  Title,
  Meta,
  Thumbnail,
  ReadingTime,
  CardArticleFooter,
} from './styled'
import { Svg, AuthorWrap, AuthorAvatar, AuthorName, TagWrap, Tag } from '../..'

const CardArticle = ({ width, mock }) => {
  const thumb = mock.feature_image.url
  let textLength = mock.body.length
  let result
  if (textLength > 0) {
    result = Math.ceil(textLength / 3700)
  }

  return (
    <Wrapper width={width}>
      <StyledLink to={`/en-us/blog/${mock.slug}/`}>
        <Thumbnail image={thumb} />
        <FrontMatterBlock>
          <TagWrap>
            {mock.topics.map((mock, i) => {
              return <Tag key={`Tag${i}`}>{mock.name}</Tag>
            })}
          </TagWrap>
          <Title>{mock.meta.title}</Title>
          <CardArticleFooter>
            <Meta>
              <Svg
                src="components/blog/icons/blog-reading-time-dark"
                alt="reading time icon"
                width="20px"
                style={{ marginRight: '7px', verticalAlign: 'middle' }}
              />
              <ReadingTime>{result} min read</ReadingTime>
            </Meta>
            <AuthorWrap flip>
              <AuthorAvatar
                src={mock.author.avatar}
                alt={`Springly author ${mock.author.name}`}
              ></AuthorAvatar>
              <AuthorName color="#838383">{mock.author.full_name}</AuthorName>
            </AuthorWrap>
          </CardArticleFooter>
        </FrontMatterBlock>
      </StyledLink>
    </Wrapper>
  )
}

export default CardArticle
