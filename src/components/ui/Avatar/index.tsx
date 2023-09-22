import { ComponentProps } from 'react'
import { AvatarImage, Container } from './styles'

type AvatarProps = ComponentProps<typeof Container> & {
  src: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Avatar = ({ src, alt, size = "md", ...props }: AvatarProps) => {
  return (
    <Container size={size} {...props}>
      <AvatarImage
        src={src}
        alt={alt}
        width={80}
        height={80}
      />
    </Container>
  )
}
