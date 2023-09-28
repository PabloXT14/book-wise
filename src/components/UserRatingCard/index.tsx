import Link from 'next/link'
import { Rating, User } from '@prisma/client'
import { useSession } from 'next-auth/react'

import { Container, UserDetails } from './styles'
import { Avatar } from '../ui/Avatar'
import { Heading, Text } from '../Typography'
import { RatingStars } from '../RatingStars'
import { getRelativeTimeString } from '@/utils/getRelativeTimeString'

type RatingWithAuthor = Rating & {
  user: User;
}

type UserRatingCardProps = {
  rating: RatingWithAuthor;
}

export const UserRatingCard = ({ rating }: UserRatingCardProps) => {
  const { data: session } = useSession()

  const isOwner = session?.user.id === rating.user_id
  const distance = getRelativeTimeString(new Date(rating.created_at), 'pt-BR')

  return (
    <Container variant={isOwner ? 'highlight' : 'primary'}>
      <UserDetails>
        <section>
          <Link href={`/profile/${rating.user_id  }`}>
            <Avatar src={rating.user.avatar_url!} alt={rating.user.name} />
          </Link>

          <div>
            <Heading size="xs">{rating.user.name}</Heading>
            <Text size="sm" color="gray-400">
              {distance}
            </Text>
          </div>
        </section>

        <RatingStars rating={rating.rate} />
      </UserDetails>

      <Text size="sm" color="gray-300">
        {rating.description}
      </Text>
    </Container>
  )
}