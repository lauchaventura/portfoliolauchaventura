import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon, } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'


const Work = () => (
    <Layout title="Movies LVB">
        <Container>
            <Title>
                MoviesLVB <Badge>2021</Badge>
            </Title>
            <P>
                Las peliculas recien estrenadas en
                un sitio web, consumiendo API de themoviedb
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Sitio Web</Meta>
                    <Link href="https://movieslbv.netlify.app/">
                        Movies LVB <ExternalLinkIcon mx="2px" />
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
                    <span>NodeJS, CSS Modules, Reactjs</span>
                </ListItem>


            </List>

            <WorkImage src="/images/works/movieslbv.jpeg" alt="Inkdrop" />
        </Container>
    </Layout>
)

export default Work