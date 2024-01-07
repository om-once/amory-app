import { Container, Grid } from '@mui/material'
import './FooterBottom.scss'
type Props = {}
const FooterBottom = (props: Props) => {
    return (
        <div className="footer-bottom">
            <Container maxWidth="lg">
                <Grid container spacing={4} className="footer-bottom-content">
                    <Grid item xs={6}>
                        <p className="footer-bottom-left">
                            &copy; 2020 copyright PREMIUMCODING // All rights
                            reserved
                        </p>
                    </Grid>
                    <Grid item xs={6}>
                        <p className="footer-bottom-right">
                            Amory was made with love by Premiumcoding
                        </p>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
export default FooterBottom
