"use client"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

export default function AirQualitySensorSlider({ sensors = [] }) {
    const responsive = {
        superLargeDesktop: { breakpoint: { max: 4000, min: 1200 }, items: 3 },
        desktop: { breakpoint: { max: 1200, min: 992 }, items: 3 },
        tablet: { breakpoint: { max: 992, min: 768 }, items: 2 },
        mobile: { breakpoint: { max: 768, min: 0 }, items: 1 },
    }

    // Use passed sensors prop if available, otherwise use default data
    const items = sensors.length > 0 ? sensors : airQualitySensors

    return (
        <div className="app-sensor-slider-monitor">
            <Carousel responsive={responsive} infinite autoPlay autoPlaySpeed={6000}>
                {items.map((sensor, index) => (
                    <div className="app-air-sensor-slider" key={sensor.id || index}>
                        <div className="require-air-slider">
                            <div className="require-img">
                                <a href={sensor.sensorLink}>
                                    <img src={sensor.imageSrc || "/placeholder.svg"} alt={sensor.imageAlt} />
                                </a>
                            </div>
                            <div className="require-content">
                                <p>
                                    <span className="sensor">Air Sensor :</span>
                                </p>
                                <h3>
                                    <a href={sensor.sensorLink}>{sensor.sensorName}</a>
                                </h3>
                                <p>
                                    <span className="sensor">Operating Principle :</span>
                                </p>
                                <h3>{sensor.operatingPrinciple}</h3>
                                <p>{sensor.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    )
}
