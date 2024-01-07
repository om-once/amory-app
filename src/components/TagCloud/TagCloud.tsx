import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import './TagCloud.scss'
type Props = {}
const TagCloud = (props: Props) => {
    return (
        <div className="box sidebar-item tag-cloud">
            <div className="content">
                <Typography variant="h3" component="h3" className="title-h3">
                    TAG CLOUD
                </Typography>
                <div className="tag-cloud-tags">
                    <Link className="tag-cloud-link" to="#">
                        ACCESSORIES
                    </Link>
                    <Link className="tag-cloud-link" to="#">
                        AUDIO
                    </Link>
                    <Link className="tag-cloud-link" to="#">
                        bike
                    </Link>
                    <Link className="tag-cloud-link" to="#">
                        boss
                    </Link>
                    <Link className="tag-cloud-link" to="#">
                        chef
                    </Link>
                    <Link className="tag-cloud-link" to="#">
                        decor
                    </Link>
                    <Link className="tag-cloud-link" to="#">
                        dinner
                    </Link>
                    <Link className="tag-cloud-link" to="#">
                        farm
                    </Link>
                    <Link className="tag-cloud-link" to="#">
                        fashion
                    </Link>
                    <Link className="tag-cloud-link" to="#">
                        food
                    </Link>
                    <Link className="tag-cloud-link" to="#">
                        gallery
                    </Link>
                    <Link className="tag-cloud-link" to="#">
                        holidays
                    </Link>
                    <Link className="tag-cloud-link" to="#">
                        lifestyle
                    </Link>
                    <Link className="tag-cloud-link" to="#">
                        motorcycle
                    </Link>
                    <Link className="tag-cloud-link" to="#">
                        photography
                    </Link>
                    <Link className="tag-cloud-link" to="#">
                        post
                    </Link>
                    <Link className="tag-cloud-link" to="#">
                        shoes
                    </Link>
                    <Link className="tag-cloud-link" to="#">
                        travel
                    </Link>
                    <Link className="tag-cloud-link" to="#">
                        video
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default TagCloud
