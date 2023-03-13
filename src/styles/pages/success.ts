import { styled } from "..";

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '3rem',

  height: 656,  
  margin: '0 auto',
  
  h1: {
    fontSize: '$xxl',
    color: '$gray100',
  },
  
  p: {
    fontSize: '$xl',
    color: '$gray300',
    maxWidth: 560,
    textAlign: 'center',
    marginTop: '1rem',
    lineHeight: 1.4,
  },

  a:{
    color: '$green500',
    display: 'block',
    marginTop: '4rem',
    fontSize: '$lg',
    textDecoration: 'none',
    fontWeight: 'bold',
    
    '&:hover': {
      color: '$green300',
    }
  }
})

export const SuccessImageContainer = styled('div', {
  display: 'flex',
  width: '100px',
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: '10%'
})

export const SuccessImage = styled('div', {
  width: '100px',
  minWidth: '130px',
  height: '130px',
  background: 'linear-gradient(180deg, #1ea483 0%, #7465e4 100%);',
  borderRadius: '50%',
  padding: '0.25rem',


  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '3rem',
  marginLeft: '-50%',
  boxShadow: '0 0 20px 1px #202024',

  img: {
    objectFit: 'cover',
  }
}) 