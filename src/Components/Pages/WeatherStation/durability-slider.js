"use client"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

export default function DurabilitySlider({ durabilityImages = [] }) {
    // Carousel responsive settings
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
            autoPlaySpeed={4000}
            className="durability-slider"
        >
            {durabilityImages.map((item) => (
                <div className="durability-slider-img" key={item.id}>
                    <img
                        className={item.className}
                        src={item.image || "/placeholder.svg"}
                        alt={item.alt}
                        onError={(e) => {
                            e.currentTarget.src = `/placeholder.svg?height=400&width=600&query=weather station`
                        }}
                    />
                </div>
            ))}
        </Carousel>
    )
}