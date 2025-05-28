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
        items: 2
    },
    mobile: {
        breakpoint: { max: 768, min: 0 },
        items: 1
    }
};

export default function InstallCarousel() {
    return (
        <Carousel responsive={responsive} autoPlay={true} autoPlaySpeed={8000} infinite={true} showDots={true}>
            <div>
                <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/05/installed-of-prana-air-ambient-air-monitors-at-construction-site-2048x863.jpg"
                    alt="Installation of ambient monitors"
                    className="img-responsive"
                />
            </div>
            <div>
                <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/05/installed-of-prana-air-ambient-air-monitors-at-construction-site-2048x863.jpg"
                    alt="Installation of ambient monitors"
                    className="img-responsive"
                />
            </div>
            <div>
                <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/05/installed-prana-air-ambient-monitors-at-construction-site-1536x635.jpg"
                    alt="Installation of ambient monitors"
                    className="img-responsive"
                />
            </div>
            <div>
                <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/05/installed-prana-air-ambient-monitors-at-construction-site-1536x635.jpg"
                    alt="Installation of ambient monitors"
                    className="img-responsive"
                />
            </div>
        </Carousel>
    );
}
