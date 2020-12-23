import {
  BigTitle,
  Box,
  Header,
  InputButton,
  Space,
  Subtitle,
  Svg,
  Video,
} from '../../'
import React, { useState } from 'react'
import VideoImage from '../../Video/VideoImage'
import { formatMessage } from '../../../utils/translations'

/**
 * Component
 */
const HeaderHome = ({
  image,
  buttonHref,
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
      <Header
        image="components/headers/header-home/wave-blue.svg"
        translations={translations}
      >
        <Box mt={['-2rem', '-4.375rem']} align="left" width={0.46}>
          <Svg
            src={`common/logo/${formatMessage('site_name', translations)}`}
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
          <InputButton
            translations={translations}
            href={buttonHref}
            hubspotId={hubspotId}
          />
        </Box>
        <Box width={0.54}>
          <VideoImage image={image} onClick={handleVideoButtonWrapperClick} />
        </Box>
      </Header>
      {wistiaPopoverVisible && (
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
