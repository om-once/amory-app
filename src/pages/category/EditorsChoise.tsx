import { Container, Grid } from '@mui/material'
import Articles from 'components/Articles/Articles'
import Sidebar from 'components/Sidebar/Sidebar'
type Props = {}
const EditorsChoise = (props: Props) => {
    return (
        <main>
            <div className="main-content home">
                <Container maxWidth="lg">
                    <Grid container spacing={3}>
                        <Grid item xs={8}>
                            <Articles categoryName="editor's choise" />
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
export default EditorsChoise
