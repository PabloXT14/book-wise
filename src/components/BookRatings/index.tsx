import { useState } from 'react'

import { RatingWithAuthorAndBook } from '../RatingCard'
import { Text } from '../Typography'
import { UserRatingCard } from '../UserRatingCard'
import { Link } from '../ui/Link'
import { Container } from './styles'
import { RatingForm } from '../RatingForm'

type BookRatingsProps = {
  ratings: RatingWithAuthorAndBook[];
  bookId: string;
}

export const BookRatings = ({ ratings, bookId }: BookRatingsProps) => {
  const [showForm, setShowForm] = useState(false)

  const handleRate = () => {
    setShowForm(true)
  }

  const sortedRatingsByDate = ratings.sort((a, b) => {
    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  })

  return (
    <Container>
      <header>
        <Text>Avaliações</Text>
        <Link text='Avaliar' color="purple" withoutIcon onClick={handleRate} />
      </header>

      <section>
        {showForm && (<RatingForm bookId={bookId} onCancel={() => setShowForm(false)}/>)}
        {sortedRatingsByDate.map((rating) => (
          <UserRatingCard key={rating.id} rating={rating} />
        ))}
      </section>
    </Container>
  )
}