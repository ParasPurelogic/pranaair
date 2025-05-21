"use client"

import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

export default function ApplicationsSlider({ applications }) {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 3,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    }

    return (
        <Carousel responsive={responsive} infinite={true} className="applications-slider">
            {applications.map((app, index) => (
                <div key={index} className="application-card">
                    <div className="application-overlay">
                        <p>{app.description}</p>
                    </div>
                    <img src={app.image || "/placeholder.svg"} alt={app.title} />
                    <div className="application-title">{app.title}</div>
                </div>
            ))}
        </Carousel>
    )
}
