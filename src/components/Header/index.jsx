import { Container, Logout, Profile } from './styles.js'
import { RiShutDownLine } from 'react-icons/ri'
import { useAuth } from '../../hooks/useAuth'

export function Header() {
  const { signOut } = useAuth()
  return (
    <Container>
      <Profile>
        <img src="https://github.com/WagnerLeodoro.png" alt="foto do usuário" />
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
