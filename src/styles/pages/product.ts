import { styled } from "..";

export const ProductContainer = styled('main',{
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'stretch',
  justifyContent: 'center',
  alignContent: 'center',
  gap: '4rem',

  maxWidth: '1189px',
  // maxWidth: 'calc(100vw - ((100vw - 1180px)/2))',
  margin: '0 auto',
  padding: '1rem',
  '@media(max-width: 650px)':{
    gridTemplateColumns: '1fr',
  },
})

export const ProductImage = styled('div',{
  width: '100%',
  maxWidth: 576,
  height: 656,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465e4 100%);',
  borderRadius: 8,
  padding: '0.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  backgroundColor: 'blue',

  '@media(max-width: 650px)':{
    maxWidth: 300,
    height: 250,
  },
  img: {
    objectFit: 'cover',
    '@media(max-width: 650px)':{
      maxWidth: 300,
      height: 250,
    },
    
  },
})

export const ProductInfo = styled('div',{
  display: 'flex',
  flexDirection: 'column',

  h1: {
    fontSize: '$xxl',
    color: '$gray300',
  },
  
  span: {
    marginTop: '1rem',
    display: 'box',  
    fontSize: '$xxl',
    color: '$green300',
  },
  
  p: {
    marginTop: '2.5rem',
    display: 'box',
    lineHeight: 1.6,  
    fontSize: '$md',
    color: '$grey300',
  },

  button: {
    marginTop: 'auto',
    background: '$green500',
    border: 0,
    color: '$withe',
    borderRadius: 8,
    padding: '1.25rem',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '$md',   
    
    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
    },
    
    '&:not(:disabled):hover': { 
      background: '$green300'
    },	
    '@media(max-width: 650px)':{
      marginTop: '1rem',
    },
  }
})