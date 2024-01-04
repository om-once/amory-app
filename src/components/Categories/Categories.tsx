import { Typography } from '@mui/material'
import Link from '@mui/material/Link'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import './Categories.scss'
type Props = {}
const Categories = (props: Props) => {
    return (
        <div className="box sidebar-item categories">
            <div className="content">
                <Typography variant="h3" component="h3" className="title-h3">
                    CATEGORIES
                </Typography>
                <List className="categories-list">
                    <ListItem className="categories-item">
                        <Link
                            className="categories-link"
                            href="#"
                            underline="none"
                        >
                            EDITOR'S CHOICE
                        </Link>
                    </ListItem>
                    <ListItem className="categories-item">
                        <Link
                            className="categories-link"
                            href="#"
                            underline="none"
                        >
                            FASHION
                        </Link>
                    </ListItem>
                    <ListItem className="categories-item">
                        <Link
                            className="categories-link"
                            href="#"
                            underline="none"
                        >
                            FRONT PAGE SLIDESHOW
                        </Link>
                    </ListItem>
                    <ListItem className="categories-item">
                        <Link
                            className="categories-link"
                            href="#"
                            underline="none"
                        >
                            LIFESTYLE
                        </Link>
                    </ListItem>
                    <ListItem className="categories-item">
                        <Link
                            className="categories-link"
                            href="#"
                            underline="none"
                        >
                            PHOTOGRAPHY
                        </Link>
                    </ListItem>
                    <ListItem className="categories-item">
                        <Link
                            className="categories-link"
                            href="#"
                            underline="none"
                        >
                            TRAVEL
                        </Link>
                    </ListItem>
                </List>
            </div>
        </div>
    )
}
export default Categories
