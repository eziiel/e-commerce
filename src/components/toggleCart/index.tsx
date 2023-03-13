import  { AmountSpan, Toggle }  from '../../styles/components/cartShop/toggleCart'
import React from 'react'
import { ShoppingCartSimple } from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog'
import { CartShop } from './cartShop'
import { ContextItems } from '@/src/context'


export const ToggleCart = () => {
  const { items } = React.useContext( ContextItems )

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Toggle >
          <ShoppingCartSimple size={26} color='#c4c4cc'/>
          <AmountSpan>
            {items.length}
          </AmountSpan>
        </Toggle>
      </Dialog.Trigger>

      <CartShop />
    </Dialog.Root>
  )
}
