import { Container } from '@mui/material'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import TopMenu from 'components/TopMenu/TopMenu'
import './FixedMenu.scss'
type Props = {
    isScrolled: boolean
}
const FixedMenu = ({ isScrolled }: Props) => {
    return (
        <div className={isScrolled ? 'fixed-menu active' : 'fixed-menu'}>
            <Container maxWidth="lg">
                <div className="fixed-menu-content">
                    <Link className="fixed-menu-logo" to="/">
                        <img src={logo} alt="Amory Logo" />
                    </Link>
                    <TopMenu />
                </div>
            </Container>
        </div>
    )
}
export default FixedMenu
