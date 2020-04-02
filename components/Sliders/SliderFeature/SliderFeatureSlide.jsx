import React from "react"
import styled from "styled-components"
import { ButtonText, SmallTitle, Text, Svg, UI } from "../../"
// TODO Violaine : pourquoi pas nos flex et box ?
import { Flex, Box } from "@rebass/grid"
import { checkSize } from "../../../utils/validators"
import Space from "../../Space"

/**
 * Style
 */
const SliderFeatureSlideStyled = styled.div`
  @media screen and (max-width: ${UI.breakpoints.mobile}) {
    padding: 1rem;
    padding-bottom: 3rem;
  }
`
const SliderFeatureSlideCard = styled(props => <Flex {...props} />)`
  align-items: center;

  @media screen and (max-width: ${UI.breakpoints.mobile}) {
    box-shadow: ${UI.shadows.slider};
    border-radius: 1.176rem 1.176rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 1.765rem;
    position: relative;

    & .title--small {
      text-align: center;
    }
  }
`
const SliderFeatureSlideButton = styled(props => <ButtonText {...props} />)`
  margin-top: 1.3rem;
`

const SliderFeatureSlideIco = styled(props => <Svg {...props} />)`
  svg {
    max-width: 125px;
  }
`

/**
 * Component
 */
const SliderFeatureSlide = ({ title, image, buttonText, href, text }) => {
  const { error, response } = checkSize(text, 450)
  return (
    <SliderFeatureSlideStyled>
      <SliderFeatureSlideCard>
        <Box
          width={[1, 1 / 4]}
          mx={[0, "4rem"]}
          my={[0, "2rem"]}
          mt={["1rem", 0]}
        >
          <SliderFeatureSlideIco
            src={`common/icon/multicolor/${image.link}`}
            className="icon"
            align="center"
          />
        </Box>
        <Box mr={[0, "4rem"]} my={[0, "2rem"]} mt={["1rem", 0]}>
          <Space size="medium"></Space>
          <SmallTitle color="turquoise" align="left">
            {title}
          </SmallTitle>
          <Text align="left" color="darkGrey">
            {error ? <span className="error">{response}</span> : response}
          </Text>
          {href && (
            <SliderFeatureSlideButton href={href}>
              {buttonText}
            </SliderFeatureSlideButton>
          )}
        </Box>
      </SliderFeatureSlideCard>
    </SliderFeatureSlideStyled>
  )
}

export default SliderFeatureSlide
