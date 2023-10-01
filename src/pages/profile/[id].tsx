import { ReactElement } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';

import { NextPageWithLayout } from '../_app';
import { DefaultLayout } from '@/layouts/DefaultLayout';
import { HomeContainer } from '@/styles/pages/home';
import { api } from '@/lib/axios';
import { ProfileRatings } from '@/components/ProfileRatings';

const ProfilePage: NextPageWithLayout = () => {
  const router = useRouter()
  const userId = router.query.id as string

  const { data: profile } = useQuery({
    queryKey: ['profile', userId],
    queryFn: async () => {
      const response = await api.get(`/profile/${userId}`)

      return response.data.profile ?? {}
    },
    enabled: !!userId
  })

  console.log(profile)

  return (
    <HomeContainer>
      <ProfileRatings />
    </HomeContainer>
  )
}

ProfilePage.getLayout = (page: ReactElement) => {
  return (
    <DefaultLayout title="Perfil">
      {page}
    </DefaultLayout>
  )
}

export default ProfilePage;