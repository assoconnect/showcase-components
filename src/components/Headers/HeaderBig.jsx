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
} from '../'
import { KillerArgument } from './Header'

/**
 * Style
 */
const HeaderSpace = styled((props) => <Space {...props} />)`
  @media screen and (max-width: ${UI.breakpoints.mobile}) {
    padding-top: 1.25rem;
  }
`
const SpanStyled = styled.div`
  display: inline-block;
  position: relative;
  width: 100%;
`
const Yado = styled((props) => <AdaptiveImage {...props} />)`
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
        href={`${process.env.GATSBY_CDN_HOST}/${image.src}-mobile.webp`}
        imagesrcset={`${process.env.GATSBY_CDN_HOST}/${image.src}-mobile-2x.webp x2`}
        media="(max-width: 500px)"
      />
      <link
        rel="preload"
        as="image"
        href={`${process.env.GATSBY_CDN_HOST}/${image.src}.webp`}
        imagesrcset={`${process.env.GATSBY_CDN_HOST}/${image.src}-2x.webp x2`}
        media="(min-width: 500px)"
      />
      {yado && (
        <>
          <link
            rel="preload"
            as="image"
            href={`${process.env.GATSBY_CDN_HOST}/common/yado/${yado.image}-mobile.webp`}
            imagesrcset={`${process.env.GATSBY_CDN_HOST}/common/yado/${yado.image}-mobile-2x.webp x2`}
            media="(max-width: 500px)"
          />
          <link
            rel="preload"
            as="image"
            href={`${process.env.GATSBY_CDN_HOST}/common/yado/${yado.image}.webp`}
            imagesrcset={`${process.env.GATSBY_CDN_HOST}/common/yado/${yado.image}-2x.webp x2`}
            media="(min-width: 500px)"
          />
        </>
      )}
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
          <InputButton className={classNameForm} translations={translations} />
        ) : (
          <ButtonLink href={button.href} button={{ size: 'big' }}>
            {button.children}
          </ButtonLink>
        )}
        {killerArgument && <KillerArgument>{killerArgument}</KillerArgument>}
        <HeaderSpace size="medium" className="hidden-desktop" />
      </Box>
      <Box width={1 / 2} overflowRight>
        {yado ? (
          <SpanStyled>
            <AdaptiveImage
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              visibleByDefault
            />
            <Yado
              src={`common/yado/${yado.image}`}
              alt={yado.alt}
              visibleByDefault
            />
          </SpanStyled>
        ) : (
          <AdaptiveImage
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            visibleByDefault
          />
        )}
      </Box>
    </Header>
  </>
)

export default HeaderBig
