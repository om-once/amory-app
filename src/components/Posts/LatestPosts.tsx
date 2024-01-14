import { Typography } from '@mui/material'
import PostsItem from './PostsItem'
import { ArticlesArray } from 'utils/articlesArray'
import moment from 'moment'
type Props = {}
const LatestPosts = (props: Props) => {
    return (
        <div className="box sidebar-item">
            <div className="content">
                <Typography variant="h3" component="h3" className="title-h3">
                    Latest POSTS
                </Typography>
                {ArticlesArray.sort((a, b) => {
                    const dateA = moment(a.date, 'MMMM DD, YYYY')
                    const dateB = moment(b.date, 'MMMM DD, YYYY')

                    return dateB.isBefore(dateA)
                        ? -1
                        : dateB.isAfter(dateA)
                          ? 1
                          : 0
                })
                    .map(({ id, title, date, imageSmall, link }) => (
                        <PostsItem
                            key={id}
                            id={id}
                            title={title}
                            date={date}
                            image={imageSmall}
                            link={link}
                        />
                    ))
                    .slice(0, 2)}
            </div>
        </div>
    )
}
export default LatestPosts
