import React from 'react'
import { UI, CardPost } from '../..'
import styled from 'styled-components'

const Section = styled.section`
  background-color: rgba(232, 232, 232, 0.4);
  padding: 50px 20px 85px 20px;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 100px;
  justify-content: space-between !important;
  flex-wrap: nowrap;
  margin: 30px auto;
  max-width: 1140px;
  @media screen and (max-width: ${UI.breakpoints.mobile}) {
    margin: 30px 5%;
  }
  @media screen and (max-width: ${UI.breakpoints.smallMobile}) {
    flex-direction: column;
    margin: auto;
  }
`
const BlogPageTitleLast = styled.div`
  font-family: ${UI.fonts.family.roboto};
  margin-bottom: 30px;
  color: #4a4a4a;
  font-size: 36px;
  font-weight: 900;
  line-height: 48px;
  text-align: center;
`

const CardPostRecommended = ({ recommendedPosts, recommendedSlugs }) => {
  // Sort recommendedPosts
  recommendedPosts.sort(
    (a, b) =>
      recommendedSlugs.indexOf(a.node.slug) -
      recommendedSlugs.indexOf(b.node.slug)
  )
  return (
    <Section>
      <BlogPageTitleLast>Recommended articles</BlogPageTitleLast>
      <Wrapper>
        {recommendedPosts.map((post, i) => (
          <CardPost key={i} width={1 / 3} mock={post.node}></CardPost>
        ))}
      </Wrapper>
    </Section>
  )
}

export default CardPostRecommended
