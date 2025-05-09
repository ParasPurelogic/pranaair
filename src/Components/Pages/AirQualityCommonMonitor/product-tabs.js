"use client"

export default function ProductTabs() {
    return (
        <div className="product-tabs">
            <ul className="nav nav-tabs" id="product-tabs-nav" role="tablist">
                <li className="nav-item" role="presentation">
                    <button
                        className="nav-link active"
                        id="handheld-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#handheld"
                        type="button"
                        role="tab"
                        aria-controls="handheld"
                        aria-selected="true"
                    >
                        Handheld
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button
                        className="nav-link"
                        id="indoor-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#indoor"
                        type="button"
                        role="tab"
                        aria-controls="indoor"
                        aria-selected="false"
                    >
                        Indoor
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button
                        className="nav-link"
                        id="outdoor-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#outdoor"
                        type="button"
                        role="tab"
                        aria-controls="outdoor"
                        aria-selected="false"
                    >
                        Outdoor
                    </button>
                </li>
            </ul>

            <div className="tab-content">
                <div className="tab-pane fade show active" id="handheld" role="tabpanel" aria-labelledby="handheld-tab">
                    <div className="row tab-card">
                        <div className="col-md-4">
                            <div className="prdocut-card">
                                <div className="arrow-link">
                                    <img src="https://www.pranaair.com/wp-content/uploads/2024/02/card-arrow.png" alt="icon" />
                                </div>
                                <div className="card-img">
                                    <span className="in-outdoor">Handheld</span>
                                    <a href="/air-quality-monitor/pocket-co2-monitor/">
                                        <img
                                            src="https://www.pranaair.com/wp-content/uploads/2024/03/Pocket-Co2.png"
                                            alt="prana air pocket co2 monitor"
                                        />
                                    </a>
                                </div>
                                <div className="card-text">
                                    <a href="/air-quality-monitor/pocket-co2-monitor/">Pocket CO2 Monitor</a>
                                    <ul>
                                        <li>
                                            <span className="coast">₹4,999</span>
                                        </li>
                                        <li>
                                            <img
                                                src="https://www.pranaair.com/wp-content/uploads/2024/02/card-rating.png"
                                                alt="card-rating"
                                            />
                                        </li>
                                    </ul>
                                    <ul>
                                        <li>
                                            <h5>Connectivity :</h5>
                                            <h4>WiFi</h4>
                                        </li>
                                        <li>
                                            <h5>Battery :</h5>
                                            <h4>400 mAh</h4>
                                        </li>
                                    </ul>
                                </div>
                                <div className="card-btn">
                                    <form
                                        className="cart"
                                        action="https://www.pranaair.com/product/pocket-co2-monitor/"
                                        encType="multipart/form-data"
                                        method="post"
                                    >
                                        {" "}
                                        <button
                                            className="single_add_to_cart_button button alt monitor_know_btn monitor_card_btn"
                                            name="add-to-cart"
                                            type="submit"
                                            value="52265"
                                        >
                                            Buy Now <img src="https://www.pranaair.com/wp-content/uploads/2024/02/card-btn-icon.png" alt="" />
                                        </button>{" "}
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="prdocut-card">
                                <div className="arrow-link">
                                    <img src="https://www.pranaair.com/wp-content/uploads/2024/02/card-arrow.png" alt="" />
                                </div>
                                <div className="card-img">
                                    <span className="in-outdoor">Handheld</span>
                                    <a href="/air-quality-monitor/handheld/pocket-monitor/">
                                        <img
                                            src="https://www.pranaair.com/wp-content/uploads/2024/03/Pocket-PM.png"
                                            alt="prana air pocket pm2.5 monitor"
                                        />
                                    </a>
                                </div>
                                <div className="card-text">
                                    <a href="/air-quality-monitor/handheld/pocket-monitor/">Pocket PM2.5 Monitor</a>
                                    <ul>
                                        <li>
                                            <span className="coast">₹3,499</span>
                                        </li>
                                        <li>
                                            <img
                                                src="https://www.pranaair.com/wp-content/uploads/2024/02/card-rating.png"
                                                alt="card-rating"
                                            />
                                        </li>
                                    </ul>
                                    <ul>
                                        <li>
                                            <h5>Connectivity :</h5>
                                            <h4>WiFi</h4>
                                        </li>
                                        <li>
                                            <h5>Battery :</h5>
                                            <h4>450 mAh</h4>
                                        </li>
                                    </ul>
                                </div>
                                <div className="card-btn">
                                    <form
                                        className="cart"
                                        action="https://www.pranaair.com/product/pm2-5-pocket-monitor/"
                                        encType="multipart/form-data"
                                        method="post"
                                    >
                                        {" "}
                                        <button
                                            className="single_add_to_cart_button button alt monitor_know_btn monitor_card_btn"
                                            name="add-to-cart"
                                            type="submit"
                                            value="7312"
                                        >
                                            Buy Now <img src="https://www.pranaair.com/wp-content/uploads/2024/02/card-btn-icon.png" alt="" />
                                        </button>{" "}
                                    </form>
                                </div>
                            </div>
                        </div>

                        {/* More product cards would go here */}
                    </div>
                </div>

                <div className="tab-pane fade" id="indoor" role="tabpanel" aria-labelledby="indoor-tab">
                    <div className="row tab-card">
                        <div className="col-md-4">
                            <div className="prdocut-card">
                                <div className="arrow-link">
                                    <img src="https://www.pranaair.com/wp-content/uploads/2024/02/card-arrow.png" alt="icon" />
                                </div>
                                <div className="card-img">
                                    <span className="in-outdoor">Indoor</span>
                                    <a href="/air-quality-monitor/sensible-air-monitor/">
                                        <img
                                            src="https://www.pranaair.com/wp-content/uploads/2024/03/sensible-air-quality-monitor.png"
                                            alt="prana air sensible air quality monitor"
                                        />
                                    </a>
                                </div>
                                <div className="card-text">
                                    <a href="/air-quality-monitor/sensible-air-monitor/">Sensible Monitor</a>
                                    <ul>
                                        <li>
                                            <span className="coast">₹59,999</span>
                                        </li>
                                        <li>
                                            <img
                                                src="https://www.pranaair.com/wp-content/uploads/2024/02/card-rating.png"
                                                alt="card-rating"
                                            />
                                        </li>
                                    </ul>
                                    <ul>
                                        <li>
                                            <h5>Connectivity :</h5>
                                            <h4>WiFi</h4>
                                        </li>
                                        <li>
                                            <h5>Battery :</h5>
                                            <h4>NA</h4>
                                        </li>
                                    </ul>
                                </div>
                                <div className="card-btn">
                                    <form
                                        className="cart"
                                        action="https://www.pranaair.com/product/sensible-air-monitor/"
                                        encType="multipart/form-data"
                                        method="post"
                                    >
                                        {" "}
                                        <button
                                            className="single_add_to_cart_button button alt monitor_know_btn monitor_card_btn"
                                            name="add-to-cart"
                                            type="submit"
                                            value="12151"
                                        >
                                            Buy Now{" "}
                                            <img src="https://www.pranaair.com/wp-content/uploads/2024/02/card-btn-icon.png" alt="icon" />
                                        </button>{" "}
                                    </form>
                                </div>
                            </div>
                        </div>

                        {/* More product cards would go here */}
                    </div>
                </div>

                <div className="tab-pane fade" id="outdoor" role="tabpanel" aria-labelledby="outdoor-tab">
                    <div className="row tab-card">
                        <div className="col-md-4">
                            <div className="prdocut-card">
                                <div className="arrow-link">
                                    <img src="https://www.pranaair.com/wp-content/uploads/2024/02/card-arrow.png" alt="icon" />
                                </div>
                                <div className="card-img">
                                    <span className="in-outdoor">Outdoor</span>
                                    <a href="/air-quality-monitor/ambient-air-monitor/">
                                        <img
                                            src="https://www.pranaair.com/wp-content/uploads/2024/07/Ambient-PM-product.png"
                                            alt="prana air sensible air quality monitor"
                                        />
                                    </a>
                                </div>
                                <div className="card-text">
                                    <a href="/air-quality-monitor/ambient-air-monitor/">Ambient PM</a>
                                    <ul>
                                        <li>
                                            <span className="coast">Request A Quote</span>
                                        </li>
                                        <li>
                                            <img
                                                src="https://www.pranaair.com/wp-content/uploads/2024/02/card-rating.png"
                                                alt="card-rating"
                                            />
                                        </li>
                                    </ul>
                                    <ul>
                                        <li>
                                            <h5>Connectivity :</h5>
                                            <h4>WiFi / GSM</h4>
                                        </li>
                                        <li>
                                            <h5>Battery :</h5>
                                            <h4>NA</h4>
                                        </li>
                                    </ul>
                                </div>
                                <div className="card-btn">
                                    <form
                                        className="cart"
                                        action="https://www.pranaair.com/air-quality-monitor/ambient-air-monitor/"
                                        encType="multipart/form-data"
                                        method="post"
                                    >
                                        {" "}
                                        <button
                                            className="single_add_to_cart_button button alt monitor_know_btn monitor_card_btn"
                                            name="add-to-cart"
                                            type="submit"
                                        >
                                            Know More
                                            <img src="https://www.pranaair.com/wp-content/uploads/2024/02/card-btn-icon.png" alt="icon" />
                                        </button>{" "}
                                    </form>
                                </div>
                            </div>
                        </div>

                        {/* More product cards would go here */}
                    </div>
                </div>
            </div>
        </div>
    )
}
