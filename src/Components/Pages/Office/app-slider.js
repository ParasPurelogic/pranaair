"use client";
import Carousel from "react-multi-carousel";
import Image from "next/image";
import "react-multi-carousel/lib/styles.css";

export default function OfficeApplicationsCarousel({ officeProducts = [] }) {
    return (
        <Carousel
            responsive={{
                desktop: {
                    breakpoint: { max: 3000, min: 1024 },
                    items: 1,
                },
                tablet: {
                    breakpoint: { max: 1024, min: 464 },
                    items: 1,
                },
                mobile: {
                    breakpoint: { max: 464, min: 0 },
                    items: 1,
                },
            }}
            infinite={true}
            autoPlay={false}
            arrows={true}
            renderButtonGroupOutside={true}
            customLeftArrow={<button className="carousel-arrow left-arrow">‹</button>}
            customRightArrow={<button className="carousel-arrow right-arrow">›</button>}
        >
            {officeProducts.map((product, index) => (
                <div className="product-slide" key={index}>
                    <div className="product-content">
                        <div className="product-info">
                            <h3>{product.title}</h3>
                            <p>{product.description}</p>
                            <ul className="feature-list">
                                {product.features.map((feature, idx) => (
                                    <li key={idx}>{feature}</li>
                                ))}
                            </ul>
                            {product.hasRentOption ? (
                                <div className="button-group">
                                    <a className="know-more-btn" href={product.knowMoreLink}>
                                        Know More
                                    </a>
                                    <a className="rent-btn" href="#">
                                        Looking for Rent?
                                    </a>
                                </div>
                            ) : (
                                <a className="know-more-btn" href={product.knowMoreLink}>
                                    Know More
                                </a>
                            )}
                        </div>
                        <div className="product-image">
                            <Image
                                src={product.imageSrc || "/placeholder.svg"}
                                alt={product.imageAlt}
                                width={500}
                                height={400}
                                objectFit="contain"
                            />
                        </div>
                    </div>
                </div>
            ))}
        </Carousel>
    );
}
