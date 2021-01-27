import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import { AdaptiveImage, UI, Svg, Video } from '..'
import { chunk } from '../../utils/array'

/**
 * Style
 */
const VideoPlaceholderWrapper = styled.div`
  margin-top: 20px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: auto;
  padding-top: 56.25%;
  background: #4174eb;
  background-size: cover;
  cursor: pointer;
`

const BackgroundImage = styled(props => <AdaptiveImage {...props} />)`
  img {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`

const PlayButton = styled(Svg)`
  svg {
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translateX(-50%);
    padding-bottom: 25px;
    width: 20%;
    height: auto;
  }
  svg:hover path {
    opacity: 0.95;
  }
  path:first-child {
    transition: 0.3s;
    opacity: 0.75;
  }
  path:nth-child(2) {
    fill: #fff;
  }
`
const TitleStyled = css`
  display: flex;
  position: absolute;
  width: 100%;
  margin: 0;
  color: #fff;
  font-family: ${UI.fonts.family.roboto};
  font-size: 1.5em;
  font-weight: 600;
  justify-content: center;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 0.8em;
  }
`
const TitleStart = styled.p`
  ${TitleStyled}
  top: 65%;
`
const TitleEnd = styled.p`
  ${TitleStyled}
  top: 75%;
`

/**
 * Component
 */
class VideoPlaceholder extends Component {
  state = { videoVisible: false }

  /**
   * Split video title in two parts, each one having an equal number of words.
   * @param {string} title - The title of the video.
   */
  getTitleParts = title => {
    if (!title) {
      return null
    }
    const titleWords = title.split(' ')
    return chunk(titleWords, Math.ceil(titleWords.length / 2))
  }

  /**
   * Handle click events on VideoPlaceholderWrapper component.
   */
  handleVideoPlaceholderWrapperClick = () => {
    this.setState({ videoVisible: true })
  }

  render() {
    const {
      videoId,
      videoTitle = '',
      autoplay = true,
      placeholderSrc = 'components/video/video-placeholder',
    } = this.props
    const { videoVisible } = this.state
    const titleParts = this.getTitleParts(videoTitle)
    return (
      <>
        {!videoVisible ? (
          <VideoPlaceholderWrapper
            onClick={this.handleVideoPlaceholderWrapperClick}
          >
            <BackgroundImage src={placeholderSrc} />
            <PlayButton src="components/video-placeholder/play-button" />
            {titleParts && <TitleStart>{titleParts[0].join(' ')}</TitleStart>}
            {titleParts && titleParts.length >= 2 && (
              <TitleEnd>{titleParts[1].join(' ')}</TitleEnd>
            )}
          </VideoPlaceholderWrapper>
        ) : (
          <Video videoId={videoId} autoplay={autoplay} />
        )}
      </>
    )
  }
}

export default VideoPlaceholder
