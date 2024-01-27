import { Button, CardContent, List, ListItem, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import './Reviews.scss'
type Review = {
    reviewName: string
    reviewText: string
    reviewImage: string
    reviewDate: string
}
type NewReview = {
    reviewName: string
    reviewText: string
    reviewImage: string
    reviewEmail: string
    reviewWebsite: string
    reviewDate: string
}
type Props = {
    reviewsArray: Review[]
    newReview: NewReview
    handleChangeName: (e: React.ChangeEvent<HTMLInputElement>) => void
    handleChangeText: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
    handleChangeMail: (e: React.ChangeEvent<HTMLInputElement>) => void
    handleChangeWebsite: (e: React.ChangeEvent<HTMLInputElement>) => void
    onSend: (e: React.FormEvent) => void
}
const Reviews = ({
    reviewsArray,
    newReview,
    handleChangeName,
    handleChangeText,
    handleChangeMail,
    handleChangeWebsite,
    onSend,
}: Props) => {
    return (
        <>
            {reviewsArray.length !== 0 ? (
                <div className="reviews">
                    <div className="reviews-wrapper">
                        <Typography
                            variant="h3"
                            component="h3"
                            className="reviews-title"
                        >
                            {reviewsArray.length} comments
                        </Typography>
                    </div>
                    <List className="reviews-list">
                        {reviewsArray.map((item, index) => (
                            <ListItem className="reviews-item" key={index}>
                                <div className="reviews-item-wrapper">
                                    <div className="reviews-item-image">
                                        <img
                                            src={item.reviewImage}
                                            alt={item.reviewName}
                                        />
                                    </div>
                                    <div className="reviews-item-info">
                                        <Typography
                                            variant="h4"
                                            component="h4"
                                            className="reviews-item-title"
                                        >
                                            <Link to="">{item.reviewName}</Link>
                                        </Typography>
                                        <p className="reviews-item-date">
                                            {item.reviewDate}
                                        </p>
                                        <div className="reviews-item-text">
                                            {item.reviewText}
                                        </div>
                                    </div>
                                </div>
                            </ListItem>
                        ))}
                    </List>
                </div>
            ) : null}
            <form className="send-form" onSubmit={onSend}>
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
                    <div className="send-form-content">
                        <div className="send-form-group">
                            <textarea
                                className="send-form-input send-form-textarea"
                                onChange={handleChangeText}
                                value={newReview.reviewText}
                            ></textarea>
                        </div>
                        <div className="send-form-group">
                            <label htmlFor="" className="send-form-label">
                                Name <small>(required)</small>
                            </label>
                            <br />
                            <input
                                type="text"
                                className="send-form-input"
                                onChange={handleChangeName}
                                value={newReview.reviewName}
                                required
                            />
                        </div>
                        <div className="send-form-group">
                            <label htmlFor="" className="send-form-label">
                                Mail <small>(required)</small>
                            </label>
                            <br />
                            <input
                                type="email"
                                className="send-form-input"
                                onChange={handleChangeMail}
                                value={newReview.reviewEmail}
                                required
                            />
                        </div>
                        <div className="send-form-group">
                            <label htmlFor="" className="send-form-label">
                                Website
                            </label>
                            <br />
                            <input
                                type="text"
                                className="send-form-input"
                                onChange={handleChangeWebsite}
                                value={newReview.reviewWebsite}
                            />
                        </div>
                        <Button type="submit" className="btn send-form-btn">
                            leave a comment
                        </Button>
                    </div>
                </CardContent>
            </form>
        </>
    )
}
export default Reviews
