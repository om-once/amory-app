import { Typography } from '@mui/material'
import PostsItem from './PostsItem'
import { recentPostsArray } from 'utils/recentPostsArray'
type Props = {}
const RecentPosts = (props: Props) => {
    return (
        <div className="box sidebar-item">
            <div className="content">
                <Typography variant="h3" component="h3" className="title-h3">
                    Recent POSTS
                </Typography>
                {recentPostsArray.map(({ id, title, date, image }) => (
                    <PostsItem
                        key={id}
                        id={id}
                        title={title}
                        date={date}
                        image={image}
                    />
                ))}
            </div>
        </div>
    )
}
export default RecentPosts
