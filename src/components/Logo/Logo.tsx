import logo from '../../assets/logo.png'
import Typography from '@mui/material/Typography'
type Props = {}
const Logo = (props: Props) => {
    return (
        <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, textAlign: 'center', padding: '50px 0 40px 0' }}
        >
            <img src={logo} alt="" />
        </Typography>
    )
}
export default Logo
