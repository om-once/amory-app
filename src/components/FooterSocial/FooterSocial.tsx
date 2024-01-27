import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import Link from '@mui/material/Link'
import './FooterSocial.scss'
type Props = {}
const FooterSocial = (props: Props) => {
    return (
        <div className="footer-social">
            <Link
                href="https://twitter.com/"
                className="footer-social-link"
                target="_blank"
            >
                <FontAwesomeIcon
                    icon={icon({
                        name: 'twitter',
                        style: 'brands',
                    })}
                />
            </Link>
            <Link
                href="https://www.facebook.com/"
                className="footer-social-link"
                target="_blank"
            >
                <FontAwesomeIcon
                    icon={icon({
                        name: 'facebook-f',
                        style: 'brands',
                    })}
                />
            </Link>
            <Link
                href="https://dribbble.com/"
                className="footer-social-link"
                target="_blank"
            >
                <FontAwesomeIcon
                    icon={icon({
                        name: 'dribbble',
                        style: 'brands',
                    })}
                />
            </Link>
            <Link
                href="https://www.flickr.com/"
                className="footer-social-link"
                target="_blank"
            >
                <FontAwesomeIcon
                    icon={icon({ name: 'flickr', style: 'brands' })}
                />
            </Link>
            <Link
                href="https://pinterest.com/"
                className="footer-social-link"
                target="_blank"
            >
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
