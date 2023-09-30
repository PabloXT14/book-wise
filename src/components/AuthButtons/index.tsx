import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'

import { AuthButton, Container } from './styles'

type AuthButtonsProps = {
  canGuest?: boolean;
  callbackUrl?: string
}

export const AuthButtons = ({ canGuest, callbackUrl = "/" }: AuthButtonsProps) => {
  const router = useRouter()

  const handleSignIn = (provider?: string) => {
    if (!provider) {
      router.push(callbackUrl)
      return
    }

    signIn(provider, {
      callbackUrl,
    })
  }

  return (
    <Container>
      <AuthButton onClick={() => handleSignIn("google")}>
        <img src="/images/icons/google.svg" alt="Google Logo" />
        Entrar com Google
      </AuthButton>
      <AuthButton onClick={() => handleSignIn("github")}>
        <img src="/images/icons/github.svg" alt="GitHub Logo" />
        Entrar com GitHub
      </AuthButton>
      {canGuest && (
        <AuthButton onClick={() => handleSignIn()}>
          <img src="/images/icons/rocket.svg" alt="Rocket Logo" />
          Entrar como visitante
        </AuthButton>
      )}
    </Container>
  )
}