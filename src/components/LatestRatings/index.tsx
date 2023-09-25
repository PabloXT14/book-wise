import { ChartLineUp } from '@phosphor-icons/react'
import { useQuery } from '@tanstack/react-query'

import { PageTitle } from '../ui/PageTitle'
import { Container } from './styles'
import { Text } from '../Typography'
import { RatingCard, RatingWithAuthorAndBook } from '../RatingCard'
import { api } from '@/lib/axios'

export const LatestRatings = () => {
  const { data: ratings } = useQuery<RatingWithAuthorAndBook[]>({
    queryKey: ['ratings'],
    queryFn: async () => {
      const response = await api.get('/ratings/latest')

      return response.data.ratings ?? []
    }
  })


  return (
    <Container>
      <PageTitle title="Início" icon={<ChartLineUp size={32} />} css={{
        marginBottom: 40,
      }}/>

      <Text size="sm">Avaliações mais recentes</Text>

      <section>
        {ratings?.map((rating) => (
          <RatingCard key={rating.id} rating={rating} />
        ))}
      </section>
    </Container>
  )
}