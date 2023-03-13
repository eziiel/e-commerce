import { styled } from "../..";

export const Toggle = styled('div', {
  background: '$gray800',

  width: '50px',
  height: '50px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  borderRadius: '8px',
  cursor: 'pointer',
  position: 'relative',

  
})

export const AmountSpan = styled('div', {
  position: 'absolute',
  width: '30px',  
  height: '30px',  
  background: '$green500',
  top: '-20%',
  left: '70%',

  borderRadius: '50%',
  border: '3px solid $gray900',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  
  fontSize: '0.875rem',
  fontWeight: 'bold',
  }
)
