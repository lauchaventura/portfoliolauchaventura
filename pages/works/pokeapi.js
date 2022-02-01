import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon, } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'


const Work = () => (
    <Layout title="Poke API">
        <Container>
            <Title>
                PokeAPI <Badge>2021</Badge>
            </Title>
            <P>
                Despliegue de pokemones en general y
                tambien con un filtro para cada personaje.
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Sitio Web</Meta>
                    <Link href="https://pokeapiok.netlify.app/">
                        PokeAPI <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Repositorio</Meta>
                    <Link href="https://github.com/lauchaventura/pokemon-api">
                        GitHub <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Herramientas</Meta>
                    <span>NodeJS, CSS Modules, Nextjs</span>
                </ListItem>


            </List>

            <WorkImage src="/images/works/pokeapi.jpeg" alt="Inkdrop" />
        </Container>
    </Layout>
)

export default Work