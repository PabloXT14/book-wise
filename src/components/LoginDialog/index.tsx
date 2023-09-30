import { ReactNode } from 'react'
import { useRouter } from 'next/router'
import { X } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'

import { DialogClose, DialogContent, DialogOverlay } from './styles'
import { Heading } from '../Typography'
import { AuthButtons } from '../AuthButtons'

type LoginDialogProps = {
  children: ReactNode
}

export const LoginDialog = ({ children }: LoginDialogProps) => {
  const router = useRouter()
  const paramBookId = router.query.book as string

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

          <div>
            <Heading
              size="xs"
              color="gray-200"
              css={{ marginBottom: 40 }}
            >
              Faça o login para deixar a sua avaliação
            </Heading>
            <AuthButtons
              callbackUrl={!!paramBookId ? `/explore?book=${paramBookId}` : `/explore`}
            />
          </div>
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}