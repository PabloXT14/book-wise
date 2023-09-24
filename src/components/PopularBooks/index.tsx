import { BookCard } from '../BookCard'
import { Text } from '../Typography'
import { Link } from '../ui/Link'
import { Container } from './styles'

export const PopularBooks = () => {
  return (
    <Container>
      <header>
        <Text size="sm">Livros populares</Text>
        <Link href="/explore" text="Ver todos" />
      </header>

      <section>
        {Array.from({ length: 4 }).map((_, i) => (
          <BookCard key={`popular-${i}`} book={{
            author: 'J. K. Rowling',
            avgRating: 4,
            cover_url: 'https://images.unsplash.com/photo-1501693063149-98378d901d82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
            created_at: new Date(),
            id: '737867775874578',
            name: 'Harry Potter e a Pedra Filosofal',
            summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, quibusdam!',
            total_pages: 100,
          }}/>
        ))}
      </section>
    </Container>   
  )
}