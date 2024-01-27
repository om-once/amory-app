import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import './Author.scss'
type Props = {}
const Author = (props: Props) => {
    return (
        <Card className="box sidebar-item author">
            <CardContent className="content">
                <Typography variant="h3" component="h3" className="title-h3">
                    ABOUT ME
                </Typography>
                <CardMedia
                    className="author-img"
                    component="img"
                    image="/images/avatar1.jpg"
                    alt="green iguana"
                />
                <div className="author-description">
                    Hello, my name is <strong>Amory.</strong> I am a blogger
                    living in New York. This is my blog, where I post about my
                    lifestyle and traveling. Never miss out on new stuff.
                </div>
            </CardContent>
        </Card>
    )
}
export default Author
