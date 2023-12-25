import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'
import Logo from '../components/Logo/Logo'
import TopWrapper from 'components/TopWrapper/TopWrapper'
import TopMenu from 'components/TopMenu/TopMenu'
import MobileMenu from 'components/MobileMenu/MobileMenu'
import './Header.scss'

type Props = {}
const Header = (props: Props) => {
    return (
        <AppBar
            position="static"
            sx={{
                backgroundColor: '#1B1B1B',
                padding: '0',
                borderBottom: '5px solid #000;',
            }}
        >
            <TopWrapper />
            <MobileMenu />
            <Container maxWidth="lg">
                <Toolbar>
                    <Logo />
                </Toolbar>
            </Container>
            <TopMenu />
        </AppBar>
    )
}
export default Header
