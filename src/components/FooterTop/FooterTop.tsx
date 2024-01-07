import { Container, Grid } from '@mui/material'
import FooterSocial from 'components/FooterSocial/FooterSocial'
import './FooterTop.scss'
import LatestPosts from 'components/Posts/LatestPosts'
import Categories from 'components/Categories/Categories'
type Props = {}
const FooterTop = (props: Props) => {
    return (
        <div className="footer-top">
            <Container maxWidth="lg">
                <Grid container spacing={5}>
                    <Grid item xs={4}>
                        <div className="footer-top-author">
                            <img src="images/amory-logo.png" alt="amory-logo" />
                            <p className="footer-top-text">
                                Hello, my name is <strong>Amory.</strong> I am a
                                blogger living in New York. This is my blog,
                                where I post my posts about fashion.
                            </p>
                        </div>
                        <FooterSocial />
                    </Grid>
                    <Grid item xs={4}>
                        <LatestPosts />
                    </Grid>
                    <Grid item xs={4}>
                        <Categories />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
export default FooterTop
