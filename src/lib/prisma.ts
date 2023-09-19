import { PrismaClient } from '@prisma/client'

// Configuração para o prisma não criar muitas instâncias no ambiente de produção

declare global {
  var prisma: PrismaClient | undefined
}

export const prisma = global.prisma || new PrismaClient()

if (process.env.NODE_ENV !== 'production') global.prisma = prisma