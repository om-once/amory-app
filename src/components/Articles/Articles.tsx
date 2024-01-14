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
                              image,
                              description,
                              descriptionFull,
                              readingTime,
                              tags,
                              link,
                              authorImage,
                              authorText,
                          }) => (
                              <ArticlesItem
                                  key={id}
                                  id={id}
                                  category={category}
                                  title={title}
                                  date={date}
                                  author={author}
                                  image={image}
                                  description={description}
                                  descriptionFull={descriptionFull}
                                  readingTime={readingTime}
                                  descriptionSet={false}
                                  tagsSet={false}
                                  tags={tags}
                                  link={link}
                                  authorImage={authorImage}
                                  authorText={authorText}
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
                              image,
                              description,
                              descriptionFull,
                              readingTime,
                              tags,
                              link,
                              authorImage,
                              authorText,
                          }) => (
                              <ArticlesItem
                                  key={id}
                                  id={id}
                                  category={category}
                                  title={title}
                                  date={date}
                                  author={author}
                                  image={image}
                                  description={description}
                                  descriptionFull={descriptionFull}
                                  readingTime={readingTime}
                                  descriptionSet={false}
                                  tagsSet={false}
                                  tags={tags}
                                  link={link}
                                  authorImage={authorImage}
                                  authorText={authorText}
                              />
                          )
                      )}
            </div>
        </section>
    )
}
export default Articles
