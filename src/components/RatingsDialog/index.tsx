import { ReactNode, useState, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Book, CategoriesOnBooks, Category } from '@prisma/client'
import * as Dialog from '@radix-ui/react-dialog'

import { BookContent, BookDetailsContainer, BookDetailsWrapper, BookImage, BookInfos, DialogClose, DialogContent, DialogOverlay } from './styles'
import { BookOpen, BookmarkSimple, X } from '@phosphor-icons/react'
import { Heading, Text } from '../Typography'
import { RatingStars } from '../RatingStars'
import { BookInfo } from './BookInfo'
import { BookRatings } from '../BookRatings'
import { api } from '@/lib/axios'
import { BookWithAvgRating } from '../BookCard'
import { RatingWithAuthorAndBook } from '../RatingCard'

type BookDetails = BookWithAvgRating & {
  ratings: RatingWithAuthorAndBook[];
  categories: (CategoriesOnBooks & {
    category: Category;
  })[];
}

type RatingsDialogProps = {
  bookId: string;
  children: ReactNode
}

export const RatingsDialog = ({ bookId, children }: RatingsDialogProps) => {
  const [open, setOpen] = useState(false)

  const { data: book } = useQuery<BookDetails>({
    queryKey: ['book', bookId],
    queryFn: async () => {
      const response = await api.get(`/books/details/${bookId}`)

      return response.data.book as BookDetails ?? {}
    },
    enabled: open
  })

  const ratingsLength = book?.ratings?.length ?? 0
  const categories = book?.categories?.map(x => x.category.name)?.join(', ') ?? ''  

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        {children}
      </Dialog.Trigger>

      <Dialog.Portal>
        <DialogOverlay />

        <DialogContent>
          <DialogClose>
            <X size={24} />
          </DialogClose>


          {!book ? (
            <p>Carregando...</p>
          ) : (
            <>
              <BookDetailsWrapper>
                <BookDetailsContainer>
                  <BookImage
                    src={book.cover_url}
                    alt={book.name}
                    width={171}
                    height={242}
                  />

                  <BookContent>
                    <div>
                      <Heading size="sm">{book.name}</Heading>
                      <Text color="gray-300" css={{ marginTop: '$2' }}>{book.author}</Text>
                    </div>

                    <div>
                      <RatingStars rating={book.avgRating} size="md" />
                      <Text color="gray-400" size="sm" css={{ marginTop: '$1' }}>
                        {ratingsLength} {ratingsLength === 1 ? 'avaliação' : 'avaliações'}
                      </Text>
                    </div>
                  </BookContent>
                </BookDetailsContainer>

                <BookInfos>
                  <BookInfo icon={<BookmarkSimple />} title="Categorias" info={categories} />
                  <BookInfo icon={<BookOpen />} title="Páginas" info={String(book.total_pages)} />
                </BookInfos>
              </BookDetailsWrapper>

              <BookRatings ratings={book.ratings} />
            </>
          )}
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}