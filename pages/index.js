import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,

  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'

import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'


const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={5}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hola, soy un dev nacido en Argentina!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Lautaro Ventura
          </Heading>

          <p> ( Artist / Developer / Audio )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/lauchaventura.jpg"
            alt="Profile image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Sobre mi
        </Heading>
        <Paragraph>
          Frontend Developer nacido en la Patagonia
          Argentina con una pasion por el desarrolo web y la visual
          de cada sitio/app web.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/misproyectos">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Mis proyectos
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2002</BioYear>
          Nacido en General Roca, Argentina
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Comienza el estudio sobre el desarrollo web en Platzi
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Sus proyectos son iniciados, basados en Reactjs
          y posteriormente en Nextjs
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Audio digital, Music,{' '}
          <Link color='blue.500' href="https://velezsarsfield.com.ar" target="_blank">
            Velez Sarsfield
          </Link>

        </Paragraph>
      </Section>

      <Section delay={0.3} >
        <Heading as="h3" variant="section-title" >
          Mis redes sociales
        </Heading>
        <List align='center' >
          <ListItem  >
            <Link href="https://github.com/lauchaventura" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @lauchaventura
              </Button>
            </Link>
            <Link href="https://twitter.com/lauchaventura" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoTwitter} />}
              >
                @lauchaventura
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/lautaro-ventura-041513229/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoLinkedin} />}
              >
                lautaroventura
              </Button>
            </Link>
            <Link href="https://instagram.com/lauchaventura" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
                @lauchaventura
              </Button>
            </Link>
          </ListItem>

        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'