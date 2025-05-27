"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const healthImpactResponsive = {
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

export default function HealthimpactCarousel({ applications = [] }) {
    const items = applications.length > 0 ? applications : healthImpacts;

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
        >
            {items.map((impact, index) => (
                <div className="health-impact-card" key={index}>
                    <div className="health-impact-icon">
                        <img
                            src={impact.iconSrc || "/placeholder.svg"}
                            alt={impact.iconAlt}
                        />
                    </div>
                    <h3>{impact.title}</h3>
                    <p>{impact.description}</p>
                </div>
            ))}
        </Carousel>
    );
}