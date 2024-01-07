import IconButton from '@mui/material/IconButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { Link } from 'react-router-dom'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import './MobileMenu.scss'
import { useState } from 'react'
type Props = {}
const MobileMenu = (props: Props) => {
    const [menuShow, setMenuShow] = useState<string>('mobile-menu-content')
    const openMobileMenu = () => {
        setMenuShow((prevState) =>
            prevState === 'mobile-menu-content'
                ? 'mobile-menu-content open'
                : 'mobile-menu-content'
        )
    }
    return (
        <div className="mobile-menu">
            <IconButton
                onClick={openMobileMenu}
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
            <div className={menuShow}>
                <List className="mobile-menu-list">
                    <ListItem className="mobile-menu-item active">
                        <Link to="/" className="mobile-menu-link">
                            Home
                        </Link>
                        <List className="mobile-menu-sub">
                            <ListItem className="mobile-menu-item">
                                <Link to="/" className="mobile-menu-link">
                                    Home Default
                                </Link>
                            </ListItem>
                            <ListItem className="mobile-menu-item">
                                <Link to="/" className="mobile-menu-link">
                                    Home Grid Version
                                </Link>
                            </ListItem>
                            <ListItem className="mobile-menu-item">
                                <Link to="/" className="mobile-menu-link">
                                    Home Fullwidth
                                </Link>
                            </ListItem>
                            <ListItem className="mobile-menu-item">
                                <Link to="/" className="mobile-menu-link">
                                    Home Minimal
                                </Link>
                            </ListItem>
                            <ListItem className="mobile-menu-item">
                                <Link to="/" className="mobile-menu-link">
                                    Home Boxed
                                </Link>
                            </ListItem>
                            <ListItem className="mobile-menu-item">
                                <Link to="/" className="mobile-menu-link">
                                    Home Dark Version
                                </Link>
                            </ListItem>
                        </List>
                    </ListItem>
                    <ListItem className="mobile-menu-item">
                        <Link to="#" className="mobile-menu-link">
                            Features
                        </Link>
                        <List className="mobile-menu-sub">
                            <ListItem className="mobile-menu-item">
                                <Link to="#" className="mobile-menu-link">
                                    Standard Post
                                </Link>
                            </ListItem>
                            <ListItem className="mobile-menu-item">
                                <Link to="#" className="mobile-menu-link">
                                    Gallery Post
                                </Link>
                            </ListItem>
                            <ListItem className="mobile-menu-item">
                                <Link to="#" className="mobile-menu-link">
                                    Video Post
                                </Link>
                            </ListItem>
                            <ListItem className="mobile-menu-item">
                                <Link to="#" className="mobile-menu-link">
                                    Audio post
                                </Link>
                            </ListItem>
                            <ListItem className="mobile-menu-item">
                                <Link to="#" className="mobile-menu-link">
                                    Sidebar page with Slideshow
                                </Link>
                            </ListItem>
                            <ListItem className="mobile-menu-item">
                                <Link to="#" className="mobile-menu-link">
                                    Full width page with Slideshow
                                </Link>
                            </ListItem>
                        </List>
                    </ListItem>
                    <ListItem className="mobile-menu-item">
                        <Link
                            to="category/lifestyle"
                            className="mobile-menu-link"
                        >
                            Lifestyle
                        </Link>
                    </ListItem>
                    <ListItem className="mobile-menu-item">
                        <Link to="#" className="mobile-menu-link">
                            Travel
                        </Link>
                    </ListItem>
                    <ListItem className="mobile-menu-item">
                        <Link to="#" className="mobile-menu-link">
                            Photography
                        </Link>
                    </ListItem>
                    <ListItem className="mobile-menu-item">
                        <Link
                            to="category/editors-choise"
                            className="mobile-menu-link"
                        >
                            Editor's choice
                        </Link>
                    </ListItem>
                    <ListItem className="mobile-menu-item">
                        <Link to="#" className="mobile-menu-link">
                            Pages
                        </Link>
                        <List className="mobile-menu-sub">
                            <ListItem className="mobile-menu-item">
                                <Link to="#" className="mobile-menu-link">
                                    Sample Page Example
                                </Link>
                            </ListItem>
                            <ListItem className="mobile-menu-item">
                                <Link to="#" className="mobile-menu-link">
                                    Typography
                                </Link>
                            </ListItem>
                            <ListItem className="mobile-menu-item">
                                <Link to="#" className="mobile-menu-link">
                                    Page with Sidebar
                                </Link>
                            </ListItem>
                            <ListItem className="mobile-menu-item">
                                <Link to="#" className="mobile-menu-link">
                                    Full width page
                                </Link>
                            </ListItem>
                            <ListItem className="mobile-menu-item">
                                <Link
                                    to="about-us"
                                    className="mobile-menu-link"
                                >
                                    About Us
                                </Link>
                            </ListItem>
                        </List>
                    </ListItem>
                    <ListItem className="mobile-menu-item">
                        <Link
                            to="#"
                            className="mobile-menu-link mobile-menu-link-not"
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
