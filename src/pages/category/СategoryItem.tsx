import { Container, Grid } from '@mui/material'
import Sidebar from 'components/Sidebar/Sidebar'
import ArticlesItem from 'components/Articles/ArticlesItem'
import { ArticlesArray } from 'utils/articlesArray'
type Props = {
    categoryItem: string
}
const СategoryItem = ({ categoryItem }: Props) => {
    return (
        <main>
            <div className="main-content home">
                <Container maxWidth="lg">
                    <Grid container spacing={3}>
                        <Grid item xs={8}>
                            <section className="articles">
                                {ArticlesArray.filter((item) =>
                                    item.category.find(
                                        (cat) => cat === categoryItem
                                    )
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
export default СategoryItem
