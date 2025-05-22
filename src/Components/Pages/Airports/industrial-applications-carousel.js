"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 1440 },
        items: 4
    },
    desktop: {
        breakpoint: { max: 1440, min: 1024 },
        items: 3
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

export default function IndustrialApplicationsCarousel({ applications }) {
    return (
        <Carousel responsive={responsive}>
            {applications.map((app, index) => (
                <div key={index} className="app_service_box">
                    <div className="app_img_bx">
                        <a href={app.link}>
                            <img src={app.image || "/placeholder.svg"} alt={app.title} />
                        </a>
                    </div>
                    <a href={app.link}>
                        <h4>{app.title}</h4>
                    </a>
                </div>
            ))}
        </Carousel>
    );
}
