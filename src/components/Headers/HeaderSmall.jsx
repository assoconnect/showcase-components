import React from 'react'
import styled from 'styled-components'
import {
  BigTitle,
  Box,
  ButtonLink,
  Flex,
  AdaptiveImage,
  UI,
  Section,
  Subtitle,
  Space,
} from '../'

/**
 * Style
 */
const HeaderStyled = styled(props => <Section wave={false} {...props} />)`
  background: ${UI.colors.blue};
  padding: 3rem 0;
`
const ImageStyled = styled(props => <AdaptiveImage {...props} />)`
  img {
    object-fit: contain;
  }
  @media screen and (max-width: ${UI.breakpoints.mobile}) {
    height: 200px;
    img {
      width: auto;
    }
  }
`

/**
 * Component
 */
const HeaderSmall = ({
  className,
  yado,
  title,
  subTitle,
  button,
  videoId,
  translations,
}) => (
  <HeaderStyled
    className={`${className} header`}
    videoId={videoId}
    translations={translations}
  >
    <Flex alignItems="center">
      <Box width={yado ? 3 / 4 : 1}>
        <BigTitle align="left" tag="h1">
          {title}
        </BigTitle>
        {subTitle && (
          <Subtitle color="white" align="left" tag="div">
            {subTitle}
          </Subtitle>
        )}
        {button && (
          <>
            <Space />
            <ButtonLink theme={button.theme} href={button.href}>
              {button.text}
            </ButtonLink>
          </>
        )}
        <Space size="big" />
        <Space size="big" />
      </Box>
      {yado && (
        <Box width={1 / 4}>
          <Space className="hidden-desktop" />
          <ImageStyled
            src={yado.src}
            alt={yado.alt}
            width={yado.width}
            height={yado.height}
            maxDpi={1}
            height="20.5rem"
            visibleByDefault
          />
          <Space size="big" className="hidden-mobile" />
        </Box>
      )}
    </Flex>
  </HeaderStyled>
)

export default HeaderSmall
