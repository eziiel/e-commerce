import { stripe } from "../../lib/stripe";
import { NextApiRequest, NextApiResponse } from "next";

interface PropsItemsList  {
  price: string
  quantity: number
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  if(req.method !== 'POST') {
    res.status(405).json({error : 'Method not allowed'})    
  }
  
  const { priceId } = req.body 
  // const priceId  = ['price_1McuzUAAdVH5EhKb8WtObVRd', 'price_1Mcv12AAdVH5EhKbruLsKZDM']

  // const priceId = 'price_1Mcv1eAAdVH5EhKbjPF8jdDV'
  // const priceId2 = 'price_1Mcv12AAdVH5EhKbruLsKZDM'
  
  if(!priceId ) {
    res.status(400).json({error : 'price not found'})    
  }

  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`
  const cancelUrl = `${process.env.NEXT_URL}/`

  let lineItems: PropsItemsList[] = priceId.map((item:string) => {
    return {
      price: item,
      quantity: 1
    };
  })

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: 'payment',
    line_items: lineItems
  })

  return res.status(201).json({
    // console.log(checkoutSession.url)
    checkoutURL : checkoutSession.url
  })
}