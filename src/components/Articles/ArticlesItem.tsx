import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import './ArticlesItem.scss'
import { useState } from 'react'
import { ArticlesArray } from 'utils/articlesArray'
import Reviews from 'components/Reviews/Reviews'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt'
import { toggleLikeState } from 'store/likeReducer'
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
    liked: boolean
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
    liked
}: ArticlesItemType) => {
    const currentDate: Date = new Date()

    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
    }

    const formattedDate: string = currentDate.toLocaleDateString(
        'en-US',
        options
    )

    const [reviewsArray, setReviewsArray] = useState(
        ArticlesArray.filter((item) => item.title === title).flatMap(
            (item) => item.reviews
        )
    )
    const [newReview, setNewReview] = useState({
        reviewName: '',
        reviewText: '',
        reviewImage: '/images/written.jpg',
        reviewEmail: '',
        reviewWebsite: '',
        reviewDate: formattedDate,
    })
    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            reviewName: e.target.value,
        }))
    }

    const handleChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            reviewText: e.target.value,
        }))
    }

    const handleChangeMail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            reviewEmail: e.target.value,
        }))
    }

    const handleChangeWebsite = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            reviewWebsite: e.target.value,
        }))
    }

    const onSend = (e: React.FormEvent) => {
        e.preventDefault()
        setReviewsArray((prevState) => {
            return [...prevState, newReview]
        })
        setNewReview({
            reviewName: '',
            reviewText: '',
            reviewImage: '/images/written.jpg',
            reviewEmail: '',
            reviewWebsite: '',
            reviewDate: formattedDate,
        })
    }

    const isLiked = useAppSelector((state) => state.articlesLikeState[id])
    liked = isLiked
    const dispatch = useAppDispatch()

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
                        className="title-h2"
                    >
                        <Link to={link}>{title}</Link>
                    </Typography>
                    <div className="article-item-info">
                        <Link to={link}>{date}</Link>
                        <Link className="article-item-author" to="#">
                            by {author}
                        </Link>
                        <Link to="#">
                            {reviewsArray.length === 0
                                ? 'No'
                                : reviewsArray.length}{' '}
                            Comments
                        </Link>
                    </div>
                </header>
                <Link to={link} className="article-item-image">
                    {image !== '' && (
                        <CardMedia component="img" image={image} alt={title} />
                    )}
                </Link>
                <div
                    className="description"
                    dangerouslySetInnerHTML={{ __html: description }}
                ></div>
                {descriptionSet === true ? (
                    <div
                        className="description"
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
                    <p className="article-item-share">
                        <span>like:</span>
                        <button
                            className="like"
                            type="button"
                            onClick={() => dispatch(toggleLikeState(id))}
                        >
                            {liked ? (
                                <ThumbUpAltIcon />
                            ) : (
                                <ThumbUpOffAltIcon />
                            )}
                        </button>
                    </p>
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
                    <Reviews
                        reviewsArray={reviewsArray}
                        newReview={newReview}
                        handleChangeName={handleChangeName}
                        handleChangeText={handleChangeText}
                        handleChangeMail={handleChangeMail}
                        handleChangeWebsite={handleChangeWebsite}
                        onSend={onSend}
                    />
                </>
            )}
        </Card>
    )
}
export default ArticlesItem
