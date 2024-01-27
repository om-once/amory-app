import { Typography } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import Link from '@mui/material/Link'
import './SocialWidget.scss'
type Props = {}
const SocialWidget = (props: Props) => {
    return (
        <div className="box sidebar-item social-widget">
            <div className="content">
                <Typography variant="h3" component="h3" className="title-h3">
                    GET SOCIAL
                </Typography>
                <div className="social-widget-block">
                    <Link
                        href="https://twitter.com/"
                        className="social-widget-link"
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
                        className="social-widget-link"
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
                        className="social-widget-link"
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
                        className="social-widget-link"
                        target="_blank"
                    >
                        <FontAwesomeIcon
                            icon={icon({ name: 'flickr', style: 'brands' })}
                        />
                    </Link>
                    <Link
                        href="https://pinterest.com/"
                        className="social-widget-link"
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
            </div>
        </div>
    )
}
export default SocialWidget
