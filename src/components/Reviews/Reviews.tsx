import { Button, CardContent, List, ListItem, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import './Reviews.scss'
import { ArticlesArray } from 'utils/articlesArray'
import { useState } from 'react'
import { Review } from 'utils/articlesArray'
type Props = {
    categoryTitle: string
}
const Reviews = ({ categoryTitle }: Props) => {
    const currentDate = new Date()

    const options = {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
    }

    const formattedDate = currentDate.toLocaleDateString(
        'en-US',
        options as Intl.DateTimeFormatOptions
    )
    const [articles, setArticles] = useState(
        ArticlesArray.filter((item) => item.title === categoryTitle).flatMap(
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
        setArticles((prevState) => {
            const updatedReviews = [...prevState, newReview]
            return updatedReviews as (Review | undefined)[]
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

    console.log(articles)

    return (
        <>
            {articles.length !== 0 ? (
                <div className="reviews">
                    <div className="reviews-wrapper">
                        <Typography
                            variant="h3"
                            component="h3"
                            className="reviews-title"
                        >
                            {articles.length} comments
                        </Typography>
                    </div>
                    <List className="reviews-list">
                        {articles.map((item, index) => (
                            <ListItem key={index} className="reviews-item">
                                <div className="reviews-item-wrapper">
                                    <div className="reviews-item-image">
                                        <img
                                            src={item?.reviewImage}
                                            alt={item?.reviewName}
                                        />
                                    </div>
                                    <div className="reviews-item-info">
                                        <Typography
                                            variant="h4"
                                            component="h4"
                                            className="reviews-item-title"
                                        >
                                            <Link to="">
                                                {item?.reviewName}
                                            </Link>
                                        </Typography>
                                        <p className="reviews-item-date">
                                            {item?.reviewDate}
                                        </p>
                                        <div className="reviews-item-text">
                                            {item?.reviewText}
                                        </div>
                                    </div>
                                </div>
                            </ListItem>
                        ))}
                    </List>
                </div>
            ) : null}
            <form onSubmit={onSend} className="reviews-form">
                <CardContent>
                    <div className="reviews-wrapper">
                        <Typography
                            variant="h3"
                            component="h3"
                            className="reviews-title"
                        >
                            LEAVE A COMMENT
                        </Typography>
                    </div>
                    <div className="reviews-form-content">
                        <div className="reviews-form-group">
                            <textarea
                                className="reviews-form-input reviews-form-textarea"
                                value={newReview.reviewText}
                                onChange={handleChangeText}
                            ></textarea>
                        </div>
                        <div className="reviews-form-group">
                            <label htmlFor="" className="reviews-form-label">
                                Name <small>(required)</small>
                            </label>
                            <br />
                            <input
                                type="text"
                                className="reviews-form-input"
                                required
                                onChange={handleChangeName}
                                value={newReview.reviewName}
                            />
                        </div>
                        <div className="reviews-form-group">
                            <label htmlFor="" className="reviews-form-label">
                                Mail <small>(required)</small>
                            </label>
                            <br />
                            <input
                                type="email"
                                className="reviews-form-input"
                                required
                                value={newReview.reviewEmail}
                                onChange={handleChangeMail}
                            />
                        </div>
                        <div className="reviews-form-group">
                            <label htmlFor="" className="reviews-form-label">
                                Website
                            </label>
                            <br />
                            <input
                                type="text"
                                className="reviews-form-input"
                                value={newReview.reviewWebsite}
                                onChange={handleChangeWebsite}
                            />
                        </div>
                        <Button type="submit" className="btn reviews-form-btn">
                            leave a comment
                        </Button>
                    </div>
                </CardContent>
            </form>
        </>
    )
}
export default Reviews
