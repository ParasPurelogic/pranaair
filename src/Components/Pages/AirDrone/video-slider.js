"use client"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

export default function VideoSlider({ videoUrls = [] }) {
    const videoSlider = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 3,
            partialVisibilityGutter: 40,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            partialVisibilityGutter: 30,
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
        <Carousel responsive={videoSlider} infinite={true} autoPlay={true} autoPlaySpeed={4000} className="video-slider">
            {videoUrls.map((url, index) => (
                <div key={index}>
                    <div className="video-slider-img">
                        <iframe
                            width="100%"
                            height="100%"
                            src={url}
                            title="Video player"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            ))}
        </Carousel>
    )
}
