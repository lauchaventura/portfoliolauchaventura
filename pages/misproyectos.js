import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbStoreARG from '../public/images/works/storearg.jpeg'

const Works = () => (
  <Layout title="Mis Proyectos">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Mis Proyectos
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="storearg" title="StoreARG" thumbnail={thumbStoreARG}>
            Tienda creada con Google Sheet + API de Whatsapp
          </WorkGridItem>
        </Section>
        <Section>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
