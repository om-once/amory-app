import ArticlesItem from './ArticlesItem'
import { ArticleArray } from 'utils/articlesArray'
console.log(ArticleArray)
type Props = {}
const Articles = (props: Props) => {
    return (
        <section className="articles">
            {ArticleArray.map(
                ({
                    id,
                    category,
                    title,
                    postDate,
                    postAuthor,
                    comments,
                    image,
                    description,
                    readingTime,
                }) => (
                    <ArticlesItem
                        key={id}
                        id={id}
                        category={category}
                        title={title}
                        postDate={postDate}
                        postAuthor={postAuthor}
                        comments={comments}
                        image={image}
                        description={description}
                        readingTime={readingTime}
                    />
                )
            )}
        </section>
    )
}
export default Articles
