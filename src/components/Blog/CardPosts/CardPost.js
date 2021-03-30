import React from 'react'
import {
  Wrapper,
  StyledLink,
  FrontMatterBlock,
  Title,
  Meta,
  Thumbnail,
  ReadingTime,
  CardPostFooter,
} from './styled'
import { Svg, AuthorWrap, AuthorAvatar, AuthorName, TagWrap, Tag } from '../..'
import btoa from 'btoa'

const CardPost = ({ width, mock, obfuscated }) => {
  const link = `/en-us/blog/${mock.slug}/`
  const thumb = mock.feature_image.url
  let textLength = mock.body.length
  let result
  if (textLength > 0) {
    result = Math.ceil(textLength / 3700)
  }
  return (
    <Wrapper width={width}>
      <StyledLink href={obfuscated ? btoa(link) : link}>
        <Thumbnail image={thumb} />
        <FrontMatterBlock>
          <TagWrap>
            {mock.topics.map((mock, i) => {
              return <Tag key={i}>{mock.name}</Tag>
            })}
          </TagWrap>
          <Title>{mock.meta.title}</Title>
          <CardPostFooter>
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
          </CardPostFooter>
        </FrontMatterBlock>
      </StyledLink>
    </Wrapper>
  )
}

export default CardPost
