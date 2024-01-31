import ArticlesItem from 'components/Articles/ArticlesItem'
import { useAppSelector } from 'store/hooks'
import { ArticlesArray } from 'utils/articlesArray'

const LikedArticles = () => {
    const likedArticles = useAppSelector((state) =>
        Object.entries(state.articlesLikeState)
            .filter(([_, liked]) => liked)
            .map(([id]) => parseInt(id, 10))
    )
    return (
            <>
                {likedArticles.map((id) => {
                    const likedArticle = ArticlesArray.find(
                        (article) => article.id === id
                    )

                    if (!likedArticle) {
                        return null
                    }

                    return (
                        <ArticlesItem
                            key={likedArticle.id}
                            {...likedArticle}
                            liked={true}
                            descriptionSet={false}
                            tagsSet={false}
                        />
                    )
                })}
            </>
    )
}

export default LikedArticles
