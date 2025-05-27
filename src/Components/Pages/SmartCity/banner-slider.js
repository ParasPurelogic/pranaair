"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function SmartApplicationsCarousel({ applications = [] }) {

    // Use passed applications prop if available, otherwise use default data
    const items = applications.length > 0 ? applications : smartCitySlides;

    const renderTitle = (slide) => {
        const parts = slide.title.split(slide.titleHighlight);
        if (parts.length === 2) {
            return (
                <>
                    {parts[0]}
                    <span className="smart-city-txt">{slide.titleHighlight}</span>
                    {parts[1]}
                </>
            );
        }
        return slide.title;
    };

    return (
        <Carousel
            responsive={{
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
            }}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={6000}
            keyBoardControl={true}
            customTransition="all .5s"
            transitionDuration={500}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
        >
            {items.map((slide, index) => (
                <div className="slide" key={index}>
                    <div className="banner-content">
                        {slide.isMainHeading ? (
                            <h1>{renderTitle(slide)}</h1>
                        ) : (
                            <h2>{renderTitle(slide)}</h2>
                        )}
                        <p>{slide.subtitle}</p>
                        <a href={slide.buttonLink} className="banner-btn">
                            {slide.buttonText}
                        </a>
                    </div>
                    <img
                        className="slide-img"
                        src={slide.imageSrc || "/placeholder.svg"}
                        alt={slide.imageAlt}
                    />
                </div>
            ))}
        </Carousel>
    );
}