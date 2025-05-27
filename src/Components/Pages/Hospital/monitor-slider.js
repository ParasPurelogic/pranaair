"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function MonitorCarousel({ monitorSlides = [] }) {
    return (
        <Carousel
            responsive={{
                all: {
                    breakpoint: { max: 4000, min: 0 },
                    items: 1,
                },
            }}
            infinite={true}
            showDots={true}
            arrows={true}
            keyBoardControl={true}
            customTransition="all .5s"
            transitionDuration={500}
            containerClass="monitor-carousel-container"
            dotListClass="monitor-carousel-dots"
            itemClass="monitor-carousel-item"
            partialVisible={false}
            centerMode={false}
        >
            {monitorSlides.map((monitor, index) => (
                <div key={index} className="monitor-slide">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="monitor-content">
                                <h3>{monitor.title}</h3>
                                <p>{monitor.description}</p>
                                <ul className="feature-list">
                                    {monitor.features.map((feature, i) => (
                                        <li key={i}>{feature}</li>
                                    ))}
                                </ul>
                                <div className="action-buttons">
                                    <a href="#" className="primary-button">
                                        Know More
                                    </a>
                                    {monitor.hasRentOption && (
                                        <a href="#" className="secondary-button">
                                            Looking to Rent?
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="monitor-image">
                                <img
                                    src={monitor.image || "/placeholder.svg"}
                                    alt={monitor.title}
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </Carousel>
    );
}
