import React from 'react'

import {
  Container,
  HashtagIcon,
  Title,
  Separator,
  Description
} from './styles'

const ChannelInfo: React.FC = () => {
  return (
    <Container>
      <HashtagIcon />

      <Title>chat-general</Title>

      <Separator />

      <Description>
        Canal abierto para charlas
      </Description>
    </Container>
  )
}

export default ChannelInfo
