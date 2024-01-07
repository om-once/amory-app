import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import './ArticlesItem.scss'
type ArticlesItemType = {
    id: number
    category: string[]
    title: string
    date: string
    author: string
    comments: number | string
    image: string
    description: string[]
    readingTime: number
}
const ArticlesItem = ({
    id,
    category,
    title,
    date,
    author,
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
                        {category.map((item, index) => (
                            <Link
                                key={index}
                                to="#"
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
                        <Link to="#">{title}</Link>
                    </Typography>
                    <div className="article-item-info">
                        <Link to="#">{date}</Link>
                        <Link className="article-item-author" to="#">
                            by {author}
                        </Link>
                        <Link to="#">{comments} COMMENTS</Link>
                    </div>
                </header>
                <Link to="#" className="article-item-image">
                    {image !== '' && (
                        <CardMedia
                            key={id}
                            component="img"
                            image={image}
                            alt={title}
                        />
                    )}
                </Link>
                <div className="article-item-description">
                    {description.map((element) => (
                        <p>{element}</p>
                    ))}
                </div>
                <Typography variant="body2" className="article-item-buttons">
                    <Link to="#" className="btn">
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
