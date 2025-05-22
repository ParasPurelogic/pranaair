"use client"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

export default function CO2MonitorSlider({ nanocoSliderContent = [] }) {
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
            autoPlaySpeed={3000}
            className="home-slider"
            arrows={true}
        >
            {nanocoSliderContent.map((slide) => (
                <div key={slide.id}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-5 col-md-12">
                                <div className="slider-image">
                                    <img src={slide.image} alt={slide.heading} className="img-fluid" />
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-12">
                                <div className="slider-content">
                                    <h2>{slide.heading}</h2>
                                    <p>{slide.paragraph}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </Carousel>
    )
}
