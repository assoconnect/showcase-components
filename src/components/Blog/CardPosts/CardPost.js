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
import { LazyLoadComponent } from 'react-lazy-load-image-component'

const CardPost = ({
  width,
  post: {
    slug,
    feature_image: { url: imageUrl },
    body,
    meta: { title },
    topics,
    author,
  },
  obfuscated,
}) => {
  const link = `/en-us/blog/${slug}/`
  let result = 0
  if (body.length > 0) {
    result = Math.ceil(body.length / 3700)
  }
  return (
    <Wrapper width={width}>
      <LazyLoadComponent delayTime={1500}>
        <StyledLink href={obfuscated ? btoa(link) : link}>
          <Thumbnail image={imageUrl} />
          <FrontMatterBlock>
            <TagWrap>
              {topics.map(({ name }, i) => (
                <Tag key={i}>{name}</Tag>
              ))}
            </TagWrap>
            <Title>{title}</Title>
            <CardPostFooter>
              <Meta>
                <Svg
                  src="components/blog/icons/blog-reading-time-dark"
                  alt="Reading time icon"
                  width="20px"
                  style={{ marginRight: '7px', verticalAlign: 'middle' }}
                />
                <ReadingTime>{result} min read</ReadingTime>
              </Meta>
              <AuthorWrap flip>
                <AuthorAvatar src={author.avatar}></AuthorAvatar>
                <AuthorName color="#838383">{author.full_name}</AuthorName>
              </AuthorWrap>
            </CardPostFooter>
          </FrontMatterBlock>
        </StyledLink>
      </LazyLoadComponent>
    </Wrapper>
  )
}

export default CardPost
