"use client"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

export default function TVOCMonitorSlider({ tvocSliderContent = [] }) {
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
            {tvocSliderContent.map((slide) => (
                <div key={slide.id}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="home-slider">
                                    <div>
                                        <div className="row mob-revers">
                                            <div className="col-md-7 ipad">
                                                <div className="ac_slider_content">
                                                    <h2>{slide.heading}</h2>
                                                    <p>{slide.paragraph}</p>
                                                </div>
                                            </div>
                                            <div className="col-md-5 ipad">
                                                <div className="ac_slider_left_box">
                                                    <img src={slide.image} alt={slide.alt} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </Carousel>
    )
}
