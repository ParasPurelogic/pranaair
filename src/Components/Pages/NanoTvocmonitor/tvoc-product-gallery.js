"use client"

import { useState } from "react"

export default function TVOCProductGallery() {
    const [activeImage, setActiveImage] = useState(0)

    const productImages = [
        "https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-nano-tvoc-hcho-odor-monitor.png",
        "https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-tvoc-odor-monitor.png",
        "https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-tvoc-odor-monitor-sideview.png",
        "https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-nano-tvoc-monitor-backview.png",
    ]

    const handleThumbnailClick = (index) => {
        setActiveImage(index)
    }

    return (
        <div className="col-lg-4 col-md-12 ipad">
            <div className="tabcontent disply" id="Comonitora">
                <img
                    src={productImages[activeImage] || "/placeholder.svg"}
                    alt="prana air nano tvoc hcho odor monitor"
                    className="img-fluid"
                />
            </div>
            <div className="tab">
                {productImages.map((image, index) => (
                    <button
                        key={index}
                        className={`tablinks ${activeImage === index ? "active" : ""}`}
                        onClick={() => handleThumbnailClick(index)}
                    >
                        <img src={image || "/placeholder.svg"} alt={`TVOC Monitor view ${index + 1}`} />
                    </button>
                ))}
            </div>
        </div>
    )
}
