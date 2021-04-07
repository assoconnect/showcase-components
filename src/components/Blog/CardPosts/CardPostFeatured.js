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

const CardPostFeatured = ({
  post: {
    slug,
    feature_image: { url: imageUrl },
    body,
    meta: { title },
    topics,
    author,
  },
}) => {
  let result = 0
  if (body.length > 0) {
    result = Math.ceil(body.length / 3700)
  }
  return (
    <Wrapper image={imageUrl} featured>
      <StyledLink href={`/en-us/blog/${slug}/`}>
        <FrontMatter>
          <FrontMatterBlock featured>
            <TagWrap minHeight="33px">
              {topics.map(({ name }, i) => (
                <Tag key={i}>{name}</Tag>
              ))}
            </TagWrap>
            <Title featured>{title}</Title>
            <Meta featured>
              <Svg
                src="components/blog/icons/blog-reading-time-white"
                alt="Reading time icon"
                width="20px"
              />
              <ReadingTime featured>{result} min read</ReadingTime>
            </Meta>
            <AuthorWrap>
              <AuthorAvatar big src={author.avatar}></AuthorAvatar>
              <AuthorName>{author.full_name}</AuthorName>
            </AuthorWrap>
          </FrontMatterBlock>
        </FrontMatter>
      </StyledLink>
    </Wrapper>
  )
}

export default CardPostFeatured
