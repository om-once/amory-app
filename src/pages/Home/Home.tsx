import { Container, Grid } from '@mui/material'
import MainSlider from 'components/MainSlider/MainSlider'
import Sidebar from 'components/Sidebar/Sidebar'
import '../Pages.scss'
import Articles from 'components/Articles/Articles'
type Props = {}
const Home = (props: Props) => {
    return (
        <main>
            <MainSlider />
            <div className="main-content home">
                <Container maxWidth="lg">
                    <Grid container spacing={3}>
                        <Grid item md={8} xs={12}>
                            <Articles categoryName="All" />
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
export default Home
