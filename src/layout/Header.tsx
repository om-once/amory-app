import { AppBar, Container, Toolbar } from '@mui/material'
import Logo from '../components/Logo/Logo'
import TopWrapper from 'components/TopWrapper/TopWrapper'
import TopMenu from 'components/TopMenu/TopMenu'
import MobileMenu from 'components/MobileMenu/MobileMenu'
import './Header.scss'
import FixedMenu from 'components/FixedMenu/FixedMenu'
import { useEffect, useState } from 'react'
type Props = {}
const Header = (props: Props) => {
    const [isScrolled, setIsScrolled] = useState(false)
    useEffect(() => {
        const headerHeightValue =
            document.querySelector('.header')?.clientHeight
        const handleScroll = () => {
            const scrollPosition = window.scrollY
            const headerHeight = headerHeightValue || 0 + 10

            setIsScrolled(scrollPosition >= headerHeight)
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    return (
        <AppBar
            className="header"
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
            <div className="header-bottom">
                <Container maxWidth="lg">
                    <div className="header-bottom-content">
                        <TopMenu />
                    </div>
                </Container>
            </div>
            <FixedMenu isScrolled={isScrolled} />
        </AppBar>
    )
}
export default Header
