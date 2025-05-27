"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Responsive settings for different carousels
const healthImpactResponsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 1200 },
        items: 4,
    },
    desktop: {
        breakpoint: { max: 1200, min: 992 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 992, min: 576 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 576, min: 0 },
        items: 1,
    },
}

export default function HealthCarousel({ healthImpacts = [] }) {
    return (
        <Carousel
            responsive={healthImpactResponsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={5000}
            keyBoardControl={true}
            customTransition="all .5s"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            partialVisible={false}
            centerMode={false}
        >
            {healthImpacts.map((impact, index) => (
                <div key={index} className="health-impact-card">
                    <div className="impact-icon">
                        <img src={impact.icon || "/placeholder.svg"} alt={impact.title} />
                    </div>
                    <h3>{impact.title}</h3>
                    <p>{impact.description}</p>
                </div>
            ))}
        </Carousel>
    );
}
