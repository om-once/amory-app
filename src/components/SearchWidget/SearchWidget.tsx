import { IconButton, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import './SearchWidget.scss'
type Props = {}
const SearchWidget = (props: Props) => {
    return (
        <div className="box sidebar-item seacrh-widget">
            <div className="content">
                <Typography variant="h3" component="h3" className="title-h3">
                    SEARCH
                </Typography>
                <form action="#" className="seacrh-widget-form">
                    <input
                        type="text"
                        className="seacrh-widget-input"
                        placeholder="search and hit enter..."
                    />
                    <IconButton
                        className="seacrh-widget-btn"
                        size="large"
                        aria-label="search"
                        color="inherit"
                    >
                        <SearchIcon />
                    </IconButton>
                </form>
            </div>
        </div>
    )
}
export default SearchWidget
