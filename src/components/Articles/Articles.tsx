import ArticlesItem from './ArticlesItem'
import { ArticlesArray } from 'utils/articlesArray'
type Props = {}
const Articles = (props: Props) => {
    return (
        <section className="articles">
            {ArticlesArray.map(
                ({
                    id,
                    category,
                    title,
                    date,
                    author,
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
                        date={date}
                        author={author}
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
