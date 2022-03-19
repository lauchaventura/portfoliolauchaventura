import Head from 'next/head'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Lautaro Ventura portfolio" />
        <meta name="author" content="Lautaro Ventura" />
        <meta name="author" content="Lautaro Ventura" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
        <link rel="shortcut icon" href="/images/logo.png" type="image/x-icon" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@c" />
        <meta name="twitter:creator" content="@lauchaventura" />
        <meta name="twitter:image" content="/images/logo.png" />
        <meta property="og:site_name" content="Lautaro Ventura" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/logo.png" />
        <title>Lautaro Ventura</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
