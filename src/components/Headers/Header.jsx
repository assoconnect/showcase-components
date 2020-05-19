import React from 'react'
import styled from 'styled-components'
import { Flex, UI } from '../'
import classNames from 'classnames/bind'
import VideoButton from '../Video/VideoButton'

/**
 * Style
 */
const HeaderStyled = styled(props => <Flex custom={false} {...props} />)`
  min-height: calc(100vh - 100px);
  margin-bottom: 10vw;
  position: relative;
  text-align: left;
  /* -1 px to hide the visible white line when zooming */
  background-position: top -1px center;
  background-size: auto calc(100% - 10px);
  background-repeat: no-repeat;

  /* Mobile mode */
  @media screen and (max-width: ${UI.breakpoints.mobile}) {
    background-size: auto 70%;
    background-position: top left;
  }

  @media screen and (max-width: ${UI.breakpoints.smallMobile}) {
    background-size: auto 70%;
    background-position: top left 19%;
  }
`
const HeaderContent = styled(props => <Flex {...props} />)`
  min-height: calc(100vh - 100px);
`

/**
 * Component
 */
const Header = ({
  className,
  children,
  style,
  image,
  videoId,
  animationVideoButton = true,
  translations,
}) => (
  <HeaderStyled
    style={{
      ...style,
      backgroundImage: `url('${process.env.GATSBY_CDN_HOST}/${image}')`,
    }}
    className={classNames(className, 'header')}
  >
    <HeaderContent alignItems="center">{children}</HeaderContent>
    {videoId && (
      <VideoButton
        animationVideoButton={animationVideoButton}
        videoId={videoId}
        translations={translations}
      />
    )}
  </HeaderStyled>
)

export default Header
