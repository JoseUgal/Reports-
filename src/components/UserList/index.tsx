import React from 'react'

import {
  Container,
  Role,
  User,
  Avatar
} from './styles'

interface UserProps {
  nickname: string,
  isBot ?: boolean
}

const UserRow: React.FC<UserProps> = ({
  nickname,
  isBot
}) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''} />
      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  )
}

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Administrador - 1</Role>
      <UserRow nickname="KaiiTo01" />

      <Role>Desconectados - 18</Role>
      <UserRow nickname="Diego Fernandes" isBot />
      <UserRow nickname="Test" />
      <UserRow nickname="Test" />
      <UserRow nickname="Test" />
      <UserRow nickname="Test" />
      <UserRow nickname="Test" />
      <UserRow nickname="Test" />
      <UserRow nickname="Test" />
      <UserRow nickname="Test" />
      <UserRow nickname="Test" />
      <UserRow nickname="Test" />
      <UserRow nickname="Test" />
      <UserRow nickname="Test" />
      <UserRow nickname="Test" />
      <UserRow nickname="Test" />
      <UserRow nickname="Test" />
    </Container>
  )
}

export default UserList
