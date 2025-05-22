"use client"
import Carousel from "react-multi-carousel/lib/Carousel"
import "react-multi-carousel/lib/styles.css"

export default function OxyGenslider({ appresponsive = [] }) {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
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
        <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={3000} className="app-slide">
            {appresponsive.map((app) => (
                <div className="app-img" key={app.id}>
                    <img src={app.image || "/placeholder.svg"} alt={app.alt} />
                    <h4>{app.title}</h4>
                </div>
            ))}
        </Carousel>
    )
}

