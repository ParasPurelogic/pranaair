"use client"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
export default function PCBProductSlider({ activeTab, products }) {
    // Responsive settings for carousel
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
            items: 2,
        },
    }

    return (
        <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={3000}>
            {products.map((product) => (
                <div key={product.id} className="product-item">
                    <div className="product-image">
                        <img src={product.image || "/placeholder.svg"} alt={product.name} className="img-fluid" />
                    </div>
                    <div className="product-info">
                        <h4>{product.name}</h4>
                        <a href="#" className="btn btn-sm btn-outline-primary">
                            View Details
                        </a>
                    </div>
                </div>
            ))}
        </Carousel>
    )
}
