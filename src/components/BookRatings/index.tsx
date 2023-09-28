import { Text } from '../Typography'
import { UserRatingCard } from '../UserRatingCard'
import { Link } from '../ui/Link'
import { Container } from './styles'

export const BookRatings = () => {

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
        {Array.from({ length: 10 }).map((_, index) => (
          <UserRatingCard key={index} rating={{
            id: '1000',
            book_id: '0001',
            user: {
              id: '0001',
              name: 'John Doe',
              email: 'johndoe@email.com',
              avatar_url: 'https://github.com/pabloxt14.png',
              created_at: new Date()
            },
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            rate: 3,
            user_id: '0001',
            created_at: new Date(),
          }} />
        ))}
      </section>
    </Container>
  )
}