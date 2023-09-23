import { ChartLineUp } from '@phosphor-icons/react'
import { PageTitle } from '../ui/PageTitle'
import { Container } from './styles'
import { Text } from '../Typography'
import { RatingCard } from '../RatingCard'

export const LatestRatings = () => {
  return (
    <Container>
      <PageTitle title="Início" icon={<ChartLineUp size={32} />} css={{
        marginBottom: 40,
      }}/>

      <Text size="sm">Avaliações mais recentes</Text>

      <section>
        {Array.from({ length: 10 }).map((_, i) => (
          <RatingCard key={i} rating={{
            id: '0jggnun34343123',
            rate: 4,
            user: {
              id: '857767885',
              name: 'John Doe',
              email: 'johndoe@email.com',
              avatar_url: 'https://github.com/pabloxt14.png',
              created_at: new Date(),
            },
            book: {
              id: '737867775874578',
              name: 'Harry Potter e a Pedra Filosofal',
              author: 'J. K. Rowling',
              summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quia saepe tenetur cumque hic maiores eligendi quibusdam repellendus illo? Laborum qui odit dolore nostrum possimus ullam saepe ratione, dolorem laboriosam corporis molestias! Similique quidem sed voluptates aperiam vitae quis repellendus beatae nihil nam totam animi cupiditate, eaque accusamus molestiae esse voluptate iure quibusdam commodi odio repudiandae cumque. Molestias blanditiis maiores aspernatur natus minus totam ex quos, unde alias, maxime, repellendus provident similique. Doloribus quam fugiat repellendus velit fugit corrupti voluptatem repellat nobis quod placeat dignissimos aperiam commodi harum ullam, ducimus eos porro quis sapiente quibusdam. Totam, unde minima blanditiis error illo quibusdam qui eius animi voluptates nemo harum laborum expedita dolores numquam ad! Delectus, provident? Cupiditate, porro id totam eveniet reiciendis, ipsum modi expedita reprehenderit eum iste asperiores consectetur eligendi quibusdam molestias sed sint maiores. Sit obcaecati quam totam non alias reprehenderit omnis aspernatur. Magnam rerum dicta, repellendus illum maxime tempore laboriosam voluptas velit, placeat asperiores aut vero iste nostrum tenetur ab alias eius facere odit architecto deserunt suscipit ad reprehenderit! Quasi reiciendis, ullam, molestias voluptatibus repudiandae aliquid vitae ex animi odit quod eius quisquam nihil, et odio placeat voluptatem quas. Repudiandae quaerat obcaecati facilis optio? Impedit temporibus mollitia ipsum?",
              cover_url: 'https://images.unsplash.com/photo-1501693063149-98378d901d82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
              total_pages: 100,
              created_at: new Date(),
            },
            created_at: new Date(),

          }}/>
        ))}
      </section>
    </Container>
  )
}