import { styled } from "..";

export const HomeContainer = styled('main', {
  display: 'flex',
  // gap: '3rem',
  
  width: '100%',
  marginLeft: 'auto',
  maxWidth: 'calc(100vw - ((100vw - 1180px)/2))',
  minHeight: 656,
}) 

export const Product = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465e4 100%);',
  borderRadius: '8px',
  cursor: 'pointer',
  // padding: '0.25rem',

  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',

  img: {
    objectFit: 'cover',
},

  footer:{
    position: 'absolute',
    left: '0.25rem',
    right: '0.25rem',
    bottom: '0.25rem',
    padding: '2rem',

    display: 'grid',
    gridTemplateColumns: '1fr 50px',
    gap: '0.5rem',
    // justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,

    background: 'rgba(0,0,0,0.6)',

    transform: 'translateY(100%)',
    transition: 'all 0.2s ease-in-out',
    opacity: 0,

    strong : {
      fontSize: '$lg',
      color: '$gray100',
      gridColum: 1
    },
    
    span : {
      fontSize: '$xl',
      fontWeight: 'bold',
      color: '$green300',
      gridColum: 1,
      gridRow: 2,
    },
    
    button : {
      gridRow: '1/3',
      border: 'none',
      
      background: '$green500',

      width: '50px',
      height: '50px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

      borderRadius: '8px',
      cursor: 'pointer',

      '&:hover': {
        background: '$green300',
      }
    },
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: '1',
    }
  },
}) 