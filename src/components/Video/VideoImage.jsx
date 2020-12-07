import { Svg, UI } from '..'
import { css, keyframes } from 'styled-components'

import AdaptiveImage from '../AdaptiveImage'
import React from 'react'
import styled from 'styled-components'

/**
 * Style
 */

const animationVideoButton = keyframes`
  0% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
  50% {
    -webkit-transform: scale3d(1.05, 1.05, 1.05);
    transform: scale3d(1.05, 1.05, 1.05);
  }
  100% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
`

const VideoImageWrapper = styled.div`
  position: relative;
  cursor: pointer;
  &:hover .playButton {
    background-color: ${UI.colors.darkTurquoise};
  }
`

const PlayButtonWrapper = styled.div`
  position: absolute;
  top: calc(50% - 48px);
  left: calc(50% - 48px);
`

const animationCall = css`
  animation: ${animationVideoButton} 2.3s ease-in-out infinite;
`

const Button = styled.div`
  border-radius: 50%;
  background-color: ${UI.colors.turquoise};
  transition: 500ms ease;
  ${({ animationVideoButton }) => animationVideoButton && animationCall}
`

/**
 * Component
 */
const VideoImage = ({ image, onClick }) => (
  <VideoImageWrapper onClick={onClick}>
    <AdaptiveImage src={image.src} alt={image.alt} />
    <PlayButtonWrapper>
      <Button
        animationVideoButton={animationVideoButton}
        className="playButton"
      >
        <Svg
          src="components/video-button/simple-play"
          width="96px"
          color="white"
        />
      </Button>
    </PlayButtonWrapper>
  </VideoImageWrapper>
)

VideoImage.displayName = 'VideoImage'
export default VideoImage
