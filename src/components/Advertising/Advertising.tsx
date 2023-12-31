import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import './Advertising.scss'
type Props = {}
const Advertising = (props: Props) => {
    return (
        <div className="box sidebar-item advertising">
            <div className="content">
                <Typography variant="h3" component="h3" className="title-h3">
                    ADVERTISING 125x125
                </Typography>
                <div className="advertising-block">
                    <Link to="#" className="advertising-link"></Link>
                    <Link to="#" className="advertising-link"></Link>
                    <Link to="#" className="advertising-link"></Link>
                    <Link to="#" className="advertising-link"></Link>
                </div>
            </div>
        </div>
    )
}
export default Advertising
