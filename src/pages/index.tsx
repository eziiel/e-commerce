import Image from "next/image"
import { HomeContainer, Product } from "../styles/pages/home"

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css' 
import { stripe } from "../lib/stripe"
import { GetStaticProps } from "next"
import Stripe from "stripe"
import Link from "next/link"
import Head from "next/head"
import { ShoppingCartSimple } from "phosphor-react"
import React from "react"
import { ContextItems } from "../context"

interface ProductsProps {
  product: {
    id: string
    name: string
    imgUrl: string
    price: string
    description: string
    defaultPrice:string
  }[]
}

export default function Home({ product }: ProductsProps ) {
  const [ sliderRef ] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48
    }
  })

  const { setItemsCart, items } = React.useContext( ContextItems )

  const handleCartItems = (product:ProductsProps, id:string) => {
    let response = product.product.find(p => p.id === id)

    let item = {
      product: {
        id: response!.id,
        name: response!.name,
        imgUrl: response!.imgUrl,
        price: response!.price,
        description: response!.description,
        defaultPriceId: response!.defaultPrice
      }}

      setItemsCart(item)
  }

  return (
    <>
      <Head>
        <title>Home Ignite Shop</title>
      </Head>
      <HomeContainer ref={sliderRef} className='keen-slider'>
        {product.map((products, ind) => {
          return (
              <Product 
                className="keen-slider__slide" 
                key={products.id} 
              >
                <Link href={`product/${products.id}`}>
                  <Image 
                    placeholder="blur" 
                    blurDataURL={products.imgUrl}  
                    src={products.imgUrl} 
                    alt="" 
                    width={520} 
                    height={480} 
                  />
                </Link>
                <footer>
                  <strong>{products.name}</strong>
                  <span>{products.price}</span>
                  <button onClick={() => handleCartItems({product}, products.id)}>
                    <ShoppingCartSimple size={26} weight='bold' color='#c4c4cc'/>
                  </button>
                </footer>
              </Product>
          )
        })}
        
      </HomeContainer>  
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const product = response.data.map(product => {
  const price = product.default_price as Stripe.Price
    
    return {
      id: product.id,
      name: product.name,
      imgUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount! / 100),
      description: product.description,
      defaultPrice: price.id,
    }
  })
  return {
    props: {
      product
    },
    revalidate: 60 * 60 * 2 // 2 horas,
  }
}