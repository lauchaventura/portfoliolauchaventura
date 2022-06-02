import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon, } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'


const Work = () => (
    <Layout title="Radio Agua de Vida">
        <Container mt={8}>
            <Title>
                Radio Agua de Vida <Badge>EN CONSTRUCCION</Badge>
            </Title>
            <P>
                El fin de la creacion es poder mejorar la visualizacion de cada detalle,
                agregando apartados de donacion, programacion y grilla. Poder ver en
                detalle cada programa y su horario

            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Sitio Web</Meta>
                    <Link href="https://radioadv.vercel.app/">
                        Radio Agua de Vida <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Repositorio</Meta>
                    <Link href="https://github.com/lauchaventura/radioadv">
                        GitHub <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Herramientas</Meta>
                    <span>NodeJS, ChakraUI, Nextjs</span>
                </ListItem>


            </List>

            <WorkImage src="/images/works/radioadv.jpeg" alt="Radio Agua de Vida" />
            <WorkImage src="/images/works/radioadv2.jpeg" alt="Radio Agua de Vida" />
        </Container>
    </Layout>
)

export default Work