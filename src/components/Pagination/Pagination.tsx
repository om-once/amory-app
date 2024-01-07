import { useState } from 'react'
import { Link } from 'react-router-dom'
import ArticlesItem from 'components/Articles/ArticlesItem'
import { ArticlesArray } from 'utils/articlesArray'
import './Pagination.scss'
type Props = {
    categoryName: string
}
const Pagination = ({ categoryName }: Props) => {
    const itemsPerPage = 4
    const [currentPage, setCurrentPage] = useState(0)

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber)
    }

    const startIndex = currentPage * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const paginatedItems = ArticlesArray.slice(startIndex, endIndex)

    const renderedItems = paginatedItems.map(
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

    const pageCount = Math.ceil(ArticlesArray.length / itemsPerPage)

    return (
        <div>
            {renderedItems}
            <div className="pagination">
                {currentPage > 0 && (
                    <Link
                        className="pagination-link"
                        to={`/?page=${currentPage}`}
                        onClick={() => handlePageChange(currentPage - 1)}
                    >
                        &laquo;
                    </Link>
                )}

                {Array.from({ length: pageCount }, (_, index) => (
                    <Link
                        key={index}
                        to={`/?page=${index + 1}`}
                        onClick={() => handlePageChange(index)}
                        className={
                            currentPage === index
                                ? 'pagination-link active'
                                : 'pagination-link'
                        }
                    >
                        {index + 1}
                    </Link>
                ))}

                {currentPage < pageCount - 1 && (
                    <Link
                        className="pagination-link"
                        to={`/?page=${currentPage + 2}`}
                        onClick={() => handlePageChange(currentPage + 1)}
                    >
                        &raquo;
                    </Link>
                )}
            </div>
        </div>
    )
}

export default Pagination
