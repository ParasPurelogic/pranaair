"use client";
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';

export default function SensiblePluseSlider() {
    // Carousel responsive settings
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 3,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };


    <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        className="new-slider"
    >
        <div className="slide-img">
            <img
                src="https://www.pranaair.com/wp-content/uploads/2021/05/aqi-web-dashboard-graph.png"
                alt="aqi-web-dashboard-graph.png"
            />
        </div>
        <div className="slide-img">
            <img
                src="https://www.pranaair.com/wp-content/uploads/2021/05/aqi-web-dashboard-monitor-data-comparison.png"
                alt="aqi-web-dashboard-monitor-data-comparison"
            />
        </div>
        <div className="slide-img">
            <img
                src="https://www.pranaair.com/wp-content/uploads/2021/05/aqi-web-dashboard-data-download.png"
                alt="aqi-web-dashboard-data-download"
            />
        </div>
        <div className="slide-img">
            <img
                src="https://www.pranaair.com/wp-content/uploads/2021/05/aqi-web-dashboard-monitor-data.png"
                alt="aqi-web-dashboard-monitor-data"
            />
        </div>
        <div className="slide-img">
            <img
                src="https://www.pranaair.com/wp-content/uploads/2021/05/aqi-web-dashboard-for-prana-air-monitor.png"
                alt="aqi-web-dashboard-for-prana-air-monitor"
            />
        </div>
        <div className="slide-img">
            <img
                src="https://www.pranaair.com/wp-content/uploads/2021/05/aqi-web-dashboard-home-screen.png"
                alt="aqi-web-dashboard-home-screen"
            />
        </div>
        <div className="slide-img">
            <img
                src="https://www.pranaair.com/wp-content/uploads/2021/05/aqi-web-dashboard-qr-code-scan.png"
                alt="aqi-web-dashboard-qr-code-scan"
            />
        </div>
    </Carousel>
}