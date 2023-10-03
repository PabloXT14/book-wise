import { NextSeo } from 'next-seo'

import { AuthButtons } from '@/components/AuthButtons';
import { Heading, Text } from '@/components/Typography';
import { LoginContainer, LogoSection, WelcomeSection } from '@/styles/pages/login';

export default function Login() {
  return (
    <>
      <NextSeo
        title='Login | BookWise'
        description='Faça seu login ou acesse como visitante.'
        additionalLinkTags={[
          {
            rel: 'icon',
            href: '/favicon.svg',
            type: 'image/svg',
          }
        ]}
      />

      <LoginContainer>
        <LogoSection>
          <img src="/images/logo.svg" alt="BookWise Logo" />
        </LogoSection>

        <WelcomeSection>
          <Heading size="lg" color="gray-100">Boas vindas!</Heading>
          <Text color="gray-200">
            Faça seu login ou acesse como visitante.
          </Text>

          <AuthButtons canGuest />
        </WelcomeSection>
      </LoginContainer>
    </>
  )
}