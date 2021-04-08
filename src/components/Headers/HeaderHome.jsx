import {
  BigTitle,
  Box,
  Header,
  Subtitle,
  InputButton,
  Space,
  Svg,
  Text,
  Video,
} from '../'
import React, { useState } from 'react'
import VideoImage from '../Video/VideoImage'
import { formatMessage } from '../../utils/translations'
import { Helmet } from 'react-helmet'

/**
 * Component
 */
const HeaderHome = ({
  image,
  buttonHref,
  killerArgument = null,
  subTitle = '',
  title = '',
  videoId,
  translations,
  hubspotId,
}) => {
  const [wistiaPopoverVisible, setWistiaPopoverVisible] = useState(false)

  /**
   * Handle click events on VideoButtonWrapper component.
   */
  const handleVideoButtonWrapperClick = () => {
    // necessary to force rerendering of the <Video> component, Wistia "popoverhide" event being unreliable in the context of React
    setWistiaPopoverVisible(false)
    setTimeout(() => {
      setWistiaPopoverVisible(true)
    }, 100)
  }
  return (
    <>
      <Helmet>
        <link
          rel="preload"
          as="image"
          href={`${process.env.GATSBY_CDN_HOST}/${image.src}-mobile.webp`}
          imagesrcset={`${process.env.GATSBY_CDN_HOST}/${image.src}-mobile-2x.webp x2, ${process.env.GATSBY_CDN_HOST}/${image.src}-mobile-4x.webp 4x`}
          media="(max-width: 500px)"
        />
        <link
          rel="preload"
          as="image"
          href={`${process.env.GATSBY_CDN_HOST}/${image.src}-mobile.png`}
          imagesrcset={`${process.env.GATSBY_CDN_HOST}/${image.src}-mobile-2x.png x2, ${process.env.GATSBY_CDN_HOST}/${image.src}-mobile-4x.png 4x`}
          media="(max-width: 500px)"
        />
        <link
          rel="preload"
          as="image"
          href={`${process.env.GATSBY_CDN_HOST}/${image.src}.webp`}
          imagesrcset={`${process.env.GATSBY_CDN_HOST}/${image.src}-2x.webp x2, ${process.env.GATSBY_CDN_HOST}/${image.src}-4x.webp 4x`}
        />
        <link
          rel="preload"
          as="image"
          href={`${process.env.GATSBY_CDN_HOST}/${image.src}.png`}
          imagesrcset={`${process.env.GATSBY_CDN_HOST}/${image.src}-2x.png x2, ${process.env.GATSBY_CDN_HOST}/${image.src}-4x.png 4x`}
        />
      </Helmet>
      <Header
        image="components/headers/header-home/wave-blue.svg"
        translations={translations}
      >
        <Box mt={['-1.6rem', '-4.375rem']} align="left" width={0.46}>
          <Svg
            src={`common/logo/${formatMessage('site_name', translations)}`}
            width="125px"
            color="white"
            className="hidden-desktop"
            visibleByDefault
          />
          <Subtitle align="left" color="white" tag="div">
            {subTitle}
          </Subtitle>
          <Space size="small" />
          <BigTitle align="left" tag="h1">
            {title}
          </BigTitle>
          <Space size="medium" />
          <InputButton
            translations={translations}
            href={buttonHref}
            hubspotId={hubspotId}
          />
          {killerArgument && (
            <>
              <Space size="small" />
              <Text color="white">{killerArgument}</Text>
            </>
          )}
        </Box>
        <Box width={0.54}>
          <VideoImage
            image={image}
            onClick={handleVideoButtonWrapperClick}
            videoId={videoId}
          />
        </Box>
      </Header>
      {videoId && wistiaPopoverVisible && (
        <Video
          videoId={videoId}
          wistiaParameters={[
            'popover=true',
            'popoverShowOnLoad=true',
            'popoverAnimateThumbnail=true',
          ]}
        />
      )}
    </>
  )
}

export default HeaderHome
