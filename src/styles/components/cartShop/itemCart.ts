import { styled } from "../..";

export const ItemCartShop = styled('li', {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',


  img :{
    borderRadius: 10,
    background: 'linear-gradient(180deg, #1ea483 0%, #7465e4 100%);',
  },

  strong: {
    fontSize: '$md',
  },

  span :{
  },

  '@media(max-width: 600px)':{
    strong: {
      fontSize: '$ls',
    },
  },
  
})

export const ItemCartShopinfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  gap: '0.3rem',
  justifyContent: 'center',
})

export const RemoveItem = styled('div', {
  color: '$green500',
  fontWeight: 'bold',
  cursor: 'pointer',
  marginTop: '0.2rem',

  '&:hover' : {
    // color: '#F26419',
    color: '$green300',
  }
})
