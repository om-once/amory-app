import Link from '@mui/material/Link'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Container from '@mui/material/Container'
import './TopMenu.scss'
type Props = {}
const TopMenu = (props: Props) => {
    return (
        <div className="top-menu">
            <Container maxWidth="lg">
                <div className="top-menu-content">
                    <List className="top-menu-list">
                        <ListItem className="top-menu-item active">
                            <Link
                                href="#"
                                className="top-menu-link"
                                underline="none"
                            >
                                Home
                            </Link>
                            <List className="sub-menu">
                                <ListItem className="sub-menu-item">
                                    <Link
                                        href="#"
                                        className="sub-menu-link"
                                        underline="none"
                                    >
                                        Home Default
                                    </Link>
                                </ListItem>
                                <ListItem className="sub-menu-item">
                                    <Link
                                        href="#"
                                        className="sub-menu-link"
                                        underline="none"
                                    >
                                        Home Grid Version
                                    </Link>
                                </ListItem>
                                <ListItem className="sub-menu-item">
                                    <Link
                                        href="#"
                                        className="sub-menu-link"
                                        underline="none"
                                    >
                                        Home Fullwidth
                                    </Link>
                                </ListItem>
                                <ListItem className="sub-menu-item">
                                    <Link
                                        href="#"
                                        className="sub-menu-link"
                                        underline="none"
                                    >
                                        Home Minimal
                                    </Link>
                                </ListItem>
                                <ListItem className="sub-menu-item">
                                    <Link
                                        href="#"
                                        className="sub-menu-link"
                                        underline="none"
                                    >
                                        Home Boxed
                                    </Link>
                                </ListItem>
                                <ListItem className="sub-menu-item">
                                    <Link
                                        href="#"
                                        className="sub-menu-link"
                                        underline="none"
                                    >
                                        Home Dark Version
                                    </Link>
                                </ListItem>
                            </List>
                        </ListItem>
                        <ListItem className="top-menu-item">
                            <Link
                                href="#"
                                className="top-menu-link"
                                underline="none"
                            >
                                Features
                            </Link>
                            <List className="sub-menu">
                                <ListItem className="sub-menu-item">
                                    <Link
                                        href="#"
                                        className="sub-menu-link"
                                        underline="none"
                                    >
                                        Standard Post
                                    </Link>
                                </ListItem>
                                <ListItem className="sub-menu-item">
                                    <Link
                                        href="#"
                                        className="sub-menu-link"
                                        underline="none"
                                    >
                                        Gallery Post
                                    </Link>
                                </ListItem>
                                <ListItem className="sub-menu-item">
                                    <Link
                                        href="#"
                                        className="sub-menu-link"
                                        underline="none"
                                    >
                                        Video Post
                                    </Link>
                                </ListItem>
                                <ListItem className="sub-menu-item">
                                    <Link
                                        href="#"
                                        className="sub-menu-link"
                                        underline="none"
                                    >
                                        Audio post
                                    </Link>
                                </ListItem>
                                <ListItem className="sub-menu-item">
                                    <Link
                                        href="#"
                                        className="sub-menu-link"
                                        underline="none"
                                    >
                                        Sidebar page with Slideshow
                                    </Link>
                                </ListItem>
                                <ListItem className="sub-menu-item">
                                    <Link
                                        href="#"
                                        className="sub-menu-link"
                                        underline="none"
                                    >
                                        Full width page with Slideshow
                                    </Link>
                                </ListItem>
                            </List>
                        </ListItem>
                        <ListItem className="top-menu-item">
                            <Link
                                href="#"
                                className="top-menu-link"
                                underline="none"
                            >
                                Lifestyle
                            </Link>
                        </ListItem>
                        <ListItem className="top-menu-item">
                            <Link
                                href="#"
                                className="top-menu-link"
                                underline="none"
                            >
                                Travel
                            </Link>
                        </ListItem>
                        <ListItem className="top-menu-item">
                            <Link
                                href="#"
                                className="top-menu-link"
                                underline="none"
                            >
                                Photography
                            </Link>
                        </ListItem>
                        <ListItem className="top-menu-item">
                            <Link
                                href="#"
                                className="top-menu-link"
                                underline="none"
                            >
                                Editor's choice
                            </Link>
                        </ListItem>
                        <ListItem className="top-menu-item">
                            <Link
                                href="#"
                                className="top-menu-link"
                                underline="none"
                            >
                                Pages
                            </Link>
                            <List className="sub-menu">
                                <ListItem className="sub-menu-item">
                                    <Link
                                        href="#"
                                        className="sub-menu-link"
                                        underline="none"
                                    >
                                        Sample Page Example
                                    </Link>
                                </ListItem>
                                <ListItem className="sub-menu-item">
                                    <Link
                                        href="#"
                                        className="sub-menu-link"
                                        underline="none"
                                    >
                                        Typography
                                    </Link>
                                </ListItem>
                                <ListItem className="sub-menu-item">
                                    <Link
                                        href="#"
                                        className="sub-menu-link"
                                        underline="none"
                                    >
                                        Page with Sidebar
                                    </Link>
                                </ListItem>
                                <ListItem className="sub-menu-item">
                                    <Link
                                        href="#"
                                        className="sub-menu-link"
                                        underline="none"
                                    >
                                        Full width page
                                    </Link>
                                </ListItem>
                                <ListItem className="sub-menu-item">
                                    <Link
                                        href="#"
                                        className="sub-menu-link"
                                        underline="none"
                                    >
                                        About Us
                                    </Link>
                                </ListItem>
                            </List>
                        </ListItem>
                        <ListItem className="top-menu-item">
                            <Link
                                href="#"
                                className="top-menu-link top-menu-link-not"
                                underline="none"
                            >
                                Buy
                            </Link>
                        </ListItem>
                    </List>
                </div>
            </Container>
        </div>
    )
}
export default TopMenu
