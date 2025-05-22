"use client"
import Image from "next/image"
import Link from "next/link"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

export default function CaseStudiesSlider({ caseStudies = [] }) {
    // Check if caseStudies is provided and not empty
    if (!caseStudies || caseStudies.length === 0) {
        return (
            <div className="no-case-studies">
                <p>No case studies available at the moment.</p>
            </div>
        )
    }

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
