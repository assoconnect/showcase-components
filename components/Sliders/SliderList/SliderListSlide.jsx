import React from 'react'
import {
  MiddleTitle,
  Text,
  AdaptiveImage,
  Box,
  BulletList,
  Space,
} from '../../'
import { Flex } from '@rebass/grid'

/**
 * Component
 */
const SliderListSlide = ({ title, image, list }) => (
  <Flex flexWrap="wrap">
    <Box>
      <Space size="big" className="hidden-mobile" />
      <Space size="medium" className="hidden-mobile" />
    </Box>
    <Box width={1 / 2}>
      {image.maxDpi ? (
        <AdaptiveImage
          src={image.src}
          alt={image.alt}
          maxDpi={image.maxDpi}
          visibleByDefault
        />
      ) : (
        <AdaptiveImage src={image.src} alt={image.alt} visibleByDefault />
      )}
    </Box>
    <Box width={1 / 2}>
      <MiddleTitle color="turquoise" align="left">
        {title}
      </MiddleTitle>
      <BulletList
        datas={list.map((item, i) => (
          <Text key={i}>{item}</Text>
        ))}
      />
    </Box>
  </Flex>
)

export default SliderListSlide
