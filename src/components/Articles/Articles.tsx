import ArticlesItem from './ArticlesItem'
import { ArticlesArray } from 'utils/articlesArray'
type Props = {
    categoryName: string
}
const Articles = ({ categoryName }: Props) => {
    return (
        <section className="articles">
            <div className="articles-content">
                {categoryName === 'All'
                    ? ArticlesArray.map(
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
                      )
                    : ArticlesArray.filter((item) =>
                          item.category.find((cat) => cat === categoryName)
                      ).map(
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
            </div>
        </section>
    )
}
export default Articles
