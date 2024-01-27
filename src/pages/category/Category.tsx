import { Container, Grid } from '@mui/material'
import Articles from 'components/Articles/Articles'
import Sidebar from 'components/Sidebar/Sidebar'
type Props = {
    categoryPage: string
    categoryType: string
}
const Category = ({ categoryPage, categoryType }: Props) => {
    return (
        <main>
            <div className={categoryPage}>
                <Container maxWidth="lg">
                    <Grid container spacing={3}>
                        <Grid item md={8} xs={12}>
                            <Articles categoryName={categoryType} />
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
export default Category
