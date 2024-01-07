import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'
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
                            to="category/editors-choise"
                        >
                            EDITOR'S CHOICE
                        </Link>
                    </ListItem>
                    <ListItem className="categories-item">
                        <Link className="categories-link" to="#">
                            FASHION
                        </Link>
                    </ListItem>
                    <ListItem className="categories-item">
                        <Link
                            className="categories-link"
                            to="category/front-page-slideshow"
                        >
                            FRONT PAGE SLIDESHOW
                        </Link>
                    </ListItem>
                    <ListItem className="categories-item">
                        <Link
                            className="categories-link"
                            to="category/lifestyle"
                        >
                            LIFESTYLE
                        </Link>
                    </ListItem>
                    <ListItem className="categories-item">
                        <Link
                            className="categories-link"
                            to="category/photography"
                        >
                            PHOTOGRAPHY
                        </Link>
                    </ListItem>
                    <ListItem className="categories-item">
                        <Link className="categories-link" to="category/travel">
                            TRAVEL
                        </Link>
                    </ListItem>
                </List>
            </div>
        </div>
    )
}
export default Categories
