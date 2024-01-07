import Header from './Header'
import Footer from './Footer'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from 'pages/Home/Home'
import AboutUs from 'pages/AboutUs/AboutUs'
import Lifestyle from 'pages/category/Lifestyle'
import EditorsChoise from 'pages/category/EditorsChoise'
import Travel from 'pages/category/Travel'
import Photography from 'pages/category/Photography'
import FrontPageSlideshow from 'pages/category/FrontPageSlideshow'
import ArticlesList from 'components/Pagination/Pagination'
type Props = {}
const App = (props: Props) => {
    // const useQuery = () => {
    //     return new URLSearchParams(useLocation().search)
    // }

    // const query = useQuery()
    // const page = parseInt(query.get('page') || '1', 10) - 1
    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about-us" element={<AboutUs />} />
                <Route path="category/lifestyle" element={<Lifestyle />} />
                <Route
                    path="category/editors-choise"
                    element={<EditorsChoise />}
                />
                <Route path="category/travel" element={<Travel />} />
                <Route path="category/photography" element={<Photography />} />
                <Route
                    path="category/front-page-slideshow"
                    element={<FrontPageSlideshow />}
                />
            </Routes>
            <Footer />
        </StyledEngineProvider>
    )
}
export default App
