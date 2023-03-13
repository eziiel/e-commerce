import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'

import LogoImage from '../assets/images/logo.svg'
import Image from 'next/image'
import { Container, Header } from '../styles/pages/app'
import Link from 'next/link'
import { ToggleCart } from '../components/toggleCart'
import { ContextItemsProvider } from '../context'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ContextItemsProvider>
      <Container  >
        <Header>
          <Link href='/'>
            <Image src={LogoImage} alt='' priority/>
          </Link>
        <ToggleCart />
        </Header>
        <Component {...pageProps} />
      </Container >
    </ContextItemsProvider>
)}
