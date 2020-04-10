import React from 'react'
import {
  Header,
  Box,
  Space,
  Subtitle,
  BigTitle,
  Svg,
  InputButton,
  HeaderHomeAnimation,
} from '../../'

/**
 * Component
 */
const HeaderHome = ({
  buttonHref,
  cards = [],
  subTitle = '',
  title = '',
  videoId,
  translations,
}) => (
  <Header
    image="components/headers/header-home/wave-blue.svg"
    videoId={videoId}
    translations={translations}
  >
    <Box mt={['-2rem', '-4.375rem']} align="left" width={1 / 2}>
      <Svg
        src="common/logo/assoconnect"
        width="125px"
        color="white"
        className="hidden-desktop"
        visibleByDefault
      />
      <Subtitle align="left" color="white">
        {subTitle}
      </Subtitle>
      <Space size="small" />
      <BigTitle align="left" tag="h1">
        {title}
      </BigTitle>
      <Space size="medium" />
      <InputButton translations={translations} href={buttonHref} />
    </Box>
    <Box width={1 / 2} overflowRight>
      <HeaderHomeAnimation cards={cards} yado={{ image: 'yado', alt: '' }} />
    </Box>
  </Header>
)

export default HeaderHome
