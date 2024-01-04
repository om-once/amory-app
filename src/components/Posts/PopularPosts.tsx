import { Typography } from '@mui/material'
import PostsItem from './PostsItem'
import { popularPostsArray } from 'utils/popularPostsArray'
type Props = {}
const PopularPosts = (props: Props) => {
    return (
        <div className="box sidebar-item">
            <div className="content">
                <Typography variant="h3" component="h3" className="title-h3">
                    POPULAR POSTS
                </Typography>
                {popularPostsArray.map(({ id, title, date, image }) => (
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
export default PopularPosts
