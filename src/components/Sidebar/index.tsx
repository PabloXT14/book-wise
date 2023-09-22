import { useRouter } from 'next/router'
import { useSession, signOut } from 'next-auth/react'
import { SignIn, SignOut } from '@phosphor-icons/react'

import { Container, LoginButton, UserDetails } from './styles'
import { Text } from '../Typography'
import { Navigation } from '../Navigation'
import { Avatar } from '../ui/Avatar'

export const Sidebar = () => {
  const { data: session } = useSession()
  const router = useRouter() 

  const user = session?.user

  const handleOpenProfile = () => {
    router.push(`/porfile/${user?.id}`)
  }

  return (
    <Container>
      <div>
        <img
          src="/images/logo.svg"
          alt="BookWise Logo"
          className="logo"
        />

        <Navigation />
      </div>

      <footer>
        {!user ? (
          <LoginButton href='/login'>
            Fazer login
            <SignIn size={20} />
          </LoginButton>
        ) : (
          <UserDetails>
            <Avatar
              src={user?.avatar_url}
              alt={user?.name}
              onClick={() => handleOpenProfile}
              css={{ cursor: 'pointer' }}
            />
            <Text size="sm">{user?.name}</Text>
            <SignOut color="#F75A68" size={20} onClick={() => signOut()} />
          </UserDetails>
        )}
      </footer>
    </Container>
  )
}
