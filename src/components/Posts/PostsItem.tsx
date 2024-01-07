import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import './PostsItem.scss'
type PostsItemType = {
    id: number
    title: string
    date: string
    image: string
}
const PostsItem = ({ title, date, image }: PostsItemType) => {
    return (
        <Card className="posts-item">
            <Link className="posts-item-link" to="#">
                <CardMedia component="img" image={image} alt={title} />
            </Link>
            <CardContent className="posts-item-content">
                <Typography variant="h4" component="h4" className="title-h4">
                    <Link to="#">{title}</Link>
                </Typography>
                <p className="posts-item-date">{date}</p>
            </CardContent>
        </Card>
    )
}
export default PostsItem
