import { Container, Grid } from '@mui/material'
import MainSlider from 'components/MainSlider/MainSlider'
import Sidebar from 'components/Sidebar/Sidebar'
import '../Pages.scss'
import Pagination from 'components/Pagination/Pagination'
type Props = {}
const Home = (props: Props) => {
    return (
        <main>
            <MainSlider />
            <div className="main-content home">
                <Container maxWidth="lg">
                    <Grid container spacing={3}>
                        <Grid item xs={8}>
                            <Pagination categoryName="Home" />
                            {/* <Pagination articlesPerPage={1} totalPages={4} /> */}
                        </Grid>
                        <Grid item xs={4}>
                            <Sidebar />
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </main>
    )
}
export default Home
