
export default function AqiRangesTab() {
    return (
        <div className="car-in-outdoor-tab">
            <ul className="nav nav-tabs" id="aqiRangesTabs" role="tablist">
                <li className="nav-item" role="presentation">
                    <button
                        className="nav-link active"
                        id="aqi-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#aqi-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="aqi-tab-pane"
                        aria-selected="true"
                    >
                        AQI
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button
                        className="nav-link"
                        id="pm1-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#pm1-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="pm1-tab-pane"
                        aria-selected="false"
                    >
                        PM1
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button
                        className="nav-link"
                        id="pm25-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#pm25-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="pm25-tab-pane"
                        aria-selected="false"
                    >
                        PM2.5
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button
                        className="nav-link"
                        id="pm10-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#pm10-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="pm10-tab-pane"
                        aria-selected="false"
                    >
                        PM10
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button
                        className="nav-link"
                        id="co2-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#co2-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="co2-tab-pane"
                        aria-selected="false"
                    >
                        CO2
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button
                        className="nav-link"
                        id="hcho-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#hcho-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="hcho-tab-pane"
                        aria-selected="false"
                    >
                        HCHO
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button
                        className="nav-link"
                        id="tvoc-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#tvoc-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="tvoc-tab-pane"
                        aria-selected="false"
                    >
                        TVOC
                    </button>
                </li>
            </ul>
            <div className="tab-content" id="aqiRangesTabsContent">
                <div
                    className="tab-pane fade show active"
                    id="aqi-tab-pane"
                    role="tabpanel"
                    aria-labelledby="aqi-tab"
                    tabIndex={0}
                >
                    <div className="tab-aqi-ranges">
                        <ul className="perameter">
                            <li>Good</li>
                            <li>Moderate</li>
                            <li>Poor</li>
                            <li>Unhealthy</li>
                            <li>Severe</li>
                            <li>Hazardous</li>
                        </ul>
                        <div className="d-flex">
                            <p className="green-range" style={{ height: "25px", width: "15%", backgroundColor: "#59B61F" }}></p>
                            <p style={{ height: "25px", width: "15%", backgroundColor: "#EEC732" }}></p>
                            <p style={{ height: "25px", width: "15%", backgroundColor: "#EA8C34" }}></p>
                            <p style={{ height: "25px", width: "15%", backgroundColor: "#E95478" }}></p>
                            <p style={{ height: "25px", width: "15%", backgroundColor: "#B33FBA" }}></p>
                            <p className="red-range" style={{ height: "25px", width: "15%", backgroundColor: "#C92033" }}></p>
                        </div>
                        <ul className="aqi-rang">
                            <li>0</li>
                            <li>50</li>
                            <li>100</li>
                            <li>150</li>
                            <li>200</li>
                            <li>300</li>
                            <li>300+</li>
                        </ul>
                    </div>
                </div>
                <div className="tab-pane fade" id="pm1-tab-pane" role="tabpanel" aria-labelledby="pm1-tab" tabIndex={0}>
                    <div className="tab-aqi-ranges">
                        <ul className="perameter">
                            <li>Good</li>
                            <li>Moderate</li>
                            <li>Poor</li>
                            <li>Unhealthy</li>
                            <li>Severe</li>
                            <li>Hazardous</li>
                        </ul>
                        <div className="d-flex">
                            <p className="green-range" style={{ height: "25px", width: "15%", backgroundColor: "#59B61F" }}></p>
                            <p style={{ height: "25px", width: "15%", backgroundColor: "#EEC732" }}></p>
                            <p style={{ height: "25px", width: "15%", backgroundColor: "#EA8C34" }}></p>
                            <p style={{ height: "25px", width: "15%", backgroundColor: "#E95478" }}></p>
                            <p style={{ height: "25px", width: "15%", backgroundColor: "#B33FBA" }}></p>
                            <p className="red-range" style={{ height: "25px", width: "15%", backgroundColor: "#C92033" }}></p>
                        </div>
                        <ul className="aqi-rang">
                            <li>0</li>
                            <li>10</li>
                            <li>20</li>
                            <li>40</li>
                            <li>60</li>
                            <li>90</li>
                            <li>90+</li>
                        </ul>
                    </div>
                </div>
                <div className="tab-pane fade" id="pm25-tab-pane" role="tabpanel" aria-labelledby="pm25-tab" tabIndex={0}>
                    <div className="tab-aqi-ranges">
                        <ul className="perameter">
                            <li>Good</li>
                            <li>Moderate</li>
                            <li>Poor</li>
                            <li>Unhealthy</li>
                            <li>Severe</li>
                            <li>Hazardous</li>
                        </ul>
                        <div className="d-flex">
                            <p className="green-range" style={{ height: "25px", width: "15%", backgroundColor: "#59B61F" }}></p>
                            <p style={{ height: "25px", width: "15%", backgroundColor: "#EEC732" }}></p>
                            <p style={{ height: "25px", width: "15%", backgroundColor: "#EA8C34" }}></p>
                            <p style={{ height: "25px", width: "15%", backgroundColor: "#E95478" }}></p>
                            <p style={{ height: "25px", width: "15%", backgroundColor: "#B33FBA" }}></p>
                            <p className="red-range" style={{ height: "25px", width: "15%", backgroundColor: "#C92033" }}></p>
                        </div>
                        <ul className="aqi-rang">
                            <li>0</li>
                            <li>30</li>
                            <li>60</li>
                            <li>90</li>
                            <li>120</li>
                            <li>250</li>
                            <li>250+</li>
                        </ul>
                    </div>
                </div>
                <div className="tab-pane fade" id="pm10-tab-pane" role="tabpanel" aria-labelledby="pm10-tab" tabIndex={0}>
                    <div className="tab-aqi-ranges">
                        <ul className="perameter">
                            <li>Good</li>
                            <li>Moderate</li>
                            <li>Poor</li>
                            <li>Unhealthy</li>
                            <li>Severe</li>
                            <li>Hazardous</li>
                        </ul>
                        <div className="d-flex">
                            <p className="green-range" style={{ height: "25px", width: "15%", backgroundColor: "#59B61F" }}></p>
                            <p style={{ height: "25px", width: "15%", backgroundColor: "#EEC732" }}></p>
                            <p style={{ height: "25px", width: "15%", backgroundColor: "#EA8C34" }}></p>
                            <p style={{ height: "25px", width: "15%", backgroundColor: "#E95478" }}></p>
                            <p style={{ height: "25px", width: "15%", backgroundColor: "#B33FBA" }}></p>
                            <p className="red-range" style={{ height: "25px", width: "15%", backgroundColor: "#C92033" }}></p>
                        </div>
                        <ul className="aqi-rang">
                            <li>0</li>
                            <li>50</li>
                            <li>100</li>
                            <li>250</li>
                            <li>350</li>
                            <li>430</li>
                            <li>430+</li>
                        </ul>
                    </div>
                </div>
                <div className="tab-pane fade" id="co2-tab-pane" role="tabpanel" aria-labelledby="co2-tab" tabIndex={0}>
                    <div className="tab-aqi-ranges">
                        <ul className="perameter">
                            <li>Good</li>
                            <li>Moderate</li>
                            <li>Poor</li>
                            <li>Unhealthy</li>
                            <li>Severe</li>
                            <li>Hazardous</li>
                        </ul>
                        <div className="d-flex">
                            <p className="green-range" style={{ height: "25px", width: "15%", backgroundColor: "#59B61F" }}></p>
                            <p style={{ height: "25px", width: "15%", backgroundColor: "#EEC732" }}></p>
                            <p style={{ height: "25px", width: "15%", backgroundColor: "#EA8C34" }}></p>
                            <p style={{ height: "25px", width: "15%", backgroundColor: "#E95478" }}></p>
                            <p style={{ height: "25px", width: "15%", backgroundColor: "#B33FBA" }}></p>
                            <p className="red-range" style={{ height: "25px", width: "15%", backgroundColor: "#C92033" }}></p>
                        </div>
                        <ul className="aqi-rang">
                            <li>0</li>
                            <li>600</li>
                            <li>800</li>
                            <li>1000</li>
                            <li>1200</li>
                            <li>1500</li>
                            <li>1500+</li>
                        </ul>
                    </div>
                </div>
                <div className="tab-pane fade" id="hcho-tab-pane" role="tabpanel" aria-labelledby="hcho-tab" tabIndex={0}>
                    <div className="tab-aqi-ranges">
                        <ul className="perameter">
                            <li>Good</li>
                            <li>Moderate</li>
                            <li>Poor</li>
                            <li>Unhealthy</li>
                            <li>Severe</li>
                            <li>Hazardous</li>
                        </ul>
                        <div className="d-flex">
                            <p className="green-range" style={{ height: "25px", width: "15%", backgroundColor: "#59B61F" }}></p>
                            <p style={{ height: "25px", width: "15%", backgroundColor: "#EEC732" }}></p>
                            <p style={{ height: "25px", width: "15%", backgroundColor: "#EA8C34" }}></p>
                            <p style={{ height: "25px", width: "15%", backgroundColor: "#E95478" }}></p>
                            <p style={{ height: "25px", width: "15%", backgroundColor: "#B33FBA" }}></p>
                            <p className="red-range" style={{ height: "25px", width: "15%", backgroundColor: "#C92033" }}></p>
                        </div>
                        <ul className="aqi-rang">
                            <li>0</li>
                            <li>0.025</li>
                            <li>0.050</li>
                            <li>0.100</li>
                            <li>0.200</li>
                            <li>0.350</li>
                            <li>0.350+</li>
                        </ul>
                    </div>
                </div>
                <div className="tab-pane fade" id="tvoc-tab-pane" role="tabpanel" aria-labelledby="tvoc-tab" tabIndex={0}>
                    <div className="tab-aqi-ranges">
                        <ul className="perameter">
                            <li>Good</li>
                            <li>Moderate</li>
                            <li>Poor</li>
                            <li>Unhealthy</li>
                            <li>Severe</li>
                            <li>Hazardous</li>
                        </ul>
                        <div className="d-flex">
                            <p className="green-range" style={{ height: "25px", width: "15%", backgroundColor: "#59B61F" }}></p>
                            <p style={{ height: "25px", width: "15%", backgroundColor: "#EEC732" }}></p>
                            <p style={{ height: "25px", width: "15%", backgroundColor: "#EA8C34" }}></p>
                            <p style={{ height: "25px", width: "15%", backgroundColor: "#E95478" }}></p>
                            <p style={{ height: "25px", width: "15%", backgroundColor: "#B33FBA" }}></p>
                            <p className="red-range" style={{ height: "25px", width: "15%", backgroundColor: "#C92033" }}></p>
                        </div>
                        <ul className="aqi-rang">
                            <li>0</li>
                            <li>0.060</li>
                            <li>0.220</li>
                            <li>0.660</li>
                            <li>1</li>
                            <li>2.220</li>
                            <li>2.220+</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
