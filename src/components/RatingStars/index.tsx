import { ComponentProps } from '@stitches/react'
import { Container } from './styles'
import { Star } from '@phosphor-icons/react'

type RatingStarProps = ComponentProps<typeof Container> & {
  rating: number;
  size?: 'sm' | 'md' | 'lg'
}

export const RatingStars = ({ rating, size = 'sm', ...props }: RatingStarProps) => {
  return (
    <Container size={size} {...props}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={`star-${i}`}
          weight={(i + 1) <= rating ? 'fill' : 'regular'}
        />
      ))}
    </Container>
  )
}
