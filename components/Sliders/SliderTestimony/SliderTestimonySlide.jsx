import React from 'react'
import styled from 'styled-components'
import { checkSize } from '../../../utils/validators'
import { Flex, Text, Space, AdaptiveImage, Svg, UI } from '../../'

/**
 * Generation of stars
 */
const getStars = n => {
  let Stars = []
  for (let i = 0; i < 5; i++) {
    Stars.push(
      <SliderTestimonySlideStar
        src="common/icon/unicolor/star"
        color={i < n ? 'yellow' : 'lightGrey'}
        width="1.294rem"
        key={i}
      />
    )
  }
  return Stars
}
/**
 * Style
 */
const SliderTestimonySlideStar = styled(props => <Svg {...props} />)`
  margin-left: 0.765rem;
  display: inline-block;

  @media screen and (max-width: ${UI.breakpoints.mobile}) {
    width: 1rem;
    margin-left: 0.588rem;
  }
`
const SliderTestimonySlideStyled = styled.div`
  /* Mobile mode */
  @media screen and (max-width: ${UI.breakpoints.mobile}) {
    padding: 2rem 1rem 3rem;
  }
`
const SliderTestimonySlideProfilPicture = styled(props => (
  <AdaptiveImage {...props} />
))`
  width: 2.941rem;
  height: 2.941rem;
  margin-right: 1rem;

  /* Mobile mode */
  @media screen and (max-width: ${UI.breakpoints.mobile}) {
    width: 3.125rem;
    height: 3.125rem;
  }
`
const SliderTestimonySlideHeader = styled(props => <Flex {...props} />)`
  justify-content: space-between;

  /* Mobile mode */
  @media screen and (max-width: ${UI.breakpoints.mobile}) {
    flex-direction: column;
    align-items: flex-start;
  }
`
const SliderTestimonySlideLogo = styled(props => <AdaptiveImage {...props} />)`
  height: 3rem;
  margin-right: 1rem;
`
const SliderTestimonySlideCard = styled.div`
  padding: 1.647rem 2.588rem;
  @media screen and (max-width: ${UI.breakpoints.mobile}) {
    border-radius: 1.176rem;
    background-color: ${UI.colors.white};
    box-shadow: ${UI.shadows.slider};
  }
`
const SliderTestimonySlideStars = styled.div`
  /* Mobile mode */
  @media screen and (max-width: ${UI.breakpoints.mobile}) {
    margin-left: 3.5rem;

    .text--size-small {
      text-align: left;
      margin-left: 0.588rem;
    }
  }
`
const SliderTestimonySlideTextOrganisation = styled(props => (
  <Text {...props} />
))`
  flex: 1;
`
const SliderTestimonySlideFlexOrganisation = styled(props => (
  <Flex {...props} />
))`
  @media screen and (max-width: ${UI.breakpoints.mobile}) {
    align-items: flex-start;
  }
`

/**
 * Component
 */
const SliderTestimonySlide = ({
  user,
  testimony,
  organisation,
  maxLenghtTestimony = 450,
  color,
}) => {
  const { error, response } = checkSize(testimony.text, maxLenghtTestimony)
  return (
    <SliderTestimonySlideStyled>
      <SliderTestimonySlideCard>
        <SliderTestimonySlideHeader>
          <Flex justifyContent="left" custom={false}>
            <SliderTestimonySlideProfilPicture
              src={user.picture}
              maxDpi={1}
              roundShape
            />
            <Text color={color || 'extraDarkGrey'} align="left">
              <b>{user.name}</b>
              <br />
              {user.position}
            </Text>
          </Flex>
          <SliderTestimonySlideStars>
            {getStars(testimony.note)}
            <br />
            <Text size="small" align="right" color={color}>
              {testimony.origin}
            </Text>
          </SliderTestimonySlideStars>
        </SliderTestimonySlideHeader>
        <Space size="big" />
        <Text align="left" color={color}>
          {error ? <span className="error">{response}</span> : response}
        </Text>
        <Space size="big" />
        <SliderTestimonySlideFlexOrganisation alignItems="center">
          <SliderTestimonySlideLogo
            src={organisation.logo}
            alt={organisation.name}
            maxDpi={1}
          />
          <SliderTestimonySlideTextOrganisation
            color={color || 'extraDarkGrey'}
            align="left"
            size="small"
          >
            <b>{organisation.name}</b>
            <span className="hidden-mobile">
              <br />
              {organisation.resume}
            </span>
          </SliderTestimonySlideTextOrganisation>
        </SliderTestimonySlideFlexOrganisation>
        <Text
          color="extraDarkGrey"
          align="left"
          size="small"
          className="hidden-desktop"
        >
          {organisation.resume}
        </Text>
      </SliderTestimonySlideCard>
    </SliderTestimonySlideStyled>
  )
}

export default SliderTestimonySlide
