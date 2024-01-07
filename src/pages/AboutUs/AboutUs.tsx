import { Container } from '@mui/material'
import '../Pages.scss'
type Props = {}
const AboutUs = (props: Props) => {
    return (
        <main>
            <div className="main-content about-us">
                <Container maxWidth="lg">
                    <div className="about-us-content">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Ea consequuntur voluptate non quidem molestiae
                        impedit eligendi, ipsam itaque animi quo in qui
                        doloremque maxime nobis quibusdam quos ratione! Ut,
                        reiciendis.
                    </div>
                </Container>
            </div>
        </main>
    )
}
export default AboutUs
