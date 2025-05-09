export default function ProductComparison() {
    return (
        <div className="comparison-section">
            <div className="container">
                <h2 className="comparison-title">
                    Comparison of Nano CO<sub>2</sub> vs High-End Monitor
                </h2>

                <div className="comparison-products">
                    <div className="comparison-product">
                        <div className="comparison-product-image">
                            <img
                                src="https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-nano-co2-monitor-portable.png"
                                alt="Nano CO2 Monitor"
                            />
                        </div>
                        <div className="comparison-product-name">Nano CO2 Monitor</div>
                    </div>
                    <div className="comparison-product">
                        <div className="comparison-product-image">
                            <img
                                src="https://www.pranaair.com/wp-content/uploads/2023/06/tsi-co2-monitor.png"
                                alt="High-End Monitor"
                            />
                        </div>
                        <div className="comparison-product-name">High-End Monitor</div>
                    </div>
                </div>

                <div className="comparison-table">
                    <div className="comparison-row">
                        <div className="comparison-label">Description :</div>
                        <div className="comparison-value">Nano CO2 Monitor</div>
                        <div className="comparison-value">High-End Monitor</div>
                    </div>
                    <div className="comparison-row">
                        <div className="comparison-label">Size :</div>
                        <div className="comparison-value">Small</div>
                        <div className="comparison-value">Bulky</div>
                    </div>
                    <div className="comparison-row">
                        <div className="comparison-label">Price :</div>
                        <div className="comparison-value">Low-cost</div>
                        <div className="comparison-value">Expensive</div>
                    </div>
                    <div className="comparison-row">
                        <div className="comparison-label">Weight :</div>
                        <div className="comparison-value">Lightweight</div>
                        <div className="comparison-value">Comparatively Heavy</div>
                    </div>
                    <div className="comparison-row">
                        <div className="comparison-label">Range :</div>
                        <div className="comparison-value">Upto 5000 ppm</div>
                        <div className="comparison-value">Upto 5000 ppm</div>
                    </div>
                    <div className="comparison-row">
                        <div className="comparison-label">Accuracy :</div>
                        <div className="comparison-value">±5%</div>
                        <div className="comparison-value">±3%</div>
                    </div>
                    <div className="comparison-row">
                        <div className="comparison-label">Technology :</div>
                        <div className="comparison-value">NDIR Sensor</div>
                        <div className="comparison-value">NDIR Sensor</div>
                    </div>
                    <div className="comparison-row">
                        <div className="comparison-label">Portability :</div>
                        <div className="comparison-value">High Portability</div>
                        <div className="comparison-value">Comparatively less portable</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
