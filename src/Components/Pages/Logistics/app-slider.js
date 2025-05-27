"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const appCarouselResponsive = {
    all: {
        breakpoint: { max: 4000, min: 0 },
        items: 1,
    },
}

export default function LogisticApplicationsCarousel({ appSlides = [] }) {
    return (
        <Carousel
            responsive={appCarouselResponsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={7000}
            keyBoardControl={true}
            customTransition="all .5s"
            transitionDuration={500}
            containerClass="app-carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="app-dot-list"
            itemClass="app-carousel-item"
            showDots={true}
        >
            {appSlides.map((slide, index) => (
                <div className="app-slide" key={index}>
                    <div className="app-slide-content">
                        <div className="app-slide-text">
                            <img
                                src={slide.iconSrc || "/placeholder.svg"}
                                alt={slide.iconAlt}
                                className="app-slide-icon"
                            />
                            <h3>{slide.title}</h3>
                            <p>{slide.description}</p>
                        </div>
                        <div className="app-slide-image">
                            <img
                                src={slide.imageSrc || "/placeholder.svg"}
                                alt={slide.imageAlt}
                            />
                        </div>
                    </div>
                </div>
            ))}
        </Carousel>
    );
}
