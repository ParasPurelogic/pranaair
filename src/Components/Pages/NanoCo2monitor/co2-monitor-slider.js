"use client"

import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

export default function CO2MonitorSlider() {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    }

    return (
        <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            className="home-slider"
            arrows={true}
        >
            <div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-12">
                            <div className="slider-image">
                                <img
                                    src="https://www.pranaair.com/wp-content/uploads/2023/06/portable-nano-co2-monitor-of-prana-air.jpg"
                                    alt="portable nano co2 monitor of prana air"
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-12">
                            <div className="slider-content">
                                <h2>Small · Sleek · Reliable</h2>
                                <p>
                                    Our mini air quality monitor is a perfect companion for a healthier lifestyle. Stay informed about the
                                    air you breathe without the hassle of large and complicated equipment.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-12">
                            <div className="slider-image">
                                <img
                                    src="https://www.pranaair.com/wp-content/uploads/2023/06/easy-to-use-anywhere-prana-air-co2-monitor.jpg"
                                    alt="portable nano co2 monitor of prana air"
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-12">
                            <div className="slider-content">
                                <h2>Intelligent · Compact · Accurate</h2>
                                <p>
                                    Real-time monitoring of indoor CO2 levels allows you to make data-driven decisions to improve the air
                                    quality of your indoor environments!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Carousel>
    )
}
