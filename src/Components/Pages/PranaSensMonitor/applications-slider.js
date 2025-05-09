"use client"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

export default function ApplicationsSlider() {
    const applicationResponsive = {
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

    return (
        <section className="applications">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="app-heading">
                            <h2>Applications</h2>
                            <h3>Versatility in Every Application</h3>
                            <p>Monitor air quality with Prana Sense in diverse environments and needs.</p>
                        </div>
                    </div>
                    <div className="col-md-6"></div>
                </div>
                <div className="row slider-inner">
                    <div className="col-12">
                        <Carousel
                            responsive={applicationResponsive}
                            infinite={true}
                            autoPlay={true}
                            autoPlaySpeed={2500}
                            showDots={true}
                            className="app-slider"
                        >
                            <div className="app-card">
                                <img
                                    src="https://www.pranaair.com/wp-content/uploads/2024/09/construction-site.webp"
                                    alt="application of Prana Sense at Construction Sites"
                                />
                                <h3>Construction Site</h3>
                            </div>
                            <div className="app-card">
                                <img
                                    src="https://www.pranaair.com/wp-content/uploads/2024/09/Sea-Ports.webp"
                                    alt="Application of Prana Sense at Sea Ports"
                                />
                                <h3>Sea Ports</h3>
                            </div>
                            <div className="app-card">
                                <img
                                    src="https://www.pranaair.com/wp-content/uploads/2024/09/Schools-and-Universities.webp"
                                    alt="Application of Prana Sense at Schools and Universities"
                                />
                                <h3>Schools and Universities</h3>
                            </div>
                            <div className="app-card">
                                <img
                                    src="https://www.pranaair.com/wp-content/uploads/2024/09/Railways-and-Metros.webp"
                                    alt="Application of Prana Sense at Railways and metros"
                                />
                                <h3>Railways and Metros</h3>
                            </div>
                            <div className="app-card">
                                <img
                                    src="https://www.pranaair.com/wp-content/uploads/2024/09/Roads-And-Highways.webp"
                                    alt="Application of Prana Sense at Roads and Highways"
                                />
                                <h3>Roads And Highways</h3>
                            </div>
                            <div className="app-card">
                                <img
                                    src="https://www.pranaair.com/wp-content/uploads/2024/09/Industries.webp"
                                    alt="Application of Prana Sense at industries and factories"
                                />
                                <h3>Industries</h3>
                            </div>
                            <div className="app-card">
                                <img
                                    src="https://www.pranaair.com/wp-content/uploads/2024/09/Parking-Lots.webp"
                                    alt="Application of Prana Sense at Parking lots"
                                />
                                <h3>Parking Lots</h3>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </section>
    )
}
