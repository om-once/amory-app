import { Link, Typography } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import './ArticlesItem.scss'
type ArticlesItemType = {
    id: number
    category: string[]
    title: string
    postDate: string
    postAuthor: string
    comments: number | string
    image: string
    description: string[]
    readingTime: number
}
const ArticlesItem = ({
    id,
    category,
    title,
    postDate,
    postAuthor,
    comments,
    image,
    description,
    readingTime,
}: ArticlesItemType) => {
    return (
        <Card className="article-item">
            <CardContent className="article-item-content">
                <header className="article-item-header">
                    <div className="article-item-categories">
                        {category.map((item) => (
                            <Link
                                href="#"
                                underline="none"
                                className="article-item-category"
                            >
                                {item}
                            </Link>
                        ))}
                    </div>
                    <Typography
                        variant="h2"
                        component="h2"
                        className="article-item-title"
                    >
                        <Link underline="none" href="#">
                            {title}
                        </Link>
                    </Typography>
                    <div className="article-item-info">
                        <Link underline="none" href="#">
                            {postDate}
                        </Link>
                        <Link
                            className="article-item-author"
                            underline="hover"
                            href="#"
                        >
                            {postAuthor}
                        </Link>
                        <Link underline="none" href="#">
                            {comments} COMMENTS
                        </Link>
                    </div>
                </header>
                <Link underline="none" href="#" className="article-item-image">
                    {image !== '' && (
                        <CardMedia component="img" image={image} alt={title} />
                    )}
                </Link>
                <div className="article-item-description">
                    {description.map((element) => (
                        <p>{element}</p>
                    ))}
                </div>
                <Typography variant="body2" className="article-item-buttons">
                    <Link underline="none" href="#" className="btn">
                        Continue reading
                    </Link>
                </Typography>
                <footer className="article-item-footer">
                    <p className="article-item-time">
                        READING TIME: <span>{readingTime} MIN</span>
                    </p>
                    <p className="article-item-share">SHARE:</p>
                </footer>
            </CardContent>
        </Card>
    )
}
export default ArticlesItem
