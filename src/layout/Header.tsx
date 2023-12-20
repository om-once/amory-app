import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Logo from '../components/Logo/Logo'
import TopWrapper from 'components/TopWrapper/TopWrapper'

type Props = {}
const Header = (props: Props) => {
    return (
        <AppBar
            position="static"
            sx={{
                backgroundColor: '#1B1B1B',
                padding: '0',
            }}
        >
            <TopWrapper />
            <Container maxWidth="lg">
                <Toolbar>
                    <Logo />
                </Toolbar>
            </Container>
        </AppBar>
    )
}
export default Header
