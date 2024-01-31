import { Container, Grid } from '@mui/material'
import LikedArticles from 'components/LikedArticles/LikedArticles'
import Sidebar from 'components/Sidebar/Sidebar'

type Props = {}

function Favourites(props: Props) {
    return (
        <main>
            <div className="main-content favourites">
                <Container maxWidth="lg">
                    <Grid container spacing={3}>
                        <Grid item md={8} xs={12}>
                            <section className="articles">
                                <div className="articles-content">
                                    <LikedArticles />
                                </div>
                            </section>
                        </Grid>
                        <Grid item md={4} xs={12}>
                            <Sidebar />
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </main>
    )
}

export default Favourites
