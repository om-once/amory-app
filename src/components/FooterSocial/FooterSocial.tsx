import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import Link from '@mui/material/Link'
import './FooterSocial.scss'
type Props = {}
const FooterSocial = (props: Props) => {
    return (
        <div className="footer-social">
            <Link href="#" className="footer-social-link">
                <FontAwesomeIcon
                    icon={icon({
                        name: 'twitter',
                        style: 'brands',
                    })}
                />
            </Link>
            <Link href="#" className="footer-social-link">
                <FontAwesomeIcon
                    icon={icon({
                        name: 'facebook-f',
                        style: 'brands',
                    })}
                />
            </Link>
            <Link href="#" className="footer-social-link">
                <FontAwesomeIcon
                    icon={icon({
                        name: 'dribbble',
                        style: 'brands',
                    })}
                />
            </Link>
            <Link href="#" className="footer-social-link">
                <FontAwesomeIcon
                    icon={icon({ name: 'flickr', style: 'brands' })}
                />
            </Link>
            <Link href="#" className="footer-social-link">
                <FontAwesomeIcon
                    icon={icon({
                        name: 'pinterest',
                        style: 'brands',
                    })}
                />
            </Link>
        </div>
    )
}
export default FooterSocial
