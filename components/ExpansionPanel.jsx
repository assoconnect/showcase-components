import React from 'react'
import styled from 'styled-components'
import { UI, Svg, Text, Flex, Space } from '.'
import AnimateHeight from 'react-animate-height'

/**
 * Style
 */
const ExpansionPanelStyled = styled.div`
  box-shadow: ${UI.shadows.sliderLight};
  border-radius: 10px;
  padding: 1rem;
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
const ExpansionPanelTitle = styled(props => <Text {...props} />)`
  flex: 1;
  font-weight: ${UI.fonts.weight.bold};
`

/**
 * Component
 */
class ExpansionPanel extends React.Component {
  state = {
    height: 0,
  }

  toggle = () => {
    const { height } = this.state

    this.setState({ height: height === 0 ? 'auto' : 0 })
  }

  render() {
    const { title, description } = this.props
    return (
      <ExpansionPanelStyled onClick={this.toggle}>
        <Flex alignItems="center" custom={false}>
          <ExpansionPanelTitle color="darkGrey">{title}</ExpansionPanelTitle>
          <ExpansionPanelArrow
            width="10px"
            className={
              this.state.height === 0 ? 'expansion--close' : 'expansion--open'
            }
          />
        </Flex>
        <AnimateHeight height={this.state.height} duration={300}>
          <Space size="small" />
          <Text>{description}</Text>
        </AnimateHeight>
      </ExpansionPanelStyled>
    )
  }
}
export default ExpansionPanel
