import { Container, Grid } from '@mui/material'
import Articles from 'components/Articles/Articles'
import './MainContent.scss'
import Sidebar from 'components/Sidebar/Sidebar'
type Props = {}
const MainContent = (props: Props) => {
    return (
        <div className="main-content">
            <Container maxWidth="lg">
                <Grid container spacing={3}>
                    <Grid item xs={8}>
                        <Articles />
                    </Grid>
                    <Grid item xs={4}>
                        <Sidebar />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
export default MainContent
