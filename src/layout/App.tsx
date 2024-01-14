import Header from './Header'
import Footer from './Footer'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import { Route, Routes } from 'react-router-dom'
import Home from 'pages/Home/Home'
import AboutUs from 'pages/AboutUs/AboutUs'
import Article from 'pages/Articles/Article'
import Category from 'pages/category/Category'
type Props = {}
const App = (props: Props) => {
    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route
                    path="/category/lifestyle"
                    element={
                        <Category
                            categoryPage="main-content lifestyle"
                            categoryType="lifestyle"
                        />
                    }
                />
                <Route
                    path="/category/editors-choise"
                    element={
                        <Category
                            categoryPage="main-content editors-choise"
                            categoryType="editor's choise"
                        />
                    }
                />
                <Route
                    path="/category/travel"
                    element={
                        <Category
                            categoryPage="main-content travel"
                            categoryType="travel"
                        />
                    }
                />
                <Route
                    path="/category/photography"
                    element={
                        <Category
                            categoryPage="main-content photography"
                            categoryType="photography"
                        />
                    }
                />
                <Route
                    path="/category/front-page-slideshow"
                    element={
                        <Category
                            categoryPage="main-content front-page-slideshow"
                            categoryType="front page slideshow"
                        />
                    }
                />
                <Route
                    path="/articles/how-to-become-your-own-boss"
                    element={
                        <Article categoryTitle="HOW TO BECOME YOUR OWN BOSS" />
                    }
                />
                <Route
                    path="/articles/a-perfect-suit-for-your-next-mitting"
                    element={
                        <Article categoryTitle="A PERFECT SUIT FOR YOUR NEXT MEETING" />
                    }
                />
                <Route
                    path="/articles/this-is-a-galery-post"
                    element={<Article categoryTitle="THIS IS A GALLERY POST" />}
                />
                <Route
                    path="/articles/this-is-a-video-post"
                    element={<Article categoryTitle="THIS IS A VIDEO POST" />}
                />
                <Route
                    path="/articles/get-your-beard-done-properly"
                    element={
                        <Article categoryTitle="GET YOUR BEARD DONE PROPERLY" />
                    }
                />
                <Route
                    path="/articles/best-breakfast-place-to-visit"
                    element={
                        <Article categoryTitle="BEST BREAKFAST PLACE TO VISIT" />
                    }
                />
                <Route
                    path="/articles/perfect-accessories"
                    element={<Article categoryTitle="PERFECT ACCESSORIES" />}
                />
                <Route
                    path="/articles/check-our-perfect-beard-styles"
                    element={
                        <Article categoryTitle="CHECK OUT PERFECT BEARD STYLES" />
                    }
                />
                <Route
                    path="/articles/long-bike-ride"
                    element={<Article categoryTitle="LONG BIKE RIDE" />}
                />
                <Route
                    path="/articles/prepare-food-like-a-chef"
                    element={
                        <Article categoryTitle="PREPARE FOOD LIKE A CHEF" />
                    }
                />
                <Route
                    path="/articles/this-is-audio-post"
                    element={<Article categoryTitle="THIS IS AUDIO POST" />}
                />
                <Route
                    path="/articles/out-trip-into-the-wild"
                    element={<Article categoryTitle="OUT TRIP INTO THE WILD" />}
                />
            </Routes>
            <Footer />
        </StyledEngineProvider>
    )
}
export default App
