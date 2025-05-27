"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 1440 },
        items: 1
    },
    desktop: {
        breakpoint: { max: 1440, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 768 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 768, min: 0 },
        items: 1
    }
};

export default function RailwayApplicationsCarousel({ applications = [] }) {


    // Use passed applications prop if available, otherwise use default data
    const items = applications.length > 0 ? applications : railwayApplications;

    return (
        <section className="slider">
            <div className="container">
                <Carousel
                    responsive={responsive}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={7000}
                    keyBoardControl={true}
                    customTransition="all .5s"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                >
                    {items.map((item, index) => (
                        <div key={index}>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="slidder-txt">
                                        <img
                                            src={item.iconSrc || "/placeholder.svg"}
                                            alt={item.iconAlt}
                                        />
                                        <h3>{item.title}</h3>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="slider-img">
                                        <img
                                            src={item.imageSrc || "/placeholder.svg"}
                                            alt={item.imageAlt}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
        </section>
    );
}