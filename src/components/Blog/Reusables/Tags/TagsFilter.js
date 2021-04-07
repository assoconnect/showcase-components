import React, { useState } from 'react'
import styled from 'styled-components'
import { UI, Text, Tag, Flex, Link } from '../../..'
import { Box } from '@rebass/grid'
import { formatMessage } from '../../../../utils/translations'

const TagWrapper = styled(props => <Flex {...props} />)`
  margin-top: 10px;
  background-color: #fff;
  border-radius: 32.75px;
  box-shadow: 0 1px 6px 0 rgb(222 222 222);
  padding: 20px 20px 10px;
  @media screen and (max-width: ${UI.breakpoints.mobile}) {
    flex-direction: column;
  }
`

const TagLink = styled(props => <Link {...props} />)`
  text-decoration: none;
  @media screen and (max-width: ${UI.breakpoints.mobile}) {
    display: block;
  }
`

const TagStyled = styled(props => <Tag {...props} />)`
  font-size: 16px;
  padding: 10px 15px;
  &:hover {
    background: #00b094;
  }
  @media screen and (max-width: ${UI.breakpoints.mobile}) {
    display: block;
    text-align: center;
  }
`

const TextStyled = styled(props => <Text {...props} />)`
  margin-bottom: 10px;
  font-size: 18px !important;
  color: #4a4a4a;
  font-weight: bold !important;
  margin-right: 20px;
`

const TextBox = styled(props => <Box {...props} />)`
  @media screen and (max-width: ${UI.breakpoints.mobile}) {
    margin: auto;
    cursor: pointer;
  }
`

const TagBox = styled(({ isVisible, ...rest }) => <Box {...rest} />)`
  @media screen and (max-width: ${UI.breakpoints.mobile}) {
    ${({ isVisible }) => !isVisible && 'display: none;'}
  }
`

const TagsFilter = ({ topics, translations }) => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <TagWrapper
      custom={false}
      alignItems="center"
      justifyContent="space-between"
    >
      <TextBox
        width="auto"
        onClick={() => {
          setIsVisible(!isVisible)
        }}
      >
        <TextStyled>
          {formatMessage('tagsfilter_text', translations)}
        </TextStyled>
      </TextBox>
      <TagBox width="auto" isVisible={isVisible}>
        <TagLink href="/en-us/blog/">
          <TagStyled>{formatMessage('tagsfilter_all', translations)}</TagStyled>
        </TagLink>
        {Object.entries(topics).map(([slug, name], i) => (
          <TagLink key={i} href={`/en-us/blog/tag/${slug}/`}>
            <TagStyled>{name}</TagStyled>
          </TagLink>
        ))}
      </TagBox>
    </TagWrapper>
  )
}

export default TagsFilter
