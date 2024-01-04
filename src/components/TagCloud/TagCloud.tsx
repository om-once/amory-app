import { Typography, Link } from '@mui/material'
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
                    <Link className="tag-cloud-link" href="#" underline="none">
                        ACCESSORIES
                    </Link>
                    <Link className="tag-cloud-link" href="#" underline="none">
                        AUDIO
                    </Link>
                    <Link className="tag-cloud-link" href="#" underline="none">
                        bike
                    </Link>
                    <Link className="tag-cloud-link" href="#" underline="none">
                        boss
                    </Link>
                    <Link className="tag-cloud-link" href="#" underline="none">
                        chef
                    </Link>
                    <Link className="tag-cloud-link" href="#" underline="none">
                        decor
                    </Link>
                    <Link className="tag-cloud-link" href="#" underline="none">
                        dinner
                    </Link>
                    <Link className="tag-cloud-link" href="#" underline="none">
                        farm
                    </Link>
                    <Link className="tag-cloud-link" href="#" underline="none">
                        fashion
                    </Link>
                    <Link className="tag-cloud-link" href="#" underline="none">
                        food
                    </Link>
                    <Link className="tag-cloud-link" href="#" underline="none">
                        gallery
                    </Link>
                    <Link className="tag-cloud-link" href="#" underline="none">
                        holidays
                    </Link>
                    <Link className="tag-cloud-link" href="#" underline="none">
                        lifestyle
                    </Link>
                    <Link className="tag-cloud-link" href="#" underline="none">
                        motorcycle
                    </Link>
                    <Link className="tag-cloud-link" href="#" underline="none">
                        photography
                    </Link>
                    <Link className="tag-cloud-link" href="#" underline="none">
                        post
                    </Link>
                    <Link className="tag-cloud-link" href="#" underline="none">
                        shoes
                    </Link>
                    <Link className="tag-cloud-link" href="#" underline="none">
                        travel
                    </Link>
                    <Link className="tag-cloud-link" href="#" underline="none">
                        video
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default TagCloud
