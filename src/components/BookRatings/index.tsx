import { RatingWithAuthorAndBook } from '../RatingCard'
import { Text } from '../Typography'
import { UserRatingCard } from '../UserRatingCard'
import { Link } from '../ui/Link'
import { Container } from './styles'

type BookRatingsProps = {
  ratings: RatingWithAuthorAndBook[]
}

export const BookRatings = ({ ratings }: BookRatingsProps) => {

  const handleRate = () => {
    console.log('avaliar')
  }

  return (
    <Container>
      <header>
        <Text>Avaliações</Text>
        <Link text='Avaliar' color="purple" withoutIcon onClick={handleRate} />
      </header>

      <section>
        {ratings.map((rating) => (
          <UserRatingCard key={rating.id} rating={rating} />
        ))}
      </section>
    </Container>
  )
}