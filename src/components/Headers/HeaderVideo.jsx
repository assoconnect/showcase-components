import {
  BigTitle,
  Box,
  ButtonLink,
  Header,
  InputButton,
  Space,
  Subtitle,
  Text,
  UI,
  Video,
  VideoImage,
} from '../'

import React, { useState } from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'

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
  },
  field,
  classNameForm,
  translations,
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
        />
        <link
          rel="preload"
          as="image"
          href={`${process.env.GATSBY_CDN_HOST}/${image.src}-mobile-2x.webp`}
        />
        <link
          rel="preload"
          as="image"
          href={`${process.env.GATSBY_CDN_HOST}/${image.src}-mobile-4x.webp`}
        />
        <link
          rel="preload"
          as="image"
          href={`${process.env.GATSBY_CDN_HOST}/${image.src}.webp`}
        />
        <link
          rel="preload"
          as="image"
          href={`${process.env.GATSBY_CDN_HOST}/${image.src}-2x.webp`}
        />
        <link
          rel="preload"
          as="image"
          href={`${process.env.GATSBY_CDN_HOST}/${image.src}-4x.webp`}
        />
        <link
          rel="preload"
          as="image"
          href={`${process.env.GATSBY_CDN_HOST}/${image.src}-mobile.png`}
        />
        <link
          rel="preload"
          as="image"
          href={`${process.env.GATSBY_CDN_HOST}/${image.src}-mobile-2x.png`}
        />
        <link
          rel="preload"
          as="image"
          href={`${process.env.GATSBY_CDN_HOST}/${image.src}-mobile-4x.png`}
        />
        <link
          rel="preload"
          as="image"
          href={`${process.env.GATSBY_CDN_HOST}/${image.src}.png`}
        />
        <link
          rel="preload"
          as="image"
          href={`${process.env.GATSBY_CDN_HOST}/${image.src}-2x.png`}
        />
        <link
          rel="preload"
          as="image"
          href={`${process.env.GATSBY_CDN_HOST}/${image.src}-4x.png`}
        />
      </Helmet>{' '}
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
            <>
              <InputButton
                className={classNameForm}
                translations={translations}
              />
              {killerArgument && (
                <>
                  <Space size="small" />
                  <Text color="white">{killerArgument}</Text>
                </>
              )}
            </>
          ) : (
            <ButtonLink href={button.href} button={{ size: 'big' }}>
              {button.children}
            </ButtonLink>
          )}

          <HeaderSpace size="medium" className="hidden-desktop" />
        </Box>
        <Box width={1 / 2}>
          <VideoImage
            image={image}
            onClick={handleVideoButtonWrapperClick}
            videoId={videoId}
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
