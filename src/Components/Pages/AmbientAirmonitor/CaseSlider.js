import Image from "next/image"
import Link from "next/link"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

export default function CaseStudiesSlider() {
    // Responsive settings for carousel
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
    }

    const caseStudies = [
        {
            image: "https://www.pranaair.com/wp-content/uploads/2023/10/air-quality-monitors-for-tata.webp",
            title: "Aided TATA STEEL Plant In Hyperlocal Air Monitoring",
            link: "https://www.pranaair.com/blog/case-study-prana-air-aids-tata-steel-in-hyperlocal-air-quality-monitoring/",
            alt: "prana air ambient air quality monitors at tata steel",
        },
        {
            image: "https://www.pranaair.com/wp-content/uploads/2023/10/air-quality-monitors-for-ola-and-microsoft.webp",
            title: "Aided Ola & Microsoft studied street-level pollution",
            link: "https://www.pranaair.com/blog/prana-air-monitors-street-level-pollution/",
            alt: "prana air ambient air quality monitors for ola and microsoft",
        },
        {
            image: "https://www.pranaair.com/wp-content/uploads/2023/10/air-quality-monitors-for-mahindra-lifespaces.webp",
            title: "Mahindra Lifespaces to monitor air pollution due to construction activities.",
            link: "https://www.pranaair.com/blog/mahindra-lifespaces-air-quality-due-to-construction-and-demolition-activities/",
            alt: "prana air ambient air quality monitors for mahindra lifespaces",
        },
        {
            image: "https://www.pranaair.com/wp-content/uploads/2023/10/air-quality-monitors-for-CII.webp",
            title: "CII to monitor air pollution due to stubble burning",
            link: "https://www.pranaair.com/blog/case-study-air-pollution-due-to-stubble-burning/",
            alt: "prana air ambient air quality monitors for CII",
        },
    ]

    return (
        <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            customTransition="transform 600ms ease-in-out"
            transitionDuration={600}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding"
        >
            {caseStudies.map((study, index) => (
                <div key={index} className="case-study-item">
                    <div className="slider-img">
                        <Link href={study.link}>
                            <Image
                                src={study.image || "/placeholder.svg"}
                                alt={study.alt}
                                width={400}
                                height={250}
                                className="img-fluid"
                            />
                        </Link>
                    </div>
                    <div className="slider-txrt">
                        <ul>
                            <li>
                                <h5>
                                    <Link href={study.link}>{study.title}</Link>
                                </h5>
                            </li>
                            <li>
                                <Image
                                    src="https://www.pranaair.com/wp-content/uploads/2023/10/arrow-ambient.png"
                                    alt="arrow"
                                    width={20}
                                    height={20}
                                />
                            </li>
                        </ul>
                    </div>
                </div>
            ))}
        </Carousel>
    )
}
