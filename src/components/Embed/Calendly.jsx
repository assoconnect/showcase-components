import React from 'react'
import { InlineWidget } from 'react-calendly'
import styled from 'styled-components'

const InlineWidgetWrapper = styled.div`
  .calendly-spinner {
    display: none; /* Remove sprinner, otherwise the waves in absolute are broken */
  }
`

const Calendly = ({
  url = 'https://calendly.com/assoconnect/demo-assoconnect',
  height = '660px',
  ...rest
}) => (
  <InlineWidgetWrapper>
    <InlineWidget url={url} styles={{ height }} {...rest} />
  </InlineWidgetWrapper>
)

export default Calendly
