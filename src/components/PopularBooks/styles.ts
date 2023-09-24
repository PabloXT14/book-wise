import { styled } from '../../../stitches.config';

export const Container = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
  marginTop: 65,
  overflowY: 'auto',
  paddingBottom: 40,

  '&::-webkit-scrollbar': {
    display: 'none',
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  '& > section': {
    display: 'flex',
    flexDirection: 'column',
    gap: '$3',
  },
})