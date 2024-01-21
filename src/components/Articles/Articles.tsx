import { useEffect, useState } from 'react'
import ArticlesItem from './ArticlesItem'
import { ArticlesArray } from 'utils/articlesArray'
import Pagination from 'components/Pagination/Pagination'
type Props = {
    categoryName: string
    pageCount?: number
}
const Articles = ({ categoryName, pageCount }: Props) => {
    const itemsPerPage = 4
    const [currentPage, setCurrentPage] = useState(0)

    useEffect(() => {
        setCurrentPage(0)
    }, [categoryName])

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber)
    }

    const startIndex = currentPage * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const newArray =
        categoryName === 'All'
            ? ArticlesArray
            : ArticlesArray.filter((item) =>
                  item.category.find((cat) => cat === categoryName)
              )
    const paginatedItems = newArray.slice(startIndex, endIndex)
    pageCount = Math.ceil(newArray.length / itemsPerPage)
    return (
        <section className="articles">
            <div className="articles-content">
                {categoryName === 'All'
                    ? paginatedItems.map(
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
                    : paginatedItems
                          .filter((item) =>
                              item.category.find((cat) => cat === categoryName)
                          )
                          .map(
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
                {newArray.length >= 4 ? (
                    <Pagination
                        handlePageChange={handlePageChange}
                        currentPage={currentPage}
                        categoryName={categoryName}
                        pageCount={pageCount}
                    />
                ) : null}
            </div>
        </section>
    )
}
export default Articles
