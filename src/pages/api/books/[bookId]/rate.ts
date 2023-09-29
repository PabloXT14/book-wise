import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth';
import { z } from 'zod'

import { buildNextAuthOption } from '../../auth/[...nextauth]';
import { prisma } from '@/lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') return res.status(405).end()

  const session = await getServerSession(
    req,
    res,
    buildNextAuthOption(req, res)
  )

  if (!session) return res.status(401).end()

  try {
    const bookId = String(req.query.bookId)
    const userId = String(session?.user?.id)

    const bodySchema = z.object({
      description: z.string().max(450),
      rate: z.number().min(1).max(5)
    })

    const { description, rate } = bodySchema.parse(req.body)

    const userAlreadyRated = await prisma.rating.findFirst({
      where: {
        user_id: userId,
        book_id: bookId,
      }
    })

    if (userAlreadyRated) {
      return res.status(400).json({
        error: 'You already rated this book',
      })
    }

    await prisma.rating.create({
      data: {
        user_id: userId,
        book_id: bookId,
        rate,
        description,
      }
    })

    return res.status(201).end()
  } catch(error) {
     console.log(error)
     return res.status(400).end() 
  }
}