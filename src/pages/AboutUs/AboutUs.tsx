import { Button, CardContent, Container, Typography } from '@mui/material'
import '../Pages.scss'
type Props = {}
const AboutUs = (props: Props) => {
    return (
        <main>
            <div className="main-content about-us">
                <Container maxWidth="lg">
                    <div className="about-us-content">
                        <CardContent>
                            <Typography
                                variant="h2"
                                component="h2"
                                className="title-h2"
                            >
                                About Us
                            </Typography>
                            <div className="description description-float">
                                <p>
                                    <span>L</span>
                                    orem ipsum dolor sit amet, consectetuer
                                    adipiscing elit, sed diam nonummy nibh
                                    euismod tincidunt ut laoreet dolore magna
                                    aliquam erat volutpat. Ut veniam, quis
                                    nostrud exerci tation ullamcorper suscipit
                                    lobortis nisl ut aliquip ex ea commodo
                                    consequat. Duis autem vel eum iriure dolor
                                    in hendrerit esse molestie consequat, vel
                                    illum dolore eu feugiat nulla facilisis at
                                    vero eros et accumsanet iusto odio dignissim
                                    qui blandit praesent. Nam liber tempor cum
                                    soluta nobis eleifend option congue nihil
                                    imperdiet doming id quod mazim placerat
                                    facer possim assum.
                                </p>
                            </div>
                            <div className="description">
                                <p>
                                    Duis autem vel eum iriure dolor in hendrerit
                                    in vulputate velit esse molestie consequat,
                                    vel illum dolore eu feugiat nulla facilisis
                                    at vero eros et accumsan et iusto odio
                                    dignissim qui blandit praesent luptatum
                                    zzril delenit augue duis dolore te feugait
                                    nulla facilisi.{' '}
                                    <strong>Nam liber tempor</strong> cum soluta
                                    nobis eleifend option congue nihil imperdiet
                                    doming id quod mazim placerat facer possim
                                    assum. Typi non habent claritatem insitam;
                                    est usus legentis in iis qui facit.
                                </p>
                            </div>
                            <form className="send-form">
                                <div className="send-form-content">
                                    <div className="send-form-group">
                                        <label
                                            htmlFor=""
                                            className="send-form-label"
                                        >
                                            Your Name <small>(required)</small>
                                        </label>
                                        <br />
                                        <input
                                            type="text"
                                            className="send-form-input"
                                            required
                                        />
                                    </div>
                                    <div className="send-form-group">
                                        <label
                                            htmlFor=""
                                            className="send-form-label"
                                        >
                                            Your Email <small>(required)</small>
                                        </label>
                                        <br />
                                        <input
                                            type="email"
                                            className="send-form-input"
                                            required
                                        />
                                    </div>
                                    <div className="send-form-group">
                                        <label
                                            htmlFor=""
                                            className="send-form-label"
                                        >
                                            Subject
                                        </label>
                                        <br />
                                        <input
                                            type="text"
                                            className="send-form-input"
                                        />
                                    </div>
                                    <div className="send-form-group">
                                        <label
                                            htmlFor=""
                                            className="send-form-label"
                                        >
                                            Your Message
                                        </label>
                                        <textarea className="send-form-input send-form-textarea"></textarea>
                                    </div>
                                    <Button
                                        type="submit"
                                        className="btn send-form-btn send-form-btn_black"
                                    >
                                        Send
                                    </Button>
                                </div>
                            </form>
                        </CardContent>
                    </div>
                </Container>
            </div>
        </main>
    )
}
export default AboutUs
