import React, { Component } from 'react'
import styled, { keyframes, css } from 'styled-components'
import { UI, Svg, Video } from '..'
import { formatMessage } from '../../utils/translations'

/**
 * Style
 */
const animationVideoButton = keyframes`
  10% {
    transform: scale(1.2,0.8);
  }
  24%, 26% {
    transform: translateY(-10vh) scale(1, 1.2);
  }
  40% {
    transform: translateY(0) scale(1, 1);
  }
  44% {
    transform: translateY(0) scale(1.05,0.95);
  }
  56% {
    transform: translateY(-3vh) scale(1,1);
  }
  70% {
    transform: translateY(0) scale(1,1);
  }
`
const VideoButtonWrapper = styled.div`
  position: fixed;
  top: 100vh;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`
const animationCall = css`
  animation: ${animationVideoButton} 2.3s ease-in-out infinite;
`
const Button = styled.div`
  font-family: ${UI.fonts.family.roboto};
  font-weight: ${UI.fonts.weight.normal};
  font-size: 0.85rem;
  color: ${UI.colors.white};
  text-align: center;
  height: 8.235rem;
  width: 8.235rem;
  padding: 0.95rem 1.176rem;
  border-radius: 50%;
  background-color: ${UI.colors.turquoise};
  cursor: pointer;
  ${({ animationVideoButton }) => animationVideoButton && animationCall}
`
const ButtonIcon = styled(props => <Svg {...props} />)`
  margin-bottom: 0.3rem;
`

/**
 * Component
 */
class VideoButton extends Component {
  state = { wistiaPopoverVisible: false }

  /**
   * Handle click events on VideoButtonWrapper component.
   */
  handleVideoButtonWrapperClick = () => {
    // necessary to force rerendering of the <Video> component, Wistia "popoverhide" event being unreliable in the context of React
    this.setState({ wistiaPopoverVisible: false })
    setTimeout(() => {
      this.setState({ wistiaPopoverVisible: true })
    }, 100)
  }

  render() {
    const { videoId, animationVideoButton = true, translations } = this.props
    return (
      <VideoButtonWrapper onClick={this.handleVideoButtonWrapperClick}>
        <Button animationVideoButton={animationVideoButton}>
          <ButtonIcon
            src="components/video-button/player"
            width="20px"
            color="white"
          />
          {formatMessage('videobutton_text', translations)}
        </Button>
        {this.state.wistiaPopoverVisible && (
          <Video
            videoId={videoId}
            wistiaParameters={[
              'popover=true',
              'popoverShowOnLoad=true',
              'popoverAnimateThumbnail=true',
            ]}
          />
        )}
      </VideoButtonWrapper>
    )
  }
}

export default VideoButton
