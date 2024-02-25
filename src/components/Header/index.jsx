import { Container, Logout, Profile } from './styles.js'
import { RiShutDownLine } from 'react-icons/ri'
import { useAuth } from '../../hooks/useAuth'

import avatarPlaceholder from '../../assets/avatar_placeholder.svg'
import { api } from '../../services/api.js'

export function Header() {
  const { signOut, user } = useAuth()
  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder
  return (
    <Container>
      <Profile to="/profile">
        <img src={avatarUrl} alt="foto do usuário" />
        <div>
          <span>Bem vindo</span>
          <strong>Wagner Leodoro</strong>
        </div>
      </Profile>
      <Logout onClick={signOut}>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}
