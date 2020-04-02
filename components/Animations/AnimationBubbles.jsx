import React from 'react'
import styled from 'styled-components'
import { UI, AdaptiveImage, SmallTitle } from '../'
import { random } from '../../utils/numbers'
import classNames from 'classnames/bind'

/**
 * Style
 */
const position = `
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: block;
`
const SmallTitleStyled = styled(({ backgroundColor, ...props }) => (
  <SmallTitle {...props} />
))`
  width: 90%;
  padding: 10px;
  ${position};

  ${({ backgroundColor }) =>
    backgroundColor &&
    backgroundColor !== 'white' &&
    `color: ${UI.colors.white};`};

  @media screen and (max-width: 600px) {
    font-size: 0.7rem !important;
    line-height: 1em !important;
  }
`
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
`
const Cell = styled.div`
  width: calc(100% / 4 - 1.176rem);
  margin: 0.588rem;
  @media screen and (max-width: 600px) {
    width: calc(100% / 3 - 1.176rem);
  }
`
const Card = styled.div`
  width: 100%;
  padding-bottom: 100%;
  position: relative;
  text-align: center;
  animation: ${UI.animations.floating} 12s ease-in-out infinite;
`
const ImageStyled = styled(props => <AdaptiveImage {...props} />)`
  max-width: 80% !important;
  max-height: 90%;
  width: 100%;
  ${position};
  img {
    height: auto;
    width: auto;
  }
`
const Inner = styled.div`
  overflow: hidden;
  border-radius: 50%;
  background-color: ${({ backgroundColor }) => UI.colors[backgroundColor]};
  position: absolute;

  ${({ backgroundImage }) =>
    backgroundImage &&
    `
    background-image: url('${process.env.GATSBY_CDN_HOST}/${backgroundImage}');
    background-position: center center;
    background-size: cover;
  `};

  .card--size-1 & {
    width: 90%;
    padding-bottom: 90%;
  }
  .card--size-2 & {
    width: 65%;
    padding-bottom: 65%;
  }
  .card--size-3 & {
    width: 50%;
    padding-bottom: 50%;
  }

  @media screen and (max-width: ${UI.breakpoints.mobile}) {
    .card--size-1 & {
      width: 95%;
      padding-bottom: 95%;
    }
    .card--size-2 & {
      width: 75%;
      padding-bottom: 75%;
    }
    .card--size-3 & {
      width: 65%;
      padding-bottom: 65%;
    }
  }

  .card--shadow-0 & {
    box-shadow: 0 22px 23px 9px rgba(0, 0, 0, 0.15);
  }
  .card--shadow-1 & {
    box-shadow: 0 9px 38px 0 rgba(0, 0, 0, 0.15);
  }
  .card--shadow-2 & {
    box-shadow: 0 13px 21px rgba(0, 0, 0, 0.15);
  }

  .card--position-0 & {
    bottom: 0;
    right: 0;
  }
  .card--position-1 & {
    top: 0;
    left: 0;
  }
  .card--position-2 & {
    top: 0;
    right: 0;
  }
  .card--position-3 & {
    bottom: 0;
    left: 0;
  }
`

/**
 * Component
 */
const AnimationBubbles = ({ datas, className }) => (
  <Container className={classNames(className)}>
    {datas.map((data, i) => (
      <Cell key={i}>
        <Card
          style={{
            animationDuration: `${
              UI.animations.floatingDurations[
                random(UI.animations.floatingDurations.length)
              ]
            }s`,
          }}
          className={classNames(
            `card--position-${random(4)}`,
            `card--size-${data.size || 2}`,
            `card--shadow-${random(3)}`
          )}
        >
          <Inner
            backgroundColor={data.backgroundColor || 'white'}
            backgroundImage={data.backgroundImage}
          >
            {data.image && (
              <ImageStyled src={data.image} alt={data.alt} maxDpi={1} />
            )}
            {data.text && (
              <SmallTitleStyled
                color={data.backgroundColor !== 'white' && 'white'}
                align="center"
              >
                {data.text}
              </SmallTitleStyled>
            )}
          </Inner>
        </Card>
      </Cell>
    ))}
  </Container>
)

export default AnimationBubbles
