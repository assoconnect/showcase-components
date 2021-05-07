import React from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'

/**
 * Component style
 */
const HeaderStyled = styled.div`
  min-height: calc(93vh - 100px);
  background-size: cover;
  background-position: center;
  margin-bottom: 0;
  background-image: url('${process.env.GATSBY_CDN_HOST}/${({ src }) => src}');
`
/**
 * Component
 */
const HeaderPicture = ({ src }) => (
  <>
    <Helmet>
      <link
        rel="preload"
        as="image"
        href={`${process.env.GATSBY_CDN_HOST}/${src}`}
      />
    </Helmet>
    <HeaderStyled src={src} />
  </>
)

export default HeaderPicture
