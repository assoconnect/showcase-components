import React from 'react'
import styled from 'styled-components'
import AnimateHeight from 'react-animate-height'
import { UI, Svg, Text, Flex, SmallTitle, AdaptiveImage } from '../'

const ExpansionPanelStyled = styled.div`
  background-color: ${UI.colors.extraLightGrey};
  box-shadow: ${UI.shadows.sliderLight};
  border-radius: 10px;
  cursor: pointer;
  align-self: end;
`
const ExpansionPanelArrow = styled(props => (
  <Svg src="common/icon/unicolor/arrow" {...props} />
))`
  transition: 0.3s;

  &.expansion--open {
    transform: rotate(90deg);
  }
`
const ExpansionPanelTitle = styled(props => <SmallTitle {...props} />)`
  text-transform: uppercase;
  flex: 1;
  font-weight: ${UI.fonts.weight.bold};
  margin-left: 10px;

  @media screen and (max-width: ${UI.breakpoints.mobile}) {
    text-align: left !important;
  }
`
const ExpansionPanelTitleWrapper = styled(props => <Flex {...props} />)`
  flex: 1;
`
const ExpansionPanelUl = styled.ul`
  li {
    margin: 10px 0;
  }
`
const ExpansionPanelInner = styled.div`
  padding: 1rem;
`
const ExpansionPanelInnerBorder = styled(props => (
  <ExpansionPanelInner {...props} />
))`
  border-top: 1px dashed ${UI.colors.lightGrey};
`
const ExpansionPanelTextCheck = styled(props => <Text {...props} />)`
  flex: 1;
  margin-left: 10px;
`

/**
 * Component
 */
class TableExpansionPanel extends React.Component {
  state = {
    height: 0,
  }

  toggle = () => {
    const { height } = this.state

    this.setState({ height: height === 0 ? 'auto' : 0 })
  }

  render() {
    const {
      crossColor,
      column: { title, image, dataIndex },
      datas,
    } = this.props
    return (
      <ExpansionPanelStyled onClick={this.toggle} className="hidden-desktop">
        <ExpansionPanelInner>
          <Flex alignItems="center" custom={false}>
            <ExpansionPanelTitleWrapper alignItems="center" custom={false}>
              <AdaptiveImage src={image} height="50px" />
              <ExpansionPanelTitle color="turquoise" align="left">
                {title}
              </ExpansionPanelTitle>
            </ExpansionPanelTitleWrapper>
            <ExpansionPanelArrow
              width="10px"
              className={
                this.state.height === 0 ? 'expansion--close' : 'expansion--open'
              }
            />
          </Flex>
        </ExpansionPanelInner>
        <AnimateHeight height={this.state.height} duration={300}>
          {datas.map(({ title, children }, i) => {
            return (
              <ExpansionPanelInnerBorder key={i}>
                <Text color="darkGrey">
                  <strong>{title}</strong>
                </Text>
                <ExpansionPanelUl>
                  {children.map((child, j) => {
                    const { title, subTitle } = child
                    // with specific value
                    if (child[dataIndex] === 'no')
                      return (
                        <li key={j}>
                          <Flex custom={false} alignItems="center">
                            <Svg
                              src="common/icon/unicolor/cross"
                              color={crossColor}
                              width="15px"
                            />
                            <ExpansionPanelTextCheck color="darkGrey">
                              {title || child}
                            </ExpansionPanelTextCheck>
                          </Flex>
                        </li>
                      )
                    else if (child[dataIndex])
                      return (
                        <Text key={j} tag="li" color="darkGrey">
                          {title} :{' '}
                          <Text tag="span" color="turquoise">
                            {child[dataIndex]}
                          </Text>
                          <br />
                          <Text size="small" tag="span" color="darkGrey">
                            {subTitle}
                          </Text>
                        </Text>
                      )
                    // without specific value
                    else
                      return (
                        <li key={j}>
                          <Flex custom={false} alignItems="center">
                            <Svg
                              src="components/check-list/check"
                              color="turquoise"
                              width="15px"
                            />
                            <ExpansionPanelTextCheck color="darkGrey">
                              {title || child}
                            </ExpansionPanelTextCheck>
                          </Flex>
                        </li>
                      )
                  })}
                </ExpansionPanelUl>
              </ExpansionPanelInnerBorder>
            )
          })}
        </AnimateHeight>
      </ExpansionPanelStyled>
    )
  }
}

export default TableExpansionPanel
