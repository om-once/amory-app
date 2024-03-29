import {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    EffectFade,
} from 'swiper/modules'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/effect-fade'
import { Container, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation'
import './MainSlider.scss'
type Props = {}
const MainSlider = (props: Props) => {
    return (
        <Swiper
            className="main-slider"
            modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
            speed={1000}
            effect="fade"
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            navigation
        >
            <SwiperSlide>
                <div className="main-slider-slide">
                    <img
                        className="main-slider-image"
                        src="images/slide1.jpg"
                        alt=""
                    />
                    <Container maxWidth="lg">
                        <div className="main-slider-wrapper">
                            <div className="main-slider-content">
                                <p className="main-slider-date">
                                    December 4, 2012
                                </p>
                                <Typography
                                    className="main-slider-title"
                                    component="h1"
                                    variant="h1"
                                >
                                    <TypeAnimation
                                        sequence={[
                                            '',
                                            2000,
                                            'check out perfect beard styles',
                                            2000,
                                        ]}
                                        speed={10}
                                        repeat={Infinity}
                                    />
                                </Typography>
                                <Link
                                    to="/articles/check-our-perfect-beard-styles/"
                                    className="main-slider-btn"
                                >
                                    read more
                                </Link>
                            </div>
                        </div>
                    </Container>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="main-slider-slide">
                    <img
                        className="main-slider-image"
                        src="images/slide2.jpg"
                        alt=""
                    />
                    <Container maxWidth="lg">
                        <div className="main-slider-wrapper">
                            <div className="main-slider-content">
                                <p className="main-slider-date">
                                    January 3, 2013
                                </p>
                                <Typography
                                    className="main-slider-title"
                                    component="h1"
                                    variant="h1"
                                >
                                    <TypeAnimation
                                        sequence={[
                                            '',
                                            2000,
                                            'get your beard done properly',
                                            2000,
                                        ]}
                                        speed={10}
                                        repeat={Infinity}
                                    />
                                </Typography>
                                <Link
                                    to="/articles/get-your-beard-done-properly/"
                                    className="main-slider-btn"
                                >
                                    read more
                                </Link>
                            </div>
                        </div>
                    </Container>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="main-slider-slide">
                    <img
                        className="main-slider-image"
                        src="images/slide3.jpg"
                        alt=""
                    />
                    <Container maxWidth="lg">
                        <div className="main-slider-wrapper">
                            <div className="main-slider-content">
                                <p className="main-slider-date">May 23, 2014</p>
                                <Typography
                                    className="main-slider-title"
                                    component="h1"
                                    variant="h1"
                                >
                                    <TypeAnimation
                                        sequence={[
                                            '',
                                            2000,
                                            'a perfect suit for your next meeting',
                                            2000,
                                        ]}
                                        speed={10}
                                        repeat={Infinity}
                                    />
                                </Typography>
                                <Link
                                    to="/articles/a-perfect-suit-for-your-next-mitting/"
                                    className="main-slider-btn"
                                >
                                    read more
                                </Link>
                            </div>
                        </div>
                    </Container>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}
export default MainSlider
