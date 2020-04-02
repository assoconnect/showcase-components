import React, { Component } from 'react'
import styled from 'styled-components'
import classNames from 'classnames/bind'

/**
 * Style
 */
const VideoPadding = styled.div`
  padding: 0;
  margin-top: 20px;
  position: relative;
`
const VideoWrapper = styled.div`
  height: 100%;
  width: 100%;
`
const VideoStyled = styled.div`
  .wistia-click-to-play {
    display: inline-block;
    height: 100%;
    position: relative;
    width: 100%;
  }
`

/**
 * Component
 */
class Video extends Component {
  componentDidMount() {
    if (!window.Wistia) {
      const wistiaScript = document.createElement('script')
      wistiaScript.src = 'https://fast.wistia.com/assets/external/E-v1.js'
      wistiaScript.async = true
      document.body.appendChild(wistiaScript)
    }
  }

  render() {
    const { videoId = '', autoplay, wistiaParameters = [] } = this.props
    return (
      <VideoPadding className="wistia_responsive_padding">
        <VideoWrapper className="wistia_responsive_wrapper">
          <VideoStyled
            className={classNames(
              'wistia_embed',
              `wistia_async_${videoId}`,
              'videoFoam=true',
              `autoPlay=${autoplay}`,
              ...wistiaParameters
            )}
          >
            &nbsp;
          </VideoStyled>
        </VideoWrapper>
      </VideoPadding>
    )
  }
}

export default Video
