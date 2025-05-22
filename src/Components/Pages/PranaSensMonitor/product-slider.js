"use client"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

export default function ProductSlider() {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 2,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2,
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

    return (
        <section className="newslider-sec">
            <div className="container">
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-10">
                        <div
                            style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden", width: "100%" }}
                        >
                            <iframe
                                src="https://www.youtube.com/embed/XniUY8nRFD4?autoplay=1&loop=1&playlist=XniUY8nRFD4&controls=0&vq=hd1080&mute=1"
                                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", borderRadius: "20px" }}
                                frameBorder="0"
                                allow="autoplay; encrypted-media"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <Carousel
                            responsive={responsive}
                            infinite={true}
                            autoPlay={true}
                            autoPlaySpeed={6000}
                            showDots={true}
                            className="video-slider"
                            centerMode={true}
                            focusOnSelect={true}
                        >
                            <div className="air-quality-monitor-manufacturing">
                                <img
                                    src="https://www.pranaair.com/wp-content/uploads/2024/10/prana-sense-and-its-pcb.jpg"
                                    alt="Prana sense and its PCB"
                                />
                            </div>
                            <div className="air-quality-monitor-manufacturing">
                                <img
                                    src="https://www.pranaair.com/wp-content/uploads/2024/10/internal-parts-of-prana-sense-monitor.jpg"
                                    alt="Internal parts of Prana sense monitor"
                                />
                            </div>
                            <div className="air-quality-monitor-manufacturing">
                                <img
                                    src="https://www.pranaair.com/wp-content/uploads/2024/10/assembling-prana-sense-monitor.jpg"
                                    alt="Assembling Prana sense monitor"
                                />
                            </div>
                            <div className="air-quality-monitor-manufacturing">
                                <img
                                    src="https://www.pranaair.com/wp-content/uploads/2024/10/air-quality-sensors-of-prana-sense-monitor.jpg"
                                    alt="Air quality sensors of Prana sense monitor"
                                />
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </section>
    )
}
