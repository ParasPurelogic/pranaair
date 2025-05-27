"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 4,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
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

export default function MeasureCarousel({ applications = [] }) {

    const items = applications.length > 0 ? applications : measureProducts;

    return (
        <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            className="product-slider"
        >
            {items.map((product, index) => (
                <div className="product-item" key={index}>
                    <Image
                        src={product.imageSrc || "/placeholder.svg"}
                        alt={product.imageAlt}
                        width={product.width || 300}
                        height={product.height || 300}
                    />
                    <h4>{product.title}</h4>
                    <p>{product.description}</p>
                </div>
            ))}
        </Carousel>
    );
}