"use client"

export default function ProductImageTabs() {
    return (
        <div className="tabimgs">
            <div className="tab-content" id="productImageTabsContent">
                <div className="tab-pane fade show active" id="image1" role="tabpanel" aria-labelledby="image1-tab">
                    <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/07/prana-air-iaq-solution-machine-with-control-1024x467.jpg"
                        alt="prana-air-iaq-solution-machine-with-control"
                        className="main-product-image"
                    />
                </div>

                <div className="tab-pane fade" id="image2" role="tabpanel" aria-labelledby="image2-tab">
                    <img
                        src="https://www.pranaair.com/wp-content/uploads/2024/01/pranaair-fresher-air-machine-inner-parts.jpg"
                        alt="pranaair fresher air machine inner parts"
                        className="main-product-image"
                    />
                </div>

                <div className="tab-pane fade" id="image3" role="tabpanel" aria-labelledby="image3-tab">
                    <img
                        src="https://www.pranaair.com/wp-content/uploads/2024/01/fresher-air-filter-monitor.jpg"
                        alt="fresher air filter monitor"
                        className="main-product-image"
                    />
                </div>

                <div className="tab-pane fade" id="image4" role="tabpanel" aria-labelledby="image4-tab">
                    <img
                        src="https://www.pranaair.com/wp-content/uploads/2024/01/fresher-air-filter-layers.jpg"
                        alt="fresher air filter layers"
                        className="main-product-image"
                    />
                </div>

                <div className="tab-pane fade" id="image5" role="tabpanel" aria-labelledby="image5-tab">
                    <img
                        src="https://www.pranaair.com/wp-content/uploads/2024/01/fresher-air-filter.jpg"
                        alt="fresher air filter"
                        className="main-product-image"
                    />
                </div>

                <div className="tab-pane fade" id="image6" role="tabpanel" aria-labelledby="image6-tab">
                    <img
                        src="https://www.pranaair.com/wp-content/uploads/2024/01/prana-air-aqi-solution-inner.jpg"
                        alt="prana-air-aqi-solution-inner"
                        className="main-product-image"
                    />
                </div>
            </div>

            <ul className="nav nav-tabs product-thumbnails" id="productImageTabs" role="tablist">
                <li className="nav-item" role="presentation">
                    <button
                        className="nav-link active thumbnail-btn"
                        id="image1-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#image1"
                        type="button"
                        role="tab"
                        aria-controls="image1"
                        aria-selected="true"
                    >
                        <img
                            src="https://www.pranaair.com/wp-content/uploads/2023/07/prana-air-iaq-solution-machine-with-control-1024x467.jpg"
                            alt="prana-air-iaq-solution-machine-with-control"
                        />
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button
                        className="nav-link thumbnail-btn"
                        id="image2-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#image2"
                        type="button"
                        role="tab"
                        aria-controls="image2"
                        aria-selected="false"
                    >
                        <img
                            src="https://www.pranaair.com/wp-content/uploads/2024/01/pranaair-fresher-air-machine-inner-parts.jpg"
                            alt="pranaair fresher air machine inner parts"
                        />
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button
                        className="nav-link thumbnail-btn"
                        id="image3-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#image3"
                        type="button"
                        role="tab"
                        aria-controls="image3"
                        aria-selected="false"
                    >
                        <img
                            src="https://www.pranaair.com/wp-content/uploads/2024/01/fresher-air-filter-monitor.jpg"
                            alt="fresher air filter monitor"
                        />
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button
                        className="nav-link thumbnail-btn"
                        id="image4-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#image4"
                        type="button"
                        role="tab"
                        aria-controls="image4"
                        aria-selected="false"
                    >
                        <img
                            src="https://www.pranaair.com/wp-content/uploads/2024/01/fresher-air-filter-layers.jpg"
                            alt="fresher air filter layers"
                        />
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button
                        className="nav-link thumbnail-btn"
                        id="image5-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#image5"
                        type="button"
                        role="tab"
                        aria-controls="image5"
                        aria-selected="false"
                    >
                        <img
                            src="https://www.pranaair.com/wp-content/uploads/2024/01/fresher-air-filter.jpg"
                            alt="fresher air filter"
                        />
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button
                        className="nav-link thumbnail-btn"
                        id="image6-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#image6"
                        type="button"
                        role="tab"
                        aria-controls="image6"
                        aria-selected="false"
                    >
                        <img
                            src="https://www.pranaair.com/wp-content/uploads/2024/01/prana-air-aqi-solution-inner.jpg"
                            alt="prana-air-aqi-solution-inner"
                        />
                    </button>
                </li>
            </ul>
        </div>
    )
}
