import { useState, Fragment } from 'react'
import { useSession } from 'next-auth/react'

import { RatingWithAuthorAndBook } from '../RatingCard'
import { Text } from '../Typography'
import { UserRatingCard } from '../UserRatingCard'
import { Link } from '../ui/Link'
import { Container } from './styles'
import { RatingForm } from '../RatingForm'
import { LoginDialog } from '../LoginDialog'

type BookRatingsProps = {
  ratings: RatingWithAuthorAndBook[];
  bookId: string;
}

export const BookRatings = ({ ratings, bookId }: BookRatingsProps) => {
  const [showForm, setShowForm] = useState(false)

  const { status, data: session } = useSession()

  const isAuthenticated = status === 'authenticated'

  const handleRate = () => {
    if (!isAuthenticated) return
    setShowForm(true)
  }

  const sortedRatingsByDate = ratings.sort((a, b) => {
    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  })

  // Verificando se usuário já avaliou o livro
  const canRate = ratings.every((rating) => rating.user_id !== session?.user?.id)

  const RatingWrapper = isAuthenticated ? Fragment : LoginDialog

  return (
    <Container>
      <header>
        <Text>Avaliações</Text>
        {canRate && (
          <RatingWrapper>
            <Link text='Avaliar' color="purple" withoutIcon onClick={handleRate} />
          </RatingWrapper>
        )}
      </header>

      <section>
        {showForm && (<RatingForm bookId={bookId} onCancel={() => setShowForm(false)} />)}
        {sortedRatingsByDate.map((rating) => (
          <UserRatingCard key={rating.id} rating={rating} />
        ))}
      </section>
    </Container>
  )
}