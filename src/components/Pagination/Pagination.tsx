import { Link } from 'react-router-dom'
import './Pagination.scss'
type Props = {
    handlePageChange: (pageNumber: number) => void
    currentPage: number
    categoryName: string
    pageCount: number
}
const Pagination = ({
    currentPage,
    handlePageChange,
    categoryName,
    pageCount,
}: Props) => {
    return (
        <div className="pagination">
            {currentPage > 0 && (
                <Link
                    className="pagination-link"
                    to={
                        currentPage === 1
                            ? categoryName === 'All'
                                ? '/'
                                : `/category/${
                                      categoryName.includes("'")
                                          ? categoryName
                                                .replace(/ /g, '-')
                                                .replace(/'/g, '')
                                                .toLocaleLowerCase()
                                          : categoryName
                                                .replace(/ /g, '-')
                                                .toLocaleLowerCase()
                                  }/`
                            : categoryName === 'All'
                              ? `/?${currentPage}`
                              : `/category/${
                                    categoryName.includes("'")
                                        ? categoryName
                                              .replace(/ /g, '-')
                                              .replace(/'/g, '')
                                              .toLocaleLowerCase()
                                        : categoryName
                                              .replace(/ /g, '-')
                                              .toLocaleLowerCase()
                                }/?${currentPage}`
                    }
                    onClick={() => handlePageChange(currentPage - 1)}
                >
                    &laquo;
                </Link>
            )}

            {Array.from({ length: pageCount }, (_, index) => (
                <Link
                    key={index}
                    to={
                        index === 0
                            ? categoryName === 'All'
                                ? '/'
                                : `/category/${
                                      categoryName.includes("'")
                                          ? categoryName
                                                .replace(/ /g, '-')
                                                .replace(/'/g, '')
                                                .toLocaleLowerCase()
                                          : categoryName
                                                .replace(/ /g, '-')
                                                .toLocaleLowerCase()
                                  }/`
                            : categoryName === 'All'
                              ? `/?${index + 1}`
                              : `/category/${
                                    categoryName.includes("'")
                                        ? categoryName
                                              .replace(/ /g, '-')
                                              .replace(/'/g, '')
                                              .toLocaleLowerCase()
                                        : categoryName
                                              .replace(/ /g, '-')
                                              .toLocaleLowerCase()
                                }/?${index + 1}`
                    }
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
                    to={
                        categoryName === 'All'
                            ? `/?${currentPage + 2}`
                            : `/category/${
                                  categoryName.includes("'")
                                      ? categoryName
                                            .replace(/ /g, '-')
                                            .replace(/'/g, '')
                                            .toLocaleLowerCase()
                                      : categoryName
                                            .replace(/ /g, '-')
                                            .toLocaleLowerCase()
                              }/?${currentPage + 2}`
                    }
                    onClick={() => handlePageChange(currentPage + 1)}
                >
                    &raquo;
                </Link>
            )}
        </div>
    )
}
export default Pagination
