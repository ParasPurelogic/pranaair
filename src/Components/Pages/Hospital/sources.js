"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Responsive settings for different carousels
const sourcesResponsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 1200 },
        items: 3,
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

export default function SourcesCarousel({ pollutionSources = [] }) {
    return (
        <Carousel
            responsive={sourcesResponsive}
            infinite={true}
            showDots={true}
            arrows={true}
            keyBoardControl={true}
            customTransition="all .5s"
            transitionDuration={500}
            containerClass="sources-carousel-container"
            dotListClass="sources-carousel-dots"
            itemClass="sources-carousel-item"
            partialVisible={false}
            centerMode={false}
        >
            {pollutionSources.map((source, index) => (
                <div key={index} className="source-card">
                    <div className="source-image">
                        <img src={source.image || "/placeholder.svg"} alt={source.title} className="img-fluid" />
                    </div>
                    <div className="source-content">
                        <h3>{source.title}</h3>
                        <p>{source.description}</p>
                    </div>
                </div>
            ))}
        </Carousel>
    );
}
