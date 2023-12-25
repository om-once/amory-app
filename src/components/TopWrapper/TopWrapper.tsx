import Container from '@mui/material/Container'
import './TopWrapper.scss'
import SocialTop from 'components/SocialTop/SocialTop'
import SearchTop from 'components/SearchTop/SearchTop'
type Props = {}
const TopWrapper = (props: Props) => {
    return (
        <div className="top-wrapper">
            <Container maxWidth="lg">
                <div className="top-wrapper-content">
                    <SocialTop />
                    <SearchTop />
                </div>
            </Container>
        </div>
    )
}
export default TopWrapper
