import { Button, Typography } from '@mui/material'
import './Subscribe.scss'
type Props = {}
const Subscribe = (props: Props) => {
    return (
        <div className="sidebar-item subscribe">
            <div className="content">
                <Typography variant="h3" component="h3" className="title-h3">
                    Subscribe to our Newsletter
                </Typography>
                <p className="subscribe-text">
                    Sign up to receive updates and join our 1 subscribers that
                    see what's new with Amory!
                </p>
                <form action="#" className="subscribe-form">
                    <input
                        type="email"
                        className="subscribe-form-input"
                        placeholder="Enter Email Address ..."
                    />
                    <Button className="subscribe-form-btn">Sign up</Button>
                </form>
            </div>
        </div>
    )
}
export default Subscribe
