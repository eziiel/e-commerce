import React from "react";

interface ProductsProps {
  product: {
    id: string
    name: string
    imgUrl: string
    price: string
    description: string
    defaultPriceId: string
  }
}

interface ContextProps {
  items: ProductsProps[]
  setItemsCart: (item:ProductsProps) => void
  removeItems: (name:string) => void
  total: any
}

interface ProviderProps {
  children: React.ReactNode
}

export const ContextItems = React.createContext({} as ContextProps)

export const ContextItemsProvider = ({children}: ProviderProps) => {
  const [items, setItems] = React.useState<ProductsProps[] | []>([])

  let value = items.map((item) => {
    return Number(item.product.price.replace(/\,/g, '.').slice(3))
  }).reduce((a, value) => a+value, 0)

  let total = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)

  const setItemsCart = (item:ProductsProps) => {
    let response = items.find(p => p.product.id === item.product.id)

    if(!response) {
      setItems(previus => [...previus, item])
    }
  }

  const removeItems = (name:string) => {
    let itemsActual = items.filter(p => p.product.name !== name)
    setItems(itemsActual)
  }
  return (
    <ContextItems.Provider value={{ items, setItemsCart, removeItems, total }}>
      {children}
    </ContextItems.Provider>
  )
}