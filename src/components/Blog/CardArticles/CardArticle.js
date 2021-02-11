import React from 'react'
import {
  Wrapper,
  FrontMatter,
  StyledLink,
  FrontMatterBlock,
  Title,
  Meta,
  Thumbnail,
  ReadingTime,
  CardArticleFooter,
} from './styled'
import {
  AuthorWrap,
  AuthorAvatar,
  AuthorName,
  TagWrap,
  Tag,
} from '../Reusables/styled'
import { Svg } from '../..'

const CardArticle = ({ width, mock }) => {
  const thumb = mock.feature_image.url
  const cover = thumb.replace(
    'Article%20thumbnails/',
    'Cover%20photos%20articles/'
  )
  let textLength = mock.body.length
  let result
  if (textLength > 0) {
    result = Math.ceil(textLength / 3700)
  }

  return (
    <Wrapper width={width}>
      <StyledLink href={`/${mock.slug}`}>
        <Thumbnail image={thumb} />
        <FrontMatterBlock>
          <TagWrap>
            {mock.topics.map((mock, i) => {
              return <Tag key={i}>{mock.name}</Tag>
            })}
          </TagWrap>
          <Title>{mock.meta.title}</Title>
          <CardArticleFooter>
            <Meta>
              <Svg
                src="components/blog/icons/blog-reading-time-white.svg"
                custom={false}
                alt="reading time icon"
              />
              <ReadingTime>{result} min read</ReadingTime>
            </Meta>
            <AuthorWrap flip>
              <AuthorAvatar
                src={mock.author.avatar}
                alt={`Springly author ${mock.author.name}`}
              ></AuthorAvatar>
              <AuthorName color={'#838383'}>{mock.author.full_name}</AuthorName>
            </AuthorWrap>
          </CardArticleFooter>
        </FrontMatterBlock>
      </StyledLink>
    </Wrapper>
  )
}

export default CardArticle
