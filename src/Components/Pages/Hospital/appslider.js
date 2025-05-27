"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Responsive settings for different carousels
const appSliderResponsive = {
    all: {
        breakpoint: { max: 4000, min: 0 },
        items: 1,
    },
}

export default function AppCarousel({ appSlides = [] }) {
    return (
        <Carousel
            responsive={appSliderResponsive}
            infinite={true}
            showDots={false}
            arrows={true}
            keyBoardControl={true}
            customTransition="all .5s"
            transitionDuration={500}
            containerClass="app-carousel-container"
            partialVisible={false}
            centerMode={false}
        >
            {appSlides.map((app, index) => (
                <div key={index} className="app-slide">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="app-content">
                                <h3>{app.title}</h3>
                                <p>{app.description}</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="app-image">
                                <img src={app.image || "/placeholder.svg"} alt={app.title} className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </Carousel>
    );
}
