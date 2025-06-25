"use client"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

export default function FresherCarousel({ children, className, responsive, showDots = false, arrows = true, centerMode = false // default is false
}) {
    return (
        <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={false}
            autoPlaySpeed={3000}
            className={className}
            showDots={showDots}
            arrows={arrows}
            keyBoardControl={true}
            customTransition="all .8s"
            transitionDuration={1000}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding"
            centerMode={centerMode}
        >
            {children}
        </Carousel>
    )
}
