import React from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { CartShopContent, CartShopOverlay, FormCart, FormCartFooter, FormCartFooterInfo, FormCartProducts, ValuesInfo } from '@/src/styles/components/cartShop/cartShop'
import axios from 'axios'
import { ContextItems } from '@/src/context'
import { GetStaticProps } from 'next'
import { stripe } from '@/src/lib/stripe'
import Stripe from 'stripe'
import { ItemCart } from './item'

interface ProductsProps {
  product?: {
    id: string
    name: string
    imgUrl: string
    price: string
    description: string
    defaultPriceId: string
  }
}

export const CartShop = ({ product }: ProductsProps) => {
  const { items, total } = React.useContext( ContextItems )
  const [ isCreatingCheckoutSession, setIsCreatingCheckoutSession] = React.useState(false)
 
  const handleBuyProduct = async () => {
    // const router = useRouter()
    try {
      setIsCreatingCheckoutSession(true)
      const response = await axios.post('/api/checkout', {
        
        priceId: items.map(item => item.product.defaultPriceId)
      })

      const { checkoutURL } = response.data

      //redirect to internal URL
        // router.push(checkoutURL)
      //redirect to external URL
      window.location.href = checkoutURL
    } catch (error) {
      //conectar com alguma ferramente da observabilidade (Datadog, Sentry)
      alert('falha em realizar compra')
      setIsCreatingCheckoutSession(false)
    }
  }
  
  return (
    <Dialog.Portal>
      <CartShopOverlay />

      <CartShopContent>
        <Dialog.Title>Sacola de pedidos</Dialog.Title>
          <FormCart>
            <FormCartProducts>
              {items.length > 0 ? items.map((item) =>(
                <ItemCart 
                  key={item.product.id}
                  name={item.product.name}
                  price={item.product.price}
                  img={item.product.imgUrl}
                  />
              )):
                <p>carrinho vazio</p>
            }
            </FormCartProducts>

            <FormCartFooter>
              <FormCartFooterInfo>
                <div>
                  <span>Quantidade</span>
                  <span>{items.length} itens</span>
                </div>
                <ValuesInfo>
                  <span>Valor total</span>
                  <span>{total}</span>
                </ValuesInfo>
              </FormCartFooterInfo>
              <button onClick={handleBuyProduct}>
                Finalizar pedido 
              </button>
            </FormCartFooter>
          </FormCart>
      </CartShopContent>
    </Dialog.Portal>
  )
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
  const productId = params!.id

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })

  console.log(product)
  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imgUrl: product.images[0],
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(price.unit_amount! / 100),
        description: product.description,
        defaultPriceId: price.id
      }
    },
    revalidate: 60 * 60 * 1, // 1 hour
  }  
}
