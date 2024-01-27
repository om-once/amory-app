import Author from 'components/Author/Author'
import PopularPosts from 'components/Posts/PopularPosts'
import Categories from 'components/Categories/Categories'
import './Sidebar.scss'
import Subscribe from 'components/Subscribe/Subscribe'
import TagCloud from 'components/TagCloud/TagCloud'
import RecentPosts from 'components/Posts/RecentPosts'
import SearchWidget from 'components/SearchWidget/SearchWidget'
import Advertising from 'components/Advertising/Advertising'
import SocialWidget from 'components/SocialWidget/SocialWidget'
type Props = {}
const Sidebar = (props: Props) => {
    return (
        <aside className="sidebar">
            <Author />
            <PopularPosts />
            <Categories />
            <Subscribe />
            <TagCloud />
            <RecentPosts />
            <SearchWidget />
            <Advertising />
            <SocialWidget />
        </aside>
    )
}
export default Sidebar
