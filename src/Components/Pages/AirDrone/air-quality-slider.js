"use client"
import Image from "next/image"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

export default function AirQualitySlider({ items = [] }) {
    // Carousel responsive settings
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
            items: 3,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    }

    return (
        <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={3000} className="app-slider">
            {items.map((item, index) => (
                <div key={index}>
                    <div className="app-slide-img-box">
                        <Image src={item.image || "/placeholder.svg"} alt={item.title} width={200} height={100} />
                        <h3>{item.title}</h3>
                    </div>
                </div>
            ))}
        </Carousel>
    )
}
