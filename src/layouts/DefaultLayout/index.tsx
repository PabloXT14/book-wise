import { ReactNode } from 'react'
import { NextSeo } from 'next-seo'

import { Container, Content } from './styles';
import { Sidebar } from '@/components/Sidebar';

interface DefaultLayoutProps {
  children: ReactNode
  title: string
  description?: string
  noindex?: boolean
}

export const DefaultLayout = ({ 
  children,
  title,
  description,
  noindex = false 
}: DefaultLayoutProps) => {
  return (
    <Container>
      <NextSeo
        title={`${title} | BookWise`}
        description={description}
        noindex={noindex}
        additionalLinkTags={[
          {
            rel: 'icon',
            href: '/favicon.svg',
            type: 'image/svg',
          }
        ]}
      />
     
      <Sidebar />

      <Content>
        {children}
      </Content>
    </Container>
  )
}