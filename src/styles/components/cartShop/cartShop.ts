import * as Dialog from '@radix-ui/react-dialog'
import { styled } from '../..'

export const CartShopOverlay = styled (Dialog.Overlay, {
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  inset: 0,
  background: 'rgba(0,0,0,0.3)',
  // background: 'red',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: 'none',

  
}) 

export const CartShopContent = styled(Dialog.Content, {
  width: '30%',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',

  position: 'fixed',
  right: 0,
  top: 0,
  height: '100vh',

  background: '$gray800',
  border: 'none',

  padding: '5rem 3rem 5rem 3rem',

  '@media(max-width: 600px)':{
    width: '80%',
    padding: '1rem',
  },
}) 

export const FormCart = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',


})

export const FormCartProducts = styled('ul', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  
  listStyle: 'none',
  maxHeight: '600px',
  
  '@media(max-width: 600px)':{
    gap: '0.5rem',
    maxHeight: '500px',
  },
})

export const FormCartFooter = styled('footer', {

  display: 'flex',
  flexDirection: 'column',

  'button': {
    marginTop: '2rem',
    background: '$green500',
    border: 0,
    color: '$withe',
    borderRadius: 8,
    padding: '1.25rem',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '$md',   
    width: '100%',
    
    '@media(max-width: 600px)':{
      marginTop: '1rem',
    },

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
    },
    
    '&:not(:disabled):hover': { 
      background: '$green300'
    }	
  }
})

export const FormCartFooterInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',

  div: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '$ls',
  },
})

export const ValuesInfo = styled('div', {
  fontSize: '$md !important',
})