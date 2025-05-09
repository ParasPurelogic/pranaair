"use client"

import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

export default function InstallationSlider() {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 4,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    }

    return (
        <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={3000} className="app-slider">
            <div>
                <div className="app-slide-img-box">
                    <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/12/prana-air-cair-air-quality-monitor.jpg"
                        alt="prana air cair air quality monitor"
                    />
                    <h3>
                        Cair+ monitors display various real-time air pollutants within the house. You can also know the outdoor AQI
                        to compare the level.
                    </h3>
                </div>
            </div>
            <div>
                <div className="app-slide-img-box">
                    <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/12/prana-air-cair-air-quality-monitor-clock.jpg"
                        alt="prana air cair air quality monitor clock"
                    />
                    <h3>Screen saver feature is present that shows the clock with pollutants as well.</h3>
                </div>
            </div>
            <div>
                <div className="app-slide-img-box">
                    <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/12/prana-air-cair-air-quality-monitor-graph.jpg"
                        alt="prana air cair air quality monitor graph"
                    />
                    <h3>Ensures the air quality trend in a day inside your room.</h3>
                </div>
            </div>
            <div>
                <div className="app-slide-img-box">
                    <img
                        src="https://www.pranaair.com/wp-content/uploads/2024/11/prana-air-cair-air-quality-monitor-parameters.webp"
                        alt="prana air cair air quality monitor parameters"
                    />
                    <h3>Displays the concentration of air pollutants in the air. To ensure the range from good to hazardous.</h3>
                </div>
            </div>
        </Carousel>
    )
}
