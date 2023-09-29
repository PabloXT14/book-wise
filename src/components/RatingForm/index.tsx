import { useState, FormEvent } from 'react'
import { useSession } from 'next-auth/react'
import { Check, X } from '@phosphor-icons/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { ActionsContainer, Container, FormContainer, UserDetails } from './styles'
import { Avatar } from '../ui/Avatar';
import { Heading } from '../Typography';
import { RatingStars } from '../RatingStars';
import { TextArea } from '../ui/Form/TextArea';
import { ActionIcon } from '../ui/ActionIcon';
import { api } from '@/lib/axios';

type RatingFormProps = {
  onCancel: () => void;
  bookId: string;
}

const MAX_RATING_LENGTH = 450

export const RatingForm = ({ bookId, onCancel }: RatingFormProps) => {
  const [currentRate, setCurrentRate] = useState(0)
  const [description, setDescription] = useState('')

  const queryClient = useQueryClient()

  const { data: session } = useSession()

  const { mutateAsync: handleRate } = useMutation({
    mutationFn: async () => {
      await api.post(`/books/${bookId}/rate`, {
        description,
        rate: currentRate,
      })
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['book', bookId])
      queryClient.invalidateQueries(['books'])
      onCancel()
    } 
  })

  const user = session?.user
  const submitDisabled = !description.trim() || !currentRate

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()

    if (submitDisabled) return

    await handleRate()
  }

  return (
    <Container>
      {user && (
        <UserDetails>
          <section>
            <Avatar src={user.avatar_url} alt={user.name} />
            <Heading size="xs">{user.name}</Heading>
          </section>

          <RatingStars size="lg" rating={currentRate} setRating={setCurrentRate} />
        </UserDetails>
      )}

      <FormContainer onSubmit={handleSubmit}>
        <TextArea
          placeholder='Escreva sua avaliação...'
          maxLength={MAX_RATING_LENGTH}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <ActionsContainer>
          <ActionIcon
            type="button"
            onClick={onCancel}
            icon={<X />}
            iconColor="purple100"
          />
          <ActionIcon
            type="submit"
            icon={<Check />}
            iconColor="green100"
            disabled={submitDisabled}  
          />
        </ActionsContainer>
      </FormContainer>
    </Container>
  )
}