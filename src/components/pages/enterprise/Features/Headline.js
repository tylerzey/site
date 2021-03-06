import React from 'react'
import { Text, Box } from 'serverless-design-system'
import { MobileCenteredBox } from 'src/fragments/DesignSystem'

const Headline = () => (
  <MobileCenteredBox width={[0.8, 0.8, 1]}>
    <Text
      fontSize={[24, 24, 24, 24, 32]}
      lineHeight={['38px', '38px', '38px', '38px', '44px']}
      letterSpacing={['-0.38px', '-0.38px', '-0.38px', '-0.38px', '-0.5px']}
      color='white'
      align='center'
      fontFamily='Soleil'
      pt={[0, 0, 32]}
      mb={[0, 0, 0, 0, '10px']}
      mt={[1640, 1640, 1190, 1120, 660]}
    >
      Serverless Framework Enterprise features
    </Text>
  </MobileCenteredBox>
)

export default Headline
