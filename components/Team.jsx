import React from 'react'
import { Box, AnimationSwapImage, Text, SmallTitle } from './'

const Team = ({ team }) =>
  team.map(({ image, name, job, maxDpi = 2 }, i) => (
    <Box width={1 / 3} key={i}>
      <AnimationSwapImage
        image={`pages/equipe/${image}`}
        imageHover={`pages/equipe/${image}-hover`}
        maxDpi={maxDpi}
      />
      <SmallTitle align="center">{name}</SmallTitle>
      <Text align="center">{job}</Text>
    </Box>
  ))

export default Team
