import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import Link from '@mui/material/Link'
import './SocialTop.scss'
type Props = {}
const SocialTop = (props: Props) => {
    return (
        <div className="social-top">
            <Link href="https://twitter.com/" className="social-top-link">
                <FontAwesomeIcon
                    icon={icon({
                        name: 'twitter',
                        style: 'brands',
                    })}
                />
            </Link>
            <Link href="https://www.facebook.com/" className="social-top-link">
                <FontAwesomeIcon
                    icon={icon({
                        name: 'facebook-f',
                        style: 'brands',
                    })}
                />
            </Link>
            <Link href="https://dribbble.com/" className="social-top-link">
                <FontAwesomeIcon
                    icon={icon({
                        name: 'dribbble',
                        style: 'brands',
                    })}
                />
            </Link>
            <Link href="https://www.flickr.com/" className="social-top-link">
                <FontAwesomeIcon
                    icon={icon({ name: 'flickr', style: 'brands' })}
                />
            </Link>
            <Link href="https://pinterest.com/" className="social-top-link">
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
export default SocialTop
