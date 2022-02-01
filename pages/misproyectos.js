import { Container, Heading, SimpleGrid, Box } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbStoreARG from '../public/images/works/storearg.jpeg'
import thumbpokeAPI from '../public/images/works/pokeapi.jpeg'
import thumbmoviesLBV from '../public/images/works/movieslbv.jpeg'

const Works = () => (
  <Layout title="Mis Proyectos">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Mis Proyectos
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem borderWidth='1px' id="storearg" title="StoreARG" thumbnail={thumbStoreARG}>
            Tienda creada con Google Sheet + API de Whatsapp
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem borderWidth='1px' id="movieslbv" title="Movies LBV" thumbnail={thumbmoviesLBV}>
            Exhibicion de las ultimas peliculas estrenadas
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem borderWidth='1px' id="pokeapi" title="Poke API" thumbnail={thumbpokeAPI}>
            Despliegue de personajes de la serie Pokemon
          </WorkGridItem>
        </Section>

      </SimpleGrid>

    </Container>
  </Layout>
)


export default Works
export { getServerSideProps } from '../components/chakra'