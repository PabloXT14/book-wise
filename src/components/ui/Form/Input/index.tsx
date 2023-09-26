import { CSS } from '@stitches/react';
import { InputHTMLAttributes, ReactNode } from 'react'
import { InputContainer } from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon?: ReactNode;
  css?: CSS; 
}

export const Input = ({ icon, css, ...props }: InputProps) => {
  return (
    <InputContainer css={css}>
      <input {...props} />
      {icon}
    </InputContainer>
  )
}