import React from 'react'
import ChannelButton from '../ChannelButton'

import {
  Container,
  Category,
  AddCategoryIcon
} from './styles'

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Canales de texto</span>
        <AddCategoryIcon />
      </Category>

      <ChannelButton channelName="chat-general" />
      <ChannelButton channelName="trabajo" />
      <ChannelButton channelName="ocio" />
      <ChannelButton channelName="minecraft" />
      <ChannelButton channelName="valorant" />
    </Container>
  )
}

export default ChannelList
