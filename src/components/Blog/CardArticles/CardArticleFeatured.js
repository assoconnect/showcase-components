import React from 'react'
import {
  Wrapper,
  FrontMatter,
  StyledLink,
  FrontMatterBlock,
  Title,
  Meta,
  ReadingTime,
} from './styled'

import { Svg, AuthorWrap, AuthorAvatar, AuthorName, TagWrap, Tag } from '../..'

const CardArticleFeatured = ({ mock }) => {
  let textLength = mock.body.length
  let result
  if (textLength > 0) {
    result = Math.ceil(textLength / 3700)
  }
  return (
    <Wrapper image={mock.feature_image.url} featured>
      <StyledLink to={`/en-us/blog/${mock.slug}`}>
        <FrontMatter>
          <FrontMatterBlock featured>
            <TagWrap minHeight="33px">
              {mock.topics.map((mock, i) => {
                return <Tag key={`Tag article featured ${i}`}>{mock.name}</Tag>
              })}
            </TagWrap>
            <Title featured>{mock.meta.title}</Title>
            <Meta featured>
              <Svg
                src="components/blog/icons/blog-reading-time-white"
                alt="reading time icon"
                width="20px"
              />
              <ReadingTime featured>{result} min read</ReadingTime>
            </Meta>
            <AuthorWrap>
              <AuthorAvatar
                big
                src={mock.author.avatar}
                alt={`Springly author ${mock.author.name}`}
              ></AuthorAvatar>
              <AuthorName>{mock.author.full_name}</AuthorName>
            </AuthorWrap>
          </FrontMatterBlock>
        </FrontMatter>
      </StyledLink>
    </Wrapper>
  )
}

export default CardArticleFeatured
