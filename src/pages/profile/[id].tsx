import { ReactElement } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react'

import { NextPageWithLayout } from '../_app';
import { DefaultLayout } from '@/layouts/DefaultLayout';
import { HomeContainer } from '@/styles/pages/home';
import { api } from '@/lib/axios';
import { ProfileRating, ProfileRatings } from '@/components/ProfileRatings';
import { ProfileDetails } from '@/components/ProfileDetails';

export type ProfileData = {
  user: {
    avatar_url: string
    name: string
    member_since: string
  },
  ratings: ProfileRating[],
  readPages: number
  ratedBooks: number
  readAuthors: number
  mostReadCategory?: string
}

const ProfilePage: NextPageWithLayout = () => {
  const { data: session } = useSession()
  const router = useRouter()
  const userId = router.query.id as string

  const { data: profile } = useQuery<ProfileData>({
    queryKey: ['profile', userId],
    queryFn: async () => {
      const response = await api.get(`/profile/${userId}`)

      return response.data.profile ?? {}
    },
    enabled: !!userId
  })

  const isOwnProfile = session?.user.id === userId

  return (
    <HomeContainer>
      {!!profile ? (
        <>
          <ProfileRatings ratings={profile.ratings} isOwnProfile={isOwnProfile} />
          <ProfileDetails profile={profile} />
        </>
      ) : (
        <h1>Carregando...</h1>
      )}
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