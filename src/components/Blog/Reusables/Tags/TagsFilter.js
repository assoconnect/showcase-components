import React from 'react'
import styled from 'styled-components'
import { Tag } from '../../..'

const TagsFilter = ({ topics }) => {
  return (
    <>
      {topics.map((topic, i) => (
        <Tag key={i}>{topic}</Tag>
      ))}
    </>
  )
}

export default TagsFilter
