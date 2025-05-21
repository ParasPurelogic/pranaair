"use client"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

export default function ApplicationsSlider({ applications }) {
    const applicationResponsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
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
        <div className="row slider-inner">
            <div className="col-12">
                <Carousel
                    responsive={applicationResponsive}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={2500}
                    showDots={true}
                    className="app-slider"
                >
                    {applications.map((app) => (
                        <div className="app-card" key={app.id}>
                            <img src={app.image || "/placeholder.svg"} alt={app.alt} />
                            <h3>{app.title}</h3>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>

    )
}
