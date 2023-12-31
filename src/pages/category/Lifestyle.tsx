import { Container, Grid } from '@mui/material'
import Articles from 'components/Articles/Articles'
import Sidebar from 'components/Sidebar/Sidebar'
type Props = {}
const Lifestyle = (props: Props) => {
    return (
        <main>
            <div className="main-content lifestyle">
                <Container maxWidth="lg">
                    <Grid container spacing={3}>
                        <Grid item xs={8}>
                            <Articles categoryName="lifestyle" />
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
export default Lifestyle
