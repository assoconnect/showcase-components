import React from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import {
  AdaptiveImage,
  UI,
  Header,
  Box,
  Space,
  BigTitle,
  Subtitle,
  InputButton,
  ButtonLink,
  Text,
} from '../'

/**
 * Style
 */
const HeaderSpace = styled(props => <Space {...props} />)`
  @media screen and (max-width: ${UI.breakpoints.mobile}) {
    padding-top: 1.25rem;
  }
`
const SpanStyled = styled.div`
  display: inline-block;
  position: relative;
  width: 100%;
`
const Yado = styled(props => <AdaptiveImage {...props} />)`
  position: absolute;
  bottom: 0;
  right: 2rem;
  height: 20.5rem;
  @media screen and (max-width: ${UI.breakpoints.mobile}) {
    position: absolute;
    bottom: -1rem;
    height: 12rem;
    right: -1rem;
  }
`

/**
 * Component
 */
const HeaderBig = ({
  title,
  subTitle,
  killerArgument = null,
  image,
  wave,
  yado,
  videoId,
  button = {
    href: '/creation-plateforme/',
    children: 'Je commence un essai',
  },
  field,
  classNameForm,
  translations,
}) => (
  <>
    <Helmet>
      <link
        rel="preload"
        as="image"
        href={`${process.env.GATSBY_CDN_HOST}/${src}-mobile.webp`}
      />
      <link
        rel="preload"
        as="image"
        href={`${process.env.GATSBY_CDN_HOST}/${src}-mobile-2x.webp`}
      />
      <link
        rel="preload"
        as="image"
        href={`${process.env.GATSBY_CDN_HOST}/${src}-mobile-4x.webp`}
      />
      <link
        rel="preload"
        as="image"
        href={`${process.env.GATSBY_CDN_HOST}/${src}.webp`}
      />
      <link
        rel="preload"
        as="image"
        href={`${process.env.GATSBY_CDN_HOST}/${src}-2x.webp`}
      />
      <link
        rel="preload"
        as="image"
        href={`${process.env.GATSBY_CDN_HOST}/${src}-4x.webp`}
      />
      <link
        rel="preload"
        as="image"
        href={`${process.env.GATSBY_CDN_HOST}/${src}-mobile.png`}
      />
      <link
        rel="preload"
        as="image"
        href={`${process.env.GATSBY_CDN_HOST}/${src}-mobile-2x.png`}
      />
      <link
        rel="preload"
        as="image"
        href={`${process.env.GATSBY_CDN_HOST}/${src}-mobile-4x.png`}
      />
      <link
        rel="preload"
        as="image"
        href={`${process.env.GATSBY_CDN_HOST}/${src}.png`}
      />
      <link
        rel="preload"
        as="image"
        href={`${process.env.GATSBY_CDN_HOST}/${src}-2x.png`}
      />
      <link
        rel="preload"
        as="image"
        href={`${process.env.GATSBY_CDN_HOST}/${src}-4x.png`}
      />
    </Helmet>
    <Header image={wave} videoId={videoId} translations={translations}>
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
      <Box width={1 / 2} overflowRight>
        {yado ? (
          <SpanStyled>
            <AdaptiveImage src={image.src} alt={image.alt} />
            <Yado
              src={`common/yado/${yado.image}`}
              alt={yado.alt}
              visibleByDefault
            />
          </SpanStyled>
        ) : (
          <AdaptiveImage src={image.src} alt={image.alt} />
        )}
      </Box>
    </Header>
  </>
)

export default HeaderBig
