import Link from '@mui/material/Link'
import Container from '@mui/material/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import DirectionsIcon from '@mui/icons-material/Directions'
type Props = {}
const TopWrapper = (props: Props) => {
    return (
        <div
            className="top-wrapper"
            style={{ backgroundColor: '#222', padding: '15px 0' }}
        >
            <Container maxWidth="lg">
                <div
                    className="top-wrapper-content"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '15px',
                    }}
                >
                    <div
                        className="social-top"
                        style={{
                            display: 'flex',
                            gap: '15px',
                        }}
                    >
                        <Link href="#">
                            <FontAwesomeIcon
                                style={{ color: 'fff', fontSize: '14px' }}
                                icon={icon({
                                    name: 'twitter',
                                    style: 'brands',
                                })}
                            />
                        </Link>
                        <Link href="#">
                            <FontAwesomeIcon
                                style={{ color: 'fff', fontSize: '14px' }}
                                icon={icon({
                                    name: 'facebook-f',
                                    style: 'brands',
                                })}
                            />
                        </Link>
                        <Link href="#">
                            <FontAwesomeIcon
                                style={{ color: 'fff', fontSize: '14px' }}
                                icon={icon({
                                    name: 'dribbble',
                                    style: 'brands',
                                })}
                            />
                        </Link>
                        <Link href="#">
                            <FontAwesomeIcon
                                style={{ color: 'fff', fontSize: '14px' }}
                                icon={icon({ name: 'flickr', style: 'brands' })}
                            />
                        </Link>
                        <Link href="#">
                            <FontAwesomeIcon
                                style={{ color: 'fff', fontSize: '14px' }}
                                icon={icon({
                                    name: 'pinterest',
                                    style: 'brands',
                                })}
                            />
                        </Link>
                    </div>

                    <div
                        className="search-top"
                        style={{
                            display: 'flex',
                        }}
                    >
                        <Paper
                            component="form"
                            sx={{
                                p: '2px 4px',
                                display: 'flex',
                                alignItems: 'center',
                                width: 215,
                                backgroundColor: 'transparent',
                            }}
                        >
                            <InputBase
                                sx={{ ml: 1, flex: 1, color: 'white' }}
                                placeholder="Search and hit enter..."
                                inputProps={{
                                    'aria-label': 'Search and hit enter...',
                                }}
                            />
                            <IconButton type="button" aria-label="search">
                                <SearchIcon style={{ color: '#fff' }} />
                            </IconButton>
                        </Paper>
                    </div>
                </div>
            </Container>
        </div>
    )
}
export default TopWrapper
