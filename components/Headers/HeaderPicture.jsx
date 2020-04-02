import React from 'react'
import styled from 'styled-components'

/**
 * Component style
 */
const HeaderStyled = styled.div`
  min-height: calc(93vh - 100px);
  background-size: cover;
  background-position: center;
  margin-bottom: 0;
  background-image: url('${process.env.GATSBY_CDN_HOST}/${({ image }) =>
  image}')
`
/**
 * Component
 */
const HeaderPicture = ({ src }) => <HeaderStyled image={src} />

export default HeaderPicture
