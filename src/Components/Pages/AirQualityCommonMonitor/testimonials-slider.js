"use client"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

export default function TestimonialsSlider({ testimonials = [] }) {
    const customer = {
        superLargeDesktop: { breakpoint: { max: 4000, min: 1200 }, items: 3 },
        desktop: { breakpoint: { max: 1200, min: 992 }, items: 3 },
        tablet: { breakpoint: { max: 992, min: 768 }, items: 2 },
        mobile: { breakpoint: { max: 768, min: 0 }, items: 1 },
    }
    const renderStars = (rating) => {
        const stars = []
        for (let i = 0; i < rating; i++) {
            stars.push(
                <img
                    key={i}
                    src="https://www.pranaair.com/wp-content/uploads/2025/02/star.png"
                    alt="star"
                    onError={(e) => {
                        e.currentTarget.src = `/placeholder.svg?height=20&width=20&query=star`
                    }}
                />,
            )
        }
        return stars
    }
    return (
        <div className="app-slider-inner">
            <Carousel responsive={customer} infinite autoPlay autoPlaySpeed={6000}>
                {testimonials.map((testimonial) => (
                    <div className="review-img" key={testimonial.id}>
                        <div className="review-box">
                            <img
                                src="https://www.pranaair.com/wp-content/uploads/2025/02/quote-icon.png"
                                alt="quote"
                                onError={(e) => {
                                    e.currentTarget.src = `/placeholder.svg?height=30&width=30&query=quote`
                                }}
                            />
                            <p className="hide-txt">{testimonial.review}</p>
                            <ul>
                                <li>
                                    <h3>{testimonial.name}</h3>
                                </li>
                                <li>{renderStars(testimonial.rating)}</li>
                            </ul>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    )
}
