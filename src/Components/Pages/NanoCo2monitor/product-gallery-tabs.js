
export default function ProductGalleryTabs() {
    const productImages = [
        "https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-nano-co2-monitor.png",
        "https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-co2-monitor.png",
        "https://www.pranaair.com/wp-content/uploads/2023/06/pranaa-air-nano-co2-device.png",
        "https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-nano-co2-monitor-backview.png",
    ]

    return (
        <div className="product-gallery">
            <div className="tab-content">
                {productImages.map((image, index) => (
                    <div
                        key={index}
                        className={`tab-pane fade ${index === 0 ? "show active" : ""}`}
                        id={`product-image-${index}`}
                        role="tabpanel"
                        aria-labelledby={`product-tab-${index}`}
                    >
                        <div className="main-image">
                            <img src={image || "/placeholder.svg"} alt={`Nano CO2 Monitor view ${index + 1}`} className="img-fluid" />
                        </div>
                    </div>
                ))}
            </div>

            <div className="thumbnails">
                <ul className="nav nav-tabs" role="tablist">
                    {productImages.map((image, index) => (
                        <li key={index} className="nav-item thumbnail" role="presentation">
                            <button
                                className={`nav-link ${index === 0 ? "active" : ""}`}
                                id={`product-tab-${index}`}
                                data-bs-toggle="tab"
                                data-bs-target={`#product-image-${index}`}
                                type="button"
                                role="tab"
                                aria-controls={`product-image-${index}`}
                                aria-selected={index === 0 ? "true" : "false"}
                            >
                                <img src={image || "/placeholder.svg"} alt={`Nano CO2 Monitor view ${index + 1}`} />
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
