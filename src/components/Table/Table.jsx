import React from 'react'
import styled from 'styled-components'
import Table from 'rc-table'
import { UI, Svg, Text, Space, SmallTitle, AdaptiveImage } from '../'
import TableExpansionPanel from './TableExpansionPanel'

/**
 * Style
 */
const TableStyled = styled.table`
  width: 100%;
  border-radius: 1.647rem;
  box-shadow: ${UI.shadows.sliderLight};
  background-color: ${UI.colors.white};
  padding: 1rem 0;
  overflow: hidden;

  /* Fix responsive bug in FF and Safari (bug #22) */
  colgroup col {
    min-width: 0 !important;
  }
`
const TableHeaderCell = styled.th`
  text-align: base-line;
  text-align: center;
  padding: 20px 1rem;
  border-left: 1px dashed ${UI.colors.lightGrey};
  &.rc-table-title {
    border-left: none;
  }
`
const TableBodyRow = styled.tr`
  border-top: 1px dashed ${UI.colors.lightGrey};
`
const TableBodyCell = styled.td`
  text-align: center;
  vertical-align: middle;
  padding: 20px 1rem;
  border-left: 1px dashed ${UI.colors.lightGrey};

  &.rc-table-title {
    display: flex;
    border-left: none;
  }
  .rc-table-row-level-0 &.rc-table-title {
    justify-content: space-between;
    flex-direction: row-reverse;

    .indent-level-0 {
      display: none;
    }
  }
  .rc-table-row-level-1 & {
    background-color: rgba(245, 245, 245, 0.75);
  }
  &.rc-table-row-expand-icon-cell {
    vertical-align: middle;
  }
  & .rc-table-row-collapsed,
  & .rc-table-row-expanded {
    display: block;
    width: 1rem;
    height: 1rem;
    background-image: url('${process.env
      .GATSBY_CDN_HOST}/components/table/arrow.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 8px;
    cursor: pointer;
    opacity: 0.8;
    transition: 0.3s;
  }
  & .rc-table-row-collapsed {
    transform: rotate(90deg);
  }
  & .rc-table-row-expanded {
    transform: rotate(-90deg);
  }
`
const TableSmallTitle = styled(props => <SmallTitle {...props} />)`
  text-transform: uppercase;
`

/**
 * Formatting Data
 */
const transformColumns = columns =>
  columns.map((column, i) => {
    const { dataIndex, title, image, className, width } = column
    return {
      key: i,
      dataIndex,
      className,
      title: (
        <>
          {image && <AdaptiveImage src={image} height="65px" />}
          {title && (
            <TableSmallTitle color="turquoise">{title}</TableSmallTitle>
          )}
        </>
      ),
      width,
    }
  })
const transformValue = (data, crossColor) => {
  if (!data) return <CellCheck />
  else if (data === 'no')
    return <TextCell>{<Cross opacity=".6" color={crossColor} />}</TextCell>
  else return <TextCell>{data}</TextCell>
}
const transformData = (datas, crossColor) =>
  datas.map(
    (
      {
        title,
        jeunePousse,
        bonzai,
        baobab,
        cocotier,
        sequoia,
        max,
        children,
        key,
      },
      i
    ) => {
      return {
        key: key || i,
        title: (
          <Text color="darkGrey">
            <strong>{title}</strong>
          </Text>
        ),

        jeunePousse: transformValue(jeunePousse, crossColor),
        bonzai: transformValue(bonzai, crossColor),
        baobab: transformValue(baobab, crossColor),
        cocotier: transformValue(cocotier, crossColor),
        sequoia: transformValue(sequoia, crossColor),
        max: transformValue(max, crossColor),

        children:
          children &&
          children.map((child, j) => {
            if (typeof child === 'string') {
              return {
                key: key || 'TextCellString' + i + j,
                title: (
                  <div>
                    <Text color="darkGrey">{child}</Text>
                  </div>
                ),
                jeunePousse: <CellCheck />,
                bonzai: <CellCheck />,
                baobab: <CellCheck />,
                cocotier: <CellCheck />,
                sequoia: <CellCheck />,
                max: <CellCheck />,
              }
            } else {
              const {
                title,
                subTitle,
                jeunePousse,
                bonzai,
                baobab,
                cocotier,
                sequoia,
                max,
                key,
              } = child
              return {
                key: key || 'TextCellOther' + i + j,
                title: (
                  <div>
                    <Text color="darkGrey">{title}</Text>
                    <Text size="small" color="darkGrey">
                      {subTitle}
                    </Text>
                  </div>
                ),
                jeunePousse: transformValue(jeunePousse, crossColor),
                bonzai: transformValue(bonzai, crossColor),
                baobab: transformValue(baobab, crossColor),
                cocotier: transformValue(cocotier, crossColor),
                sequoia: transformValue(sequoia, crossColor),
                max: transformValue(max, crossColor),
              }
            }
          }),
      }
    }
  )

/**
 * Internal Component
 */
const Check = styled(props => (
  <Svg
    src="components/check-list/check"
    color="turquoise"
    width="15px"
    {...props}
  />
))`
  ${({ opacity }) => `opacity: ${opacity};`}
`
const Cross = styled(props => (
  <Svg src="common/icon/unicolor/cross" width="15px" {...props} />
))`
  ${({ opacity }) => `opacity: ${opacity};`}
`

const TextCell = ({ children }) => (
  <Text color="extraDarkGrey" align="center">
    {children}
  </Text>
)
const CellCheck = () => (
  <TextCell>
    <Check />
  </TextCell>
)

/**
 * Component
 */
const TablePrice = ({ columns, datas, crossColor = 'middleGrey' }) => (
  <>
    <Table
      className="hidden-mobile"
      indentSize={20}
      components={{
        table: TableStyled,
        header: { cell: TableHeaderCell },
        body: { row: TableBodyRow, cell: TableBodyCell },
      }}
      defaultExpandedRowKeys={['others']}
      columns={transformColumns(columns)}
      data={transformData(datas, crossColor)}
    />
    {
      // Mobile mode
      columns.map(
        (column, i) =>
          column.dataIndex !== 'title' && (
            <div key={i}>
              <Space size="small" />
              <TableExpansionPanel
                column={column}
                datas={datas}
                key={i}
                crossColor={crossColor}
              />
            </div>
          )
      )
    }
  </>
)

export default TablePrice
