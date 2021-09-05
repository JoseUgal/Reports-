import React, { useRef, useEffect } from 'react'

// ** Imported Components
import ChannelMessage, { Mention } from '../ChannelMessage'

// ** Imported Styles
import {
  Container,
  Messages,
  InputWrapper,
  Input,
  InputIcon
} from './styles'

const ChannelData: React.FC = () => {
  const messageRef = useRef() as React.MutableRefObject<HTMLDivElement>

  useEffect(() => {
    const div = messageRef.current
    if (div) {
      div.scrollTop = div.scrollHeight
    }
  }, [])

  return (
    <Container>
      <Messages ref={messageRef}>
        {
          Array.from(Array(15).keys()).map((n) => (
            <ChannelMessage
              key={n}
              author="JoseUgal"
              date="21/06/2021"
              content="Hoy es mi cumpleaños"
            />
          ))
        }

        <ChannelMessage
          author="ZeroTwo"
          date="21/06/2021"
          hasMention
          isBot
          content={
            <>
              <Mention>@JoseUgal</Mention>, te está gustando tu experiencia con Reports?
            </>
          }
        />

      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Comienza a chatear en #chat-general" />
        <InputIcon />
      </InputWrapper>
    </Container>
  )
}

export default ChannelData
