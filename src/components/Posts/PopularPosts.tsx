import { Typography } from '@mui/material'
import PostsItem from './PostsItem'
import { ArticlesArray } from 'utils/articlesArray'
type Props = {}
const PopularPosts = (props: Props) => {
    return (
        <div className="box sidebar-item">
            <div className="content">
                <Typography variant="h3" component="h3" className="title-h3">
                    POPULAR POSTS
                </Typography>
                {ArticlesArray.filter((item) => item.isPopular === true).map(
                    ({ id, title, date, imageSmall, link }) => (
                        <PostsItem
                            key={id}
                            id={id}
                            title={title}
                            date={date}
                            image={imageSmall}
                            link={link}
                        />
                    )
                )}
            </div>
        </div>
    )
}
export default PopularPosts
