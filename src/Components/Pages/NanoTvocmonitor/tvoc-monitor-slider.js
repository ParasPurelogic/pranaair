"use client"

import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

export default function TVOCMonitorSlider() {
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
                    <div className="row">
                        <div className="col-md-12">
                            <div className="home-slider">
                                <div>
                                    <div className="row mob-revers">
                                        <div className="col-md-7 ipad">
                                            <div className="ac_slider_content">
                                                <h2>Accurate · Compact · Reliable</h2>
                                                <p>
                                                    Experience the convenience of this sleek and compact TVOC monitoring device, which eliminates
                                                    the need for bulky and complex equipment. With its reliable data on indoor air quality you
                                                    can stay informed and take control of your environment effortlessly.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-md-5 ipad">
                                            <div className="ac_slider_left_box">
                                                <img
                                                    src="https://www.pranaair.com/wp-content/uploads/2023/05/prana-air-nano-odor-tvoc-monitor-with-real-time-data.jpeg"
                                                    alt="prana air nano odor tvoc monitor with real-time data"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="home-slider">
                                <div>
                                    <div className="row mob-revers">
                                        <div className="col-md-7 ipad">
                                            <div className="ac_slider_content">
                                                <h2>Versatile · Convenient · Sleek</h2>
                                                <p>
                                                    Experience the ultimate in practicality and versatility with our sleek and convenient TVOC
                                                    pocket monitor. From tracking indoor air quality to adapting to different air quality
                                                    environments its the must-have device for effortless monitoring wherever you go.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-md-5 ipad">
                                            <div className="ac_slider_left_box">
                                                <img
                                                    src="https://www.pranaair.com/wp-content/uploads/2023/05/portable-nano-tvoc-hcho-monitor.jpg"
                                                    alt="prana air nano odor tvoc monitor with real-time data"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Carousel>
    )
}
