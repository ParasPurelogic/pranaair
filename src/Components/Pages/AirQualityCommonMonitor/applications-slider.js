"use client"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import Link from "@/Components/TranslateLink"
import { domain } from "@/config"

export default function ApplicationsSlider() {
    const responsive = {
        superLargeDesktop: { breakpoint: { max: 4000, min: 1200 }, items: 4 },
        desktop: { breakpoint: { max: 1200, min: 992 }, items: 3 },
        tablet: { breakpoint: { max: 992, min: 768 }, items: 2 },
        mobile: { breakpoint: { max: 768, min: 0 }, items: 1 },
    }

    return (
        <div className="app-slider-monitor">
            <Carousel responsive={responsive} infinite autoPlay autoPlaySpeed={6000}>
                {/* Slide 1 */}
                <div className="app-air-slider">
                    <Link href={`${domain}/solutions-by-application/smart-city`}>
                        <img src="https://www.pranaair.com/wp-content/uploads/2024/03/smart-city.jpg" alt="Smart City" />
                        <div className="require-content app-content">
                            <h3>Smart City</h3>
                        </div>
                    </Link>
                </div>

                {/* Slide 2 */}
                <div className="app-air-slider">
                    <Link href={`${domain}/solutions-by-application/institutes`}>
                        <img
                            src="https://www.pranaair.com/wp-content/uploads/2024/03/air-quality-solutions-for-real-estates.jpg"
                            alt="Air Quality for Schools"
                        />
                        <div className="require-content app-content">
                            <h3>Schools</h3>
                        </div>
                    </Link>
                </div>

                {/* Slide 3 */}
                <div className="app-air-slider">
                    <Link href={`${domain}/solutions-by-application/hospital`}>
                        <img
                            src="https://www.pranaair.com/wp-content/uploads/2024/03/smart-city.jpg"
                            alt="Air Quality for Hospitals"
                        />
                        <div className="require-content app-content">
                            <h3>Hospitals</h3>
                        </div>
                    </Link>
                </div>

                {/* Slide 4 */}
                <div className="app-air-slider">
                    <Link href={`${domain}/solutions-by-application/office`}>
                        <img
                            src="https://www.pranaair.com/wp-content/uploads/2024/03/air-quality-solutions-for-construction-sites.webp"
                            alt="Air Quality for Offices"
                        />
                        <div className="require-content app-content">
                            <h3>Offices</h3>
                        </div>
                    </Link>
                </div>
            </Carousel>
        </div>
    )
}
