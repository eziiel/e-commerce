import { styled } from "..";

export const HomeContainer = styled('main', {
  display: 'flex',
  
  width: '100%',
  marginLeft: 'auto',
  maxWidth: 'calc(100vw - ((100vw - 1180px)/2))',
  minHeight: 656,

  '@media(max-width: 1250px)':{
    maxWidth: 'calc(100vw - ((100vw - 900px)/2))',
    minHeight: 456,
  },
  '@media(max-width: 1090px)':{
    maxWidth: 'calc(100vw - ((100vw - 650px)/2))',
    minHeight: 256,
  },
  '@media(max-width: 690px)':{
    maxWidth: 'calc(100vw - ((100vw - 575px)))',
    // maxidth: '100px',
  },
  '@media(max-width: 560px)':{
    maxWidth: 'calc(100vw - ((100vw - 475px)))',
  },
  '@media(max-width: 490px)':{
    maxWidth: 'calc(100vw - ((100vw - 375px)))',
  },
  '@media(max-width: 390px)':{
    // maxWidth: 'calc(100vw - ((100vw - 350px)))',
    marginLeft: '2rem',
    
  }
}) 

export const Product = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465e4 100%);',
  borderRadius: '8px',
  cursor: 'pointer',

  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',

  img: {
    objectFit: 'cover',
  },
  
  '@media(max-width: 560px)':{
    height: '300px',
    minWidth: '200px ',
    img: {
      objectFit: 'center',
      width: 300,
      height: 300
    },
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

    '@media(max-width: 600px)':{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '1rem',

      // strong : {
      //   fontSize: '$ls',
      // },

      botton: {
        widht: '300px !important'
      }
    },

    strong : {
      fontSize: '$lg',
      color: '$gray100',
      gridColum: 1,
      
      '@media(max-width: 600px)':{
        fontSize: '$ls',
      } 
    },
    
    span : {
      fontSize: '$xl',
      fontWeight: 'bold',
      color: '$green300',
      gridColum: 1,
      gridRow: 2,
      '@media(max-width: 600px)':{
        fontSize: '$md',
      } 
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
      },
      
      '&:disabled': {
        opacity: 0.6,
        cursor: 'not-allowed',
      },
      
      '&:not(:disabled):hover': { 
        background: '$green300'
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