import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon, } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'


const Work = () => (
  <Layout title="Inkdrop">
    <Container>
      <Title>
        StoreARG <Badge>2020</Badge>
      </Title>
      <P>
        Tienda creada con articulos desde Google Sheet enlazando
        la compra con la API de Whatsapp, facilitando al comprador
        y al vendedor
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Sitio Web</Meta>
          <Link href="https://storearg-3roys0fdy-lauchaventura.vercel.app/">
            StoreARG <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Repositorio</Meta>
          <Link href="https://github.com/lauchaventura/storearg">
            GitHub <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Herramientas</Meta>
          <span>NodeJS, ChakraUI, Nextjs</span>
        </ListItem>


      </List>

      <WorkImage src="/images/works/storearg.jpeg" alt="Inkdrop" />
    </Container>
  </Layout>
)

export default Work