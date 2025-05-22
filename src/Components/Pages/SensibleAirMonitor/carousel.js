"use client";
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';

export default function SensibleSlider() {
    // Responsive settings for carousel
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };


    <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        showDots={true}
        className="gallery-carousel"
    >
        <div><img src="https://www.pranaair.com/wp-content/uploads/2021/03/prana-air-sensible-monitor-data-accuracy.png" alt="Gallery 1" className="img-fluid" /></div>
        <div><img src="https://www.pranaair.com/wp-content/uploads/2021/03/prana-air-sensible-monitor-data-comparision.png" alt="Gallery 2" className="img-fluid" /></div>
        <div><img src="https://www.pranaair.com/wp-content/uploads/2021/05/prana-air-sensible-monitor-accuracy-check.png" alt="Gallery 3" className="img-fluid" /></div>
        <div><img src="https://www.pranaair.com/wp-content/uploads/2021/03/dusttrak-and-prana-air-sensible-comparision.png" alt="Gallery 4" className="img-fluid" /></div>
    </Carousel>
}