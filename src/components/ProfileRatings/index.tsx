import { useState, useMemo } from 'react'
import { Book, CategoriesOnBooks, Category, Rating } from '@prisma/client'
import { useDebounce } from '@uidotdev/usehooks'

import { Container, RatingList } from './styles'
import { PageTitle } from '../ui/PageTitle'
import { MagnifyingGlass, User } from '@phosphor-icons/react'
import { Link } from '../ui/Link'
import { Input } from '../ui/Form/Input'
import { ProfileRatingCard } from './ProfileRatingCard'
import { Text } from '../Typography'

export type ProfileRating = Rating & {
  book: Book & {
    categories: CategoriesOnBooks & {
      category: Category
    }[]
  }
}

type ProfileRatingsProps = {
  ratings: ProfileRating[]
  isOwnProfile: boolean
}

export const ProfileRatings = ({ ratings, isOwnProfile }: ProfileRatingsProps) => {
  const [search, setSearch] = useState('')

  const debouncedSearch = useDebounce(search, 500)

  const filteredRatings = useMemo(() => {
    return ratings?.filter((rating) => {
      return rating.book.name.toLowerCase().includes(debouncedSearch.toLowerCase())
    })
  }, [ratings, debouncedSearch])

  return (
    <Container>
      {isOwnProfile ? (
        <PageTitle title="Perfil" icon={<User size={25} />} />
      ) : (
        <Link
          href="/"
          text="Voltar"
          iconSide="left"
          color="white"
          css={{ alignSelf: 'flex-start' }}
        />
      )}
      <Input
        placeholder="Buscar livro avaliado"
        icon={<MagnifyingGlass size={20} />}
        css={{ marginTop: 40, marginBottom: 32 }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <RatingList>
        {filteredRatings?.map((rating) => (
          <ProfileRatingCard key={rating.id} rating={rating} />
        ))}

        {filteredRatings.length <= 0 && (
          <Text color="gray-400" css={{ textAlign: 'center' }}>
            {debouncedSearch ? 'Nenhum resultado encontrado' : 'Nenhuma avaliação encontrada'}
          </Text>
        )}
      </RatingList>
    </Container>
  )
}