import React, { Children } from 'react'
import styled from 'styled-components'
import { UI } from '../'

/**
 * Style
 */
const BulletListDot = styled.span`
  height: 8px;
  width: 8px;
  border-radius: 50%;
  margin-top: 6px;
  background-color: ${UI.colors.turquoise};
`
const BulletListSlideTextStyled = styled.div`
  flex: 1;
  margin-left: 1rem;
`
const BulletListSlideItemStyled = styled.li`
  margin: 3rem 0;
  display: flex;
  align-items: flex-start;
`

/**
 * Component
 */
const BulletList = ({ datas, color }) => (
  <ul>
    {datas.map((data, i) => (
      <BulletListSlideItemStyled key={i}>
        <BulletListDot />
        <BulletListSlideTextStyled>
          {Children.map(data, component =>
            React.cloneElement(component, {
              color: color,
              align: 'left',
            })
          )}
        </BulletListSlideTextStyled>
      </BulletListSlideItemStyled>
    ))}
  </ul>
)
BulletList.displayName = 'BulletList' // https://github.com/facebook/react/issues/4915#issuecomment-335803765

export default BulletList
