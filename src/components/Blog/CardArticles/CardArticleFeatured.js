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
import {
  AuthorWrap,
  AuthorAvatar,
  AuthorName,
  TagWrap,
  Tag,
} from '../Reusables/styled'
import { Svg } from '../..'

const CardArticleFeatured = ({ mock }) => {
  let textLength = mock.body.length
  let result
  if (textLength > 0) {
    result = Math.ceil(textLength / 3700)
  }
  return (
    <Wrapper image={mock.feature_image.url} featured>
      <StyledLink href={`/${mock.slug}`}>
        <FrontMatter>
          <FrontMatterBlock featured>
            <TagWrap>
              {mock.topics.map((mock, i) => {
                return <Tag key={i}>{mock.name}</Tag>
              })}
            </TagWrap>
            <Title featured>{mock.meta.title}</Title>
            <Meta featured>
              <Svg
                src="components/blog/icons/blog-reading-time-white.svg"
                custom={false}
                alt="reading time icon"
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
