import IconButton from '@mui/material/IconButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import Link from '@mui/material/Link'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Container from '@mui/material/Container'
import './MobileMenu.scss'
type Props = {}
const MobileMenu = (props: Props) => {
    return (
        <div className="mobile-menu">
            <IconButton
                className="mobile-menu-btn"
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
            >
                <FontAwesomeIcon
                    icon={icon({
                        name: 'list-ul',
                        style: 'solid',
                    })}
                />
            </IconButton>
            <div className="mobile-menu-content">
                <List className="mobile-menu-list">
                    <ListItem className="mobile-menu-item active">
                        <Link
                            href="#"
                            className="mobile-menu-link"
                            underline="none"
                        >
                            Home
                        </Link>
                        <List className="mobile-menu-sub">
                            <ListItem className="mobile-menu-item">
                                <Link
                                    href="#"
                                    className="mobile-menu-link"
                                    underline="none"
                                >
                                    Home Default
                                </Link>
                            </ListItem>
                            <ListItem className="mobile-menu-item">
                                <Link
                                    href="#"
                                    className="mobile-menu-link"
                                    underline="none"
                                >
                                    Home Grid Version
                                </Link>
                            </ListItem>
                            <ListItem className="mobile-menu-item">
                                <Link
                                    href="#"
                                    className="mobile-menu-link"
                                    underline="none"
                                >
                                    Home Fullwidth
                                </Link>
                            </ListItem>
                            <ListItem className="mobile-menu-item">
                                <Link
                                    href="#"
                                    className="mobile-menu-link"
                                    underline="none"
                                >
                                    Home Minimal
                                </Link>
                            </ListItem>
                            <ListItem className="mobile-menu-item">
                                <Link
                                    href="#"
                                    className="mobile-menu-link"
                                    underline="none"
                                >
                                    Home Boxed
                                </Link>
                            </ListItem>
                            <ListItem className="mobile-menu-item">
                                <Link
                                    href="#"
                                    className="mobile-menu-link"
                                    underline="none"
                                >
                                    Home Dark Version
                                </Link>
                            </ListItem>
                        </List>
                    </ListItem>
                    <ListItem className="mobile-menu-item">
                        <Link
                            href="#"
                            className="mobile-menu-link"
                            underline="none"
                        >
                            Features
                        </Link>
                        <List className="mobile-menu-sub">
                            <ListItem className="mobile-menu-item">
                                <Link
                                    href="#"
                                    className="mobile-menu-link"
                                    underline="none"
                                >
                                    Standard Post
                                </Link>
                            </ListItem>
                            <ListItem className="mobile-menu-item">
                                <Link
                                    href="#"
                                    className="mobile-menu-link"
                                    underline="none"
                                >
                                    Gallery Post
                                </Link>
                            </ListItem>
                            <ListItem className="mobile-menu-item">
                                <Link
                                    href="#"
                                    className="mobile-menu-link"
                                    underline="none"
                                >
                                    Video Post
                                </Link>
                            </ListItem>
                            <ListItem className="mobile-menu-item">
                                <Link
                                    href="#"
                                    className="mobile-menu-link"
                                    underline="none"
                                >
                                    Audio post
                                </Link>
                            </ListItem>
                            <ListItem className="mobile-menu-item">
                                <Link
                                    href="#"
                                    className="mobile-menu-link"
                                    underline="none"
                                >
                                    Sidebar page with Slideshow
                                </Link>
                            </ListItem>
                            <ListItem className="mobile-menu-item">
                                <Link
                                    href="#"
                                    className="mobile-menu-link"
                                    underline="none"
                                >
                                    Full width page with Slideshow
                                </Link>
                            </ListItem>
                        </List>
                    </ListItem>
                    <ListItem className="mobile-menu-item">
                        <Link
                            href="#"
                            className="mobile-menu-link"
                            underline="none"
                        >
                            Lifestyle
                        </Link>
                    </ListItem>
                    <ListItem className="mobile-menu-item">
                        <Link
                            href="#"
                            className="mobile-menu-link"
                            underline="none"
                        >
                            Travel
                        </Link>
                    </ListItem>
                    <ListItem className="mobile-menu-item">
                        <Link
                            href="#"
                            className="mobile-menu-link"
                            underline="none"
                        >
                            Photography
                        </Link>
                    </ListItem>
                    <ListItem className="mobile-menu-item">
                        <Link
                            href="#"
                            className="mobile-menu-link"
                            underline="none"
                        >
                            Editor's choice
                        </Link>
                    </ListItem>
                    <ListItem className="mobile-menu-item">
                        <Link
                            href="#"
                            className="mobile-menu-link"
                            underline="none"
                        >
                            Pages
                        </Link>
                        <List className="mobile-menu-sub">
                            <ListItem className="mobile-menu-item">
                                <Link
                                    href="#"
                                    className="mobile-menu-link"
                                    underline="none"
                                >
                                    Sample Page Example
                                </Link>
                            </ListItem>
                            <ListItem className="mobile-menu-item">
                                <Link
                                    href="#"
                                    className="mobile-menu-link"
                                    underline="none"
                                >
                                    Typography
                                </Link>
                            </ListItem>
                            <ListItem className="mobile-menu-item">
                                <Link
                                    href="#"
                                    className="mobile-menu-link"
                                    underline="none"
                                >
                                    Page with Sidebar
                                </Link>
                            </ListItem>
                            <ListItem className="mobile-menu-item">
                                <Link
                                    href="#"
                                    className="mobile-menu-link"
                                    underline="none"
                                >
                                    Full width page
                                </Link>
                            </ListItem>
                            <ListItem className="mobile-menu-item">
                                <Link
                                    href="#"
                                    className="mobile-menu-link"
                                    underline="none"
                                >
                                    About Us
                                </Link>
                            </ListItem>
                        </List>
                    </ListItem>
                    <ListItem className="mobile-menu-item">
                        <Link
                            href="#"
                            className="mobile-menu-link mobile-menu-link-not"
                            underline="none"
                        >
                            Buy
                        </Link>
                    </ListItem>
                </List>
            </div>
        </div>
    )
}

export default MobileMenu
