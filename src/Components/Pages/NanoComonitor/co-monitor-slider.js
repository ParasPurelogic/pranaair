"use client"

import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

export default function COMonitorSlider() {
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
            arrows={false}
        >
            <div>
                <div className="row">
                    <div className="col-md-5 ipad">
                        <div className="ac_slider_left_box">
                            <img
                                src="https://www.pranaair.com/wp-content/uploads/2023/05/prana-air-smart-real-time-portable-co-monitor.jpeg"
                                alt="real-time measuring of vehicle co emissions with prana air co monitor"
                            />
                        </div>
                    </div>
                    <div className="col-md-7 ipad">
                        <div className="ac_slider_content">
                            <h2>Portable · Easy to Carry</h2>
                            Prana Airs nano air quality monitor is designed to help you achieve a healthier lifestyle. With its
                            compact and user-friendly design, you can easily stay informed about the air you breathe without the need
                            for bulky and complex equipment.
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="row">
                    <div className="col-md-5 ipad">
                        <div className="ac_slider_left_box">
                            <img
                                src="https://www.pranaair.com/wp-content/uploads/2023/05/pocket-friendly-co-monitor.jpg"
                                alt="prana air pocket friendly co monitor"
                            />
                        </div>
                    </div>
                    <div className="col-md-7 ipad">
                        <div className="ac_slider_content">
                            <h2>Pocket-friendly · Lightweight</h2>
                            Real-time monitoring of CO levels allows you to make data-driven decisions to improve the air quality of
                            your surrounding environment!
                        </div>
                    </div>
                </div>
            </div>
        </Carousel>
    )
}
