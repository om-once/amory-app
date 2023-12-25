import Paper from '@mui/material/Paper'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import './SearchTop.scss'
type Props = {}
const SearchTop = (props: Props) => {
    return (
        <div className="search-top">
            <Paper
                className="search-top-form"
                component="form"
                sx={{
                    p: '2px 4px',
                    display: 'flex',
                    alignItems: 'center',
                    width: 200,
                }}
            >
                <input
                    className="seach-top-input"
                    type="search"
                    placeholder="Search and hit enter..."
                />
                <IconButton
                    className="search-top-btn"
                    type="button"
                    sx={{ p: '10px' }}
                    aria-label="search"
                >
                    <SearchIcon />
                </IconButton>
            </Paper>
        </div>
    )
}
export default SearchTop
