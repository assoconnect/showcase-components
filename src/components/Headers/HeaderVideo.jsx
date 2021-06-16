import {
  BigTitle,
  Box,
  ButtonLink,
  Header,
  InputButton,
  Space,
  Subtitle,
  UI,
  Video,
  VideoImage,
} from '../'

import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'
import { KillerArgument } from './Header'
import { globalHistory as history } from '@reach/router'

/**
 * Style
 */
const HeaderSpace = styled(props => <Space {...props} />)`
  @media screen and (max-width: ${UI.breakpoints.mobile}) {
    padding-top: 1.25rem;
  }
`

/**
 * Component
 */
const HeaderVideo = ({
  title,
  subTitle,
  killerArgument = null,
  image,
  wave,
  videoId,
  button = {
    href: '/creation-plateforme/',
    children: 'Je commence un essai',
    target: null,
  },
  field,
  classNameForm,
  translations,
}) => {
  const [wistiaPopoverVisible, setWistiaPopoverVisible] = useState(false)
  const target = {}
  if (button?.target) {
    target.target = button?.target
  }

  const { location } = history
  const headerAutoplay = new URLSearchParams(location.search).get(
    'headerAutoplay'
  )

  /**
   * Auto play the video if a headerAutoplay variable exist in the url
   */
  useEffect(() => {
    if (headerAutoplay) {
      setWistiaPopoverVisible(true)
    }
  }, [headerAutoplay])

  /**,
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
          imagesrcset={`${process.env.GATSBY_CDN_HOST}/${image.src}-mobile-2x.webp x2`}
          media="(max-width: 500px)"
        />
        <link
          rel="preload"
          as="image"
          href={`${process.env.GATSBY_CDN_HOST}/${image.src}.webp`}
          imagesrcset={`${process.env.GATSBY_CDN_HOST}/${image.src}-2x.webp x2`}
          media="(min-width: 500px)"
        />
      </Helmet>
      <Header image={wave} translations={translations}>
        <Box align="left" width={1 / 2}>
          <Space size="big" className="hidden-desktop" />
          <BigTitle align="left" tag="h1">
            {title}
          </BigTitle>
          <HeaderSpace size="medium" />
          <Subtitle align="left" color="white" tag="div">
            {subTitle}
          </Subtitle>
          <HeaderSpace size="medium" />
          {field ? (
            <InputButton
              className={classNameForm}
              translations={translations}
            />
          ) : (
            <ButtonLink href={button.href} button={{ size: 'big' }} {...target}>
              {button.children}
            </ButtonLink>
          )}
          {killerArgument && <KillerArgument>{killerArgument}</KillerArgument>}
          <HeaderSpace size="medium" className="hidden-desktop" />
        </Box>
        <Box width={1 / 2}>
          <VideoImage
            image={image}
            onClick={handleVideoButtonWrapperClick}
            videoId={videoId}
            visibleByDefault
          />
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

export default HeaderVideo
