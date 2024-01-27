import { Link, NavLink } from 'react-router-dom'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import './TopMenu.scss'
type Props = {}
const TopMenu = (props: Props) => {
    return (
        <div className="top-menu">
            <List className="top-menu-list">
                <ListItem className="top-menu-item">
                    <NavLink to="/" className="top-menu-link">
                        Home
                    </NavLink>
                    <List className="sub-menu">
                        <ListItem className="sub-menu-item">
                            <Link to="/" className="sub-menu-link">
                                Home Default
                            </Link>
                        </ListItem>
                        <ListItem className="sub-menu-item">
                            <Link to="/" className="sub-menu-link">
                                Home Grid Version
                            </Link>
                        </ListItem>
                        <ListItem className="sub-menu-item">
                            <Link to="/" className="sub-menu-link">
                                Home Fullwidth
                            </Link>
                        </ListItem>
                        <ListItem className="sub-menu-item">
                            <Link to="/" className="sub-menu-link">
                                Home Minimal
                            </Link>
                        </ListItem>
                        <ListItem className="sub-menu-item">
                            <Link to="/" className="sub-menu-link">
                                Home Boxed
                            </Link>
                        </ListItem>
                        <ListItem className="sub-menu-item">
                            <Link to="/" className="sub-menu-link">
                                Home Dark Version
                            </Link>
                        </ListItem>
                    </List>
                </ListItem>
                <ListItem className="top-menu-item">
                    <Link to="/" className="top-menu-link">
                        Features
                    </Link>
                    <List className="sub-menu">
                        <ListItem className="sub-menu-item">
                            <Link to="#" className="sub-menu-link">
                                Standard Post
                            </Link>
                        </ListItem>
                        <ListItem className="sub-menu-item">
                            <Link to="#" className="sub-menu-link">
                                Gallery Post
                            </Link>
                        </ListItem>
                        <ListItem className="sub-menu-item">
                            <Link to="#" className="sub-menu-link">
                                Video Post
                            </Link>
                        </ListItem>
                        <ListItem className="sub-menu-item">
                            <Link to="#" className="sub-menu-link">
                                Audio post
                            </Link>
                        </ListItem>
                        <ListItem className="sub-menu-item">
                            <Link to="#" className="sub-menu-link">
                                Sidebar page with Slideshow
                            </Link>
                        </ListItem>
                        <ListItem className="sub-menu-item">
                            <Link to="#" className="sub-menu-link">
                                Full width page with Slideshow
                            </Link>
                        </ListItem>
                    </List>
                </ListItem>
                <ListItem className="top-menu-item">
                    <NavLink
                        to="/category/lifestyle/"
                        className="top-menu-link"
                    >
                        Lifestyle
                    </NavLink>
                </ListItem>
                <ListItem className="top-menu-item">
                    <NavLink to="/category/travel/" className="top-menu-link">
                        Travel
                    </NavLink>
                </ListItem>
                <ListItem className="top-menu-item">
                    <NavLink
                        to="/category/photography/"
                        className="top-menu-link"
                    >
                        Photography
                    </NavLink>
                </ListItem>
                <ListItem className="top-menu-item">
                    <NavLink
                        to="/category/editors-choise/"
                        className="top-menu-link"
                    >
                        Editor's choice
                    </NavLink>
                </ListItem>
                <ListItem className="top-menu-item">
                    <Link to="#" className="top-menu-link">
                        Pages
                    </Link>
                    <List className="sub-menu">
                        <ListItem className="sub-menu-item">
                            <Link to="#" className="sub-menu-link">
                                Sample Page Example
                            </Link>
                        </ListItem>
                        <ListItem className="sub-menu-item">
                            <Link to="#" className="sub-menu-link">
                                Typography
                            </Link>
                        </ListItem>
                        <ListItem className="sub-menu-item">
                            <Link to="#" className="sub-menu-link">
                                Page with Sidebar
                            </Link>
                        </ListItem>
                        <ListItem className="sub-menu-item">
                            <Link to="#" className="sub-menu-link">
                                Full width page
                            </Link>
                        </ListItem>
                        <ListItem className="sub-menu-item">
                            <Link to="about-us" className="sub-menu-link">
                                About Us
                            </Link>
                        </ListItem>
                    </List>
                </ListItem>
                <ListItem className="top-menu-item">
                    <NavLink
                        to="buy"
                        className="top-menu-link top-menu-link-not"
                    >
                        Buy
                    </NavLink>
                </ListItem>
            </List>
        </div>
    )
}
export default TopMenu
