import { ReactNode } from 'react'
import * as Dialog from '@radix-ui/react-dialog'

import { BookContent, BookDetailsContainer, BookDetailsWrapper, BookImage, BookInfos, DialogClose, DialogContent, DialogOverlay } from './styles'
import { BookOpen, BookmarkSimple, X } from '@phosphor-icons/react'
import { Heading, Text } from '../Typography'
import { RatingStars } from '../RatingStars'
import { BookInfo } from './BookInfo'
import { BookRatings } from '../BookRatings'

type RatingsDialogProps = {
  children: ReactNode
}

export const RatingsDialog = ({ children }: RatingsDialogProps) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        {children}
      </Dialog.Trigger>

      <Dialog.Portal>
        <DialogOverlay />

        <DialogContent>
          <DialogClose>
            <X size={24} />
          </DialogClose>
          

          <BookDetailsWrapper>
            <BookDetailsContainer>
              <BookImage
                src='/images/books/codigo-limpo.png'
                alt='Book name'
                width={171}
                height={242}
              />

              <BookContent>
                <div>
                  <Heading size="sm">Book name</Heading>
                  <Text color="gray-300" css={{ marginTop: '$2' }}>Book author</Text>
                </div>

                <div>
                  <RatingStars rating={4} size="md" />
                  <Text color="gray-400" size="sm" css={{ marginTop: '$1' }}>2 avaliações</Text>
                </div>
              </BookContent>
            </BookDetailsContainer>

            <BookInfos>
              <BookInfo icon={<BookmarkSimple />} title="Categorias" info={'Computação, educação'} />
              <BookInfo icon={<BookOpen />} title="Páginas" info={'160'} />
            </BookInfos>
          </BookDetailsWrapper>

          <BookRatings />
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}