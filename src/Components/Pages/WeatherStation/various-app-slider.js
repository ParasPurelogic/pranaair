"use client"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

export default function VeriouseSlider({ variousApplications = [] }) {

    const applicationsResponsive = {
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
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    }

    return (
        <Carousel
            responsive={applicationsResponsive}
            infinite={true}
            autoPlay={true}
            className="various-applications-slider">
            {variousApplications.map((app) => (
                <div className="various-applications-slider-img" key={app.id}>
                    <img
                        src={app.image || "/placeholder.svg"}
                        alt={app.alt}
                        onError={(e) => {
                            e.currentTarget.src = `/placeholder.svg?height=300&width=400&query=${app.title}`
                        }}
                    />
                    <h3>{app.title}</h3>
                    <p>{app.description}</p>
                </div>
            ))}
        </Carousel>
    )
}