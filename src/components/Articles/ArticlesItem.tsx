import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import './ArticlesItem.scss'
import Reviews from 'components/Reviews/Reviews'
import { ArticlesArray } from 'utils/articlesArray'
import { useState } from 'react'
type ArticlesItemType = {
    id: number
    category: string[]
    title: string
    date: string
    author: string
    authorImage: string
    authorText: string
    image: string
    description: string
    descriptionFull: string
    readingTime: number
    descriptionSet: boolean
    tagsSet: boolean
    tags: string[]
    link: string
}
const ArticlesItem = ({
    id,
    category,
    title,
    date,
    author,
    image,
    description,
    descriptionFull,
    readingTime,
    descriptionSet,
    tagsSet,
    tags,
    link,
    authorImage,
    authorText,
}: ArticlesItemType) => {
    return (
        <Card className="article-item">
            <CardContent className="article-item-content">
                <header className="article-item-header">
                    <div className="article-item-categories">
                        {category.map((item, index) => (
                            <Link
                                key={index}
                                to={
                                    item.includes("'")
                                        ? `/category/${item
                                              .replace(/ /g, '-')
                                              .replace(/'/g, '')
                                              .toLocaleLowerCase()}`
                                        : `/category/${item
                                              .replace(/ /g, '-')
                                              .toLocaleLowerCase()}`
                                }
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
                        <Link to={link}>{title}</Link>
                    </Typography>
                    <div className="article-item-info">
                        <Link to={link}>{date}</Link>
                        <Link className="article-item-author" to="#">
                            by {author}
                        </Link>
                        <Link to="#"> {} COMMENTS</Link>
                    </div>
                </header>
                <Link to={link} className="article-item-image">
                    {image !== '' && (
                        <CardMedia component="img" image={image} alt={title} />
                    )}
                </Link>
                <div
                    className="article-item-description"
                    dangerouslySetInnerHTML={{ __html: description }}
                ></div>
                {descriptionSet === true ? (
                    <div
                        className="article-item-description"
                        dangerouslySetInnerHTML={{ __html: descriptionFull }}
                    ></div>
                ) : null}
                <Typography variant="body2" className="article-item-buttons">
                    <Link to={link} className="btn">
                        Continue reading
                    </Link>
                </Typography>
                <footer className="article-item-footer">
                    {tagsSet === false ? (
                        <p className="article-item-time">
                            READING TIME: <span>{readingTime} MIN</span>
                        </p>
                    ) : (
                        <div className="tag-cloud-tags">
                            {tags.map((item, index) => (
                                <Link
                                    key={index}
                                    to="#"
                                    className="tag-cloud-link"
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>
                    )}
                    <p className="article-item-share">SHARE:</p>
                </footer>
            </CardContent>
            {tagsSet === false ? null : (
                <>
                    <div className="written-by">
                        <CardContent>
                            <div className="written-by-wrapper">
                                <div className="written-by-image">
                                    <img src={authorImage} alt="" />
                                </div>
                                <div className="written-by-info">
                                    <Typography
                                        variant="h3"
                                        component="h3"
                                        className="written-by-title"
                                    >
                                        WRITTEN BY {author}
                                    </Typography>
                                    <div className="written-by-text">
                                        {authorText}
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </div>
                    <Reviews categoryTitle={title} />
                </>
            )}
        </Card>
    )
}
export default ArticlesItem
