"use client"

import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

export default function ProductSlider({ responsive }) {
    const slides = [
        {
            number: "01",
            title: "Respiratory Relief",
            description: "Healthy respiratory environment for people with breathing difficulties.",
            image:
                "https://www.pranaair.com/wp-content/uploads/2023/06/use-of-prana-air-air-purifier-for-respiatory-issue.jpeg",
        },
        {
            number: "02",
            title: "Healthcare Facilities",
            description: "Provide additional protection in hospitals, clinics, and medical settings.",
            image: "https://www.pranaair.com/wp-content/uploads/2023/06/prana-purifier-use-in-gym.jpg",
        },
        {
            number: "03",
            title: "Shopping Malls/Retail Stores",
            description: "Breathe clean air while shopping or spending time in crowded areas.",
            image: "https://www.pranaair.com/wp-content/uploads/2023/06/use-of-prana-air-purifier-while-shopping.jpeg",
        },
        {
            number: "04",
            title: "Office Spaces",
            description: "Enhance productivity by breathing in purified air during work hours.",
            image: "https://www.pranaair.com/wp-content/uploads/2023/06/prana-purifier-use-in-office.jpg",
        },
        {
            number: "05",
            title: "Gyms/Fitness Centers",
            description: "Enhance productivity by breathing in purified air during work hours.",
            image: "https://www.pranaair.com/wp-content/uploads/2023/06/prana-purifier-use-in-gym.jpg",
        },
        {
            number: "06",
            title: "Classrooms",
            description: "Ensure clean air for students and educators to support concentration and well-being.",
            image: "https://www.pranaair.com/wp-content/uploads/2023/06/prana-purifier-use-in-classroom.jpg",
        },
        {
            number: "07",
            title: "Outdoor activity",
            description: "Enjoy fresh air during outdoor adventures, sports, or leisure activities.",
            image: "https://www.pranaair.com/wp-content/uploads/2023/06/prana-purifier-use-in-outdoor-activity.jpg",
        },
        {
            number: "08",
            title: "Airplane/Train Travel",
            description: "Enjoy fresh air during outdoor adventures, sports, or leisure activities.",
            image: "https://www.pranaair.com/wp-content/uploads/2023/06/prana-purifier-use-during-travel.jpg",
        },
    ]

    return (
        <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={4000}
            className="new-slider"
            arrows={false}
            showDots={true}
        >
            {slides.map((slide, index) => (
                <div key={index} className="customize-slider-img">
                    <h3>{slide.number}</h3>
                    <h4>{slide.title}</h4>
                    <p>{slide.description}</p>
                    <img src={slide.image || "/placeholder.svg"} alt={slide.title} />
                </div>
            ))}
        </Carousel>
    )
}
