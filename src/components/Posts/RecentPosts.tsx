import { Typography } from '@mui/material'
import PostsItem from './PostsItem'
import { ArticlesArray } from 'utils/articlesArray'
import moment from 'moment'
type Props = {}
const RecentPosts = (props: Props) => {
    return (
        <div className="box sidebar-item">
            <div className="content">
                <Typography variant="h3" component="h3" className="title-h3">
                    Recent POSTS
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
                    .map(({ id, title, date, imageSmall }) => (
                        <PostsItem
                            key={id}
                            id={id}
                            title={title}
                            date={date}
                            image={imageSmall}
                        />
                    ))
                    .slice(0, 3)}
            </div>
        </div>
    )
}
export default RecentPosts
