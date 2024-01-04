import { Typography } from '@mui/material'
import { FacebookProvider, Like } from 'react-facebook'
type Props = {}
const ReactFacebook = (props: Props) => {
    return (
        <div className="box sidebar-item">
            <div className="content">
                <Typography variant="h3" component="h3" className="title-h3">
                    LIKE US ON FACEBOOK
                </Typography>
                <FacebookProvider appId="123456789">
                    <Like
                        href="https://www.facebook.com/PremiumCoding/?ref=embed_page"
                        colorScheme="dark"
                        showFaces
                        share
                    />
                </FacebookProvider>
            </div>
        </div>
    )
}
export default ReactFacebook
