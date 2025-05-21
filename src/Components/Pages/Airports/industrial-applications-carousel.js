"use client"
import Carousel from "react-multi-carousel"
import { useCarousel } from "../CarousleReuse/use-carousel"

export default function IndustrialApplicationsCarousel({ applications }) {
    const { carouselProps } = useCarousel()

    return (
        <Carousel {...carouselProps}>
            {applications.map((app, index) => (
                <div key={index} className="app_service_box">
                    <div className="app_img_bx">
                        <a href={app.link}>
                            <img src={app.image || "/placeholder.svg"} alt={app.title} />
                        </a>
                    </div>
                    <a href={app.link}>
                        <h4>{app.title}</h4>
                    </a>
                </div>
            ))}
        </Carousel>
    )
}
