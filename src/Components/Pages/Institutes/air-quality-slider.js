"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const sliderQuality = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 1,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
    },
    tablet: {
        breakpoint: { max: 1024, min: 600 },
        items: 1,
    },
    mobile: {
        breakpoint: { max: 600, min: 0 },
        items: 1,
    },
};

export default function AppInstitutesCarousel({ industrialItems = [] }) {
    return (
        <Carousel
            responsive={sliderQuality}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={7000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
        >
            {industrialItems.map((item, index) => (
                <div className="item" key={index}>
                    <div className="slider_cntr">
                        <div className="slider_img_box">
                            <a href={item.knowMoreLink}>
                                <img
                                    style={{ width: "100%" }}
                                    src={item.image || "/placeholder.svg"}
                                    alt={item.imageAlt}
                                />
                            </a>
                        </div>
                        <div className="slider_details_box">
                            <h3 dangerouslySetInnerHTML={{ __html: item.title }}></h3>
                            <span>{item.description}</span>
                            <ul className="airquality_list">
                                {item.features.map((feature, idx) => (
                                    <li key={idx}>{feature}</li>
                                ))}
                            </ul>
                            <a
                                href={item.knowMoreLink}
                                className="knowmore_btn"
                            >
                                Know More
                            </a>
                            {item.hasRentOption && (
                                <a href="#" className="rent_btn">
                                    Looking to Rent?
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </Carousel>
    );
}
