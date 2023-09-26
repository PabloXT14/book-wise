import { useState } from 'react'
import { Binoculars, MagnifyingGlass } from '@phosphor-icons/react'

import { BooksGrid, ExploreContainer, TagsContainer } from '@/styles/pages/explore'
import { NextPageWithLayout } from './_app'
import { DefaultLayout } from '@/layouts/DefaultLayout'
import { PageTitle } from '@/components/ui/PageTitle'
import { Input } from '@/components/ui/Form/Input'
import { Tag } from '@/components/ui/Tag'
import { BookCard } from '@/components/BookCard'

const ExplorePage: NextPageWithLayout = () => {
  const [search, setSearch] = useState('')

  return (
    <ExploreContainer>
      <header>
        <PageTitle title="Explorar" icon={<Binoculars size={32} />} />

        <Input
          placeholder="Buscar livro ou autor"
          icon={<MagnifyingGlass size={20} />}
          css={{
            maxWidth: 433,
          }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </header>

      <TagsContainer>
        <Tag active>Tudo</Tag>
      </TagsContainer>

      <BooksGrid>
        <BookCard
          book={{
            id: '1',
            name: 'O Senhor dos Anéis',
            cover_url: 'https://source.unsplash.com/random/108x152',
            author: 'J.R.R. Tolkien',
            summary: 'Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget',
            total_pages: 360,
            avgRating: 4.5,
            created_at: new Date(),
          }}
          size="lg"
        />
        <BookCard
          book={{
            id: '1',
            name: 'O Senhor dos Anéis',
            cover_url: 'https://source.unsplash.com/random/108x152',
            author: 'J.R.R. Tolkien',
            summary: 'Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget',
            total_pages: 360,
            avgRating: 4.5,
            created_at: new Date(),
          }}
          size="lg"
        />
        <BookCard
          book={{
            id: '1',
            name: 'O Senhor dos Anéis',
            cover_url: 'https://source.unsplash.com/random/108x152',
            author: 'J.R.R. Tolkien',
            summary: 'Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget',
            total_pages: 360,
            avgRating: 4.5,
            created_at: new Date(),
          }}
          size="lg"
        />
      </BooksGrid>
    </ExploreContainer>
  )
}

ExplorePage.getLayout = (page) => {
  return (
    <DefaultLayout title='Explorar'>
      {page}
    </DefaultLayout>
  )
}

export default ExplorePage