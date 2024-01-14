import { Container, Grid } from '@mui/material'
import ArticlesItem from 'components/Articles/ArticlesItem'
import Sidebar from 'components/Sidebar/Sidebar'
import { ArticlesArray } from 'utils/articlesArray'
import './Article.scss'
type Props = {
    categoryTitle: string
}
const Article = ({ categoryTitle }: Props) => {
    return (
        <main>
            <div className="main-content article">
                <Container maxWidth="lg">
                    <Grid container spacing={3}>
                        <Grid item xs={8}>
                            <section className="articles">
                                <div className="articles-content">
                                    {ArticlesArray.filter(
                                        (item) => item.title === categoryTitle
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
                                                descriptionFull={
                                                    descriptionFull
                                                }
                                                descriptionSet={true}
                                                readingTime={readingTime}
                                                tagsSet={true}
                                                tags={tags}
                                                link={link}
                                                authorImage={authorImage}
                                                authorText={authorText}
                                            />
                                        )
                                    )}
                                </div>
                            </section>
                        </Grid>
                        <Grid item xs={4}>
                            <Sidebar />
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </main>
    )
}
export default Article