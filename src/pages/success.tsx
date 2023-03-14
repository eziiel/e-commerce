import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";
import { stripe } from "../lib/stripe";
import { SuccessContainer, SuccessImage, SuccessImageContainer } from "../styles/pages/success";

interface PropsItemsSuccess {
  product : {
    customerName: string
    // name: string
    imageUrl: string[]
  }
}
export default function Success({ product }:PropsItemsSuccess) {

  console.log(product.imageUrl)
  return (
    <>
    <Head>
        <title>Compra efetuada</title>
        <meta name="robots" content="noindex"/>
      </Head>
    <SuccessContainer>
      <h1>Compra efetuada!</h1>

        <SuccessImageContainer>
          {product.imageUrl.map((item) => (
            <SuccessImage key={item}>
              <Image src={item} alt='' width={110} height={120}/>
            </SuccessImage>
          ))}
        </SuccessImageContainer>

        <p>
          Uhuul! <strong>{product.customerName}</strong>, sua compra está a
          caminho de sua casa
        </p>

      <Link href='/' passHref legacyBehavior>
        <a>
          Voltar ao Catálago
        </a>
      </Link>
    </SuccessContainer>
    </>
  )
}

//cliente side-useEffects, *getStatitcsProps, getSserverSideProps

export const getServerSideProps: GetServerSideProps = async ({ query, params}) => {
  if(!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  const sessionId = String(query.session_id)

  // console.log( sessionId)
  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items','line_items.data.price.product']
  })

  const items = session.line_items!.data.map(item => {
    let product = item.price?.product as Stripe.Product
    return product.images[0]
  })
  
  
  const customerName = session.customer_details?.name
  const products = session.line_items!.data[0].price?.product as Stripe.Product
  
  console.log(products)
  // const images = products.map(items => items.images)

  return {
    props: {
      product: {
        customerName,
        imageUrl: products
      }
    }
  } 
}