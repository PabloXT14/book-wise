import { NextApiRequest, NextApiResponse } from 'next'

import { prisma } from '@/lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') return res.status(405).end()

  const bookId = String(req.query.bookId)

  const book = await prisma.book.findUnique({
    where: {
      id: bookId as string,
    },
    include: {
      categories: {
        include: {
          category: true,
        },
      },
      ratings: {
        include: {
          user: true,
        },
      },
    },
  })

  const bookAvgRating = await prisma.rating.groupBy({
    by: ['book_id'],
    where: {
      book_id: bookId,
    },
    _avg: {
      rate: true,
    }
  })

  const bookWithAvgRating = {
    ...book,
    avgRating: bookAvgRating[0]?._avg.rate ?? 0
  }

  return res.json({ book: bookWithAvgRating })
}