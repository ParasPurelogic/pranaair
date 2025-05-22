"use client"

import { useEffect } from "react"
import "react-multi-carousel/lib/styles.css"
import Carousel from "react-multi-carousel"

export default function ProductImageSlider({ images, initialSlide = 0 }) {
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

    const thumbnailResponsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 6,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 4,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 3,
        },
    }

    let mainCarousel = null
    let thumbnailCarousel = null

    useEffect(() => {
        if (mainCarousel && thumbnailCarousel) {
            mainCarousel.goToSlide(initialSlide)
            thumbnailCarousel.goToSlide(initialSlide)
        }
    }, [initialSlide])

    const syncCarousels = (currentSlide) => {
        if (thumbnailCarousel) {
            thumbnailCarousel.goToSlide(currentSlide)
        }
    }

    const handleThumbnailClick = (index) => {
        if (mainCarousel) {
            mainCarousel.goToSlide(index)
        }
    }

    return (
        <div className="product-slider">
            <Carousel
                responsive={responsive}
                infinite={true}
                ref={(el) => (mainCarousel = el)}
                afterChange={(nextSlide) => syncCarousels(nextSlide)}
                className="main-carousel"
            >
                {images.map((image, index) => (
                    <div key={index} className="carousel-item">
                        <img src={image.src || "/placeholder.svg"} alt={image.alt} className="main-product-image" />
                    </div>
                ))}
            </Carousel>

            <Carousel
                responsive={thumbnailResponsive}
                infinite={true}
                ref={(el) => (thumbnailCarousel = el)}
                className="thumbnail-carousel"
            >
                {images.map((image, index) => (
                    <div key={index} className="thumbnail-item" onClick={() => handleThumbnailClick(index)}>
                        <img src={image.src || "/placeholder.svg"} alt={image.alt} />
                    </div>
                ))}
            </Carousel>
        </div>
    )
}
