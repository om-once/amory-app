import logo from '../../assets/logo.png'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import './Logo.scss'
type Props = {}
const Logo = (props: Props) => {
    return (
        <Typography
            className="logo"
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, textAlign: 'center', padding: '50px 0 40px 0' }}
        >
            <Link href="#">
                <img src={logo} alt="" />
            </Link>
        </Typography>
    )
}
export default Logo
