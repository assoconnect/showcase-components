import React from 'react'
import styled from 'styled-components'
import { UI, AdaptiveImage, Svg } from '../../'
import { random } from '../../../utils/numbers'

/**
 * Style
 */
const Container = styled.div`
  box-shadow: ${UI.shadows.header};
  width: 100%;
  display: flex;
  position: relative;
  padding-left: 4.706rem;

  border-radius: 1.647rem;
  background-color: ${UI.colors.white};
  position: relative;
`
const Card = styled.div`
  box-shadow: 0 2px 25px 0 rgba(222, 222, 222, 0.6);
  width: calc(100% / 3 - 2rem - 1px);
  margin: 1rem;
  border-radius: 0.588rem;
  padding: 0.588rem;
  animation: ${UI.animations.floating} 12s ease-in-out infinite;
  position: relative;
  text-align: center;
  background-color: ${UI.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  & .title--small {
    font-size: 1rem;
  }
  &.card-last {
    justify-content: center;
  }
  @media screen and (max-width: ${UI.breakpoints.mobile}) {
    margin: 0.882rem;
  }
`
const Inner = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 1rem 1rem 0;
`
const MenuStyled = styled(props => <AdaptiveImage {...props} />)`
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  border-radius: 1.375rem 0 0 1.375rem;
  overflow: hidden;
  text-align: left;
`
const YadoStyled = styled(props => <AdaptiveImage {...props} />)`
  position: absolute;
  bottom: -3.529rem;
  right: 0.8rem;
  height: 20.5rem;
`

const DashboardContainerStyled = styled(props => <AdaptiveImage {...props} />)`
  margin-top: 15px;
`

const AnimationHeaderText = styled.p`
  font-family: ${UI.fonts.family.baloo};
  font-weight: ${UI.fonts.weight.light};
  font-size: 0.824rem;
  color: ${UI.colors.blue};

  @media screen and (max-width: ${UI.breakpoints.mobile}) {
    display: none;
  }
`

/**
 * Component
 */
const HeaderHomeAnimation = ({ cards, srcYado, yado }) => (
  <>
    <Container className="hidden-mobile">
      <MenuStyled
        src="components/headers/header-home/navigation"
        visibleByDefault={true}
      />
      <Inner>
        {cards.map((card, i) => (
          <Card
            key={i}
            style={{
              animationDuration: `${
                UI.animations.floatingDurations[
                  random(UI.animations.floatingDurations.length)
                ]
              }s`,
            }}
            className="card"
          >
            <AnimationHeaderText>{card.title}</AnimationHeaderText>
            <Svg width="5rem" src={`common/icon/multicolor/${card.image}`} />
          </Card>
        ))}
        <Card
          style={{
            animationDuration: `${
              UI.animations.floatingDurations[
                random(UI.animations.floatingDurations.length)
              ]
            }s`,
          }}
          className="card card-last"
        >
          <Svg
            width="5rem"
            color="lightGrey"
            colorSecondary="lightGrey"
            src="common/icon/multicolor/more"
          />
        </Card>
      </Inner>
      {yado && (
        <YadoStyled
          src={yado.image}
          directSrc={true}
          className="hidden-mobile"
          visibleByDefault
        />
      )}
    </Container>
    <DashboardContainerStyled className="hidden-desktop" src={srcYado} />
  </>
)

export default HeaderHomeAnimation
