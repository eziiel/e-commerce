import { ContextItems } from '@/src/context'
import { ItemCartShop, ItemCartShopinfo, RemoveItem } from '@/src/styles/components/cartShop/itemCart'
import Image from 'next/image'
import React from 'react'

interface Product {
  name: string
  img: string
  price: string
}

export const ItemCart = ({ name, img, price }: Product) => {
  const { removeItems, total } = React.useContext( ContextItems )

  const handleRemoveItem = () => {
    removeItems(name)
  }

  const handleTotal = () => {
    console.log(total)
  }

  return (
    <ItemCartShop>
      <Image 
        src={img} 
        width ={80} 
        height={80} 
        alt= {`imgem da camisa ${name}`}
      />
      <ItemCartShopinfo>
        <strong onClick={handleTotal}>{name}</strong>
        <span>{price}</span>
        <RemoveItem onClick={handleRemoveItem}>remover</RemoveItem>
      </ItemCartShopinfo>
    </ItemCartShop>

  )
}
