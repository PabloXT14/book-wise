import { ChartLineUp } from '@phosphor-icons/react'
import { useQuery } from '@tanstack/react-query'
import { useSession } from 'next-auth/react'

import { PageTitle } from '../ui/PageTitle'
import { Container, LatestContainer } from './styles'
import { Text } from '../Typography'
import { RatingCard, RatingWithAuthorAndBook } from '../RatingCard'
import { api } from '@/lib/axios'
import { Link } from '../ui/Link'

export const LatestRatings = () => {
  const { data: ratings } = useQuery<RatingWithAuthorAndBook[]>({
    queryKey: ['ratings'],
    queryFn: async () => {
      const response = await api.get('/ratings/latest')

      return response.data.ratings ?? []
    }
  })

  const { data: session } = useSession()

  const userId = session?.user?.id

  const { data: latestUserRating } = useQuery<RatingWithAuthorAndBook>({
    queryKey: ['latest-user-rating', userId],
    queryFn: async () => {
      const response = await api.get('/ratings/user-latest')

      return response.data.rating ?? null
    },
    enabled: !!userId
  })

  return (
    <Container>
      <PageTitle title="Início" icon={<ChartLineUp size={32} />} css={{
        marginBottom: 40,
      }}/>

      {latestUserRating && (
        <LatestContainer>
          <header>
            <Text size="sm">Sua última leitura</Text>

            <Link text="Ver todas" href={`/profile/${userId}`} />
          </header>

          <RatingCard variant="compact" rating={latestUserRating} />
        </LatestContainer>
      )}

      <Text size="sm">Avaliações mais recentes</Text>

      <section>
        {ratings?.map((rating) => (
          <RatingCard key={rating.id} rating={rating} />
        ))}
      </section>
    </Container>
  )
}