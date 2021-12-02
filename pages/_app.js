import { AnimatePresence, motion } from 'framer-motion'
import Header from '../components/header'
import '../styles/globals.css'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'
import { useEffect } from 'react'
import Logo from '../components/logo'

function MyApp({ Component, pageProps, router }) {
  const url = `localhost:300${router.route}`

  return (
    <>
    <Head>
        <link rel="icon" href="/favicon.png" type="image/png" />
    </Head>
            <DefaultSeo
                titleTemplate="%s - Josh Tregenza"
                openGraph={{
                    type: 'website',
                    locale: 'en_IE',
                    url,
                    description: 'The personal website for James Wallis, developer.',
                    site_name: 'Josh Tregenza | designer | storyteller | craftsman',
                    images: [],
                }}
                canonical={url}
            />
            <Header />
    <AnimatePresence 
    exitBeforeEnter
    initial={false}
    onExitComplete={() => window.scrollTo(0, 0)}>

      <Component {...pageProps} key={url}/>
  </AnimatePresence>
  <Logo/>
  </>
  )
}

export default MyApp
