import { AuthButton, Container } from './styles'

export const AuthButtons = () => {
  return (
    <Container>
      <AuthButton>
        <img src="/images/icons/google.svg" alt="Google Logo" />
        Entrar com Google
      </AuthButton>
      <AuthButton>
        <img src="/images/icons/github.svg" alt="GitHub Logo" />
        Entrar com GitHub
      </AuthButton>
      <AuthButton>
        <img src="/images/icons/rocket.svg" alt="Rocket Logo" />
        Entrar como visitante
      </AuthButton>
    </Container>
  )
}