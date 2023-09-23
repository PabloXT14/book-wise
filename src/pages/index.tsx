import { useSession, signOut } from 'next-auth/react'

import { NextPageWithLayout } from './_app'
import { DefaultLayout } from '@/layouts/DefaultLayout'
import { HomeContainer } from '@/styles/pages/home'

const HomePage: NextPageWithLayout = () => {
  const { data } = useSession()

  return (
    <HomeContainer>
      <main>
        main
      </main>
      <aside>
        aside
      </aside>
    </HomeContainer>
  )
}

HomePage.getLayout = (page) => {
  return (
    <DefaultLayout title="Início">
      {page}
    </DefaultLayout>
  )
}

export default HomePage