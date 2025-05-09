import Image from "next/image"

export default function DataAccessibilityTab() {
    return (
        <>
            <div className="data-tab">
                <ul className="nav nav-tabs" id="dataTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button
                            className="nav-link active"
                            id="web-dashboard-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#web-dashboard"
                            type="button"
                            role="tab"
                            aria-controls="web-dashboard"
                            aria-selected="true"
                        >
                            Web-Dashboard
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button
                            className="nav-link"
                            id="mobile-app-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#mobile-app"
                            type="button"
                            role="tab"
                            aria-controls="mobile-app"
                            aria-selected="false"
                        >
                            Mobile App
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button
                            className="nav-link"
                            id="tv-app-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#tv-app"
                            type="button"
                            role="tab"
                            aria-controls="tv-app"
                            aria-selected="false"
                        >
                            TV App
                        </button>
                    </li>
                </ul>
            </div>

            <div className="tab-content" id="dataTabContent">
                <div
                    className="tab-pane fade show active"
                    id="web-dashboard"
                    role="tabpanel"
                    aria-labelledby="web-dashboard-tab"
                >
                    <div className="row">
                        <div className="col-md-6">
                            <div className="aqi-tv-app-box">
                                <ul className="aqi-tv-img">
                                    <li>
                                        <Image
                                            src="https://www.pranaair.com/wp-content/uploads/2023/10/AQI-Dashboard-icon.png"
                                            alt="aqi data web-dasbhoard"
                                            width={85}
                                            height={85}
                                        />
                                    </li>
                                    <li>
                                        <h4>AQI Web-Dashboard</h4>
                                        <p>Analyze the real-time and historic data of your ambient monitor data on website.</p>
                                    </li>
                                </ul>
                                <div className="data-icon">
                                    <div className="data-icon-box1">
                                        <ul>
                                            <li>
                                                <Image
                                                    src="https://www.pranaair.com/wp-content/uploads/2023/10/World-air-pollution.png"
                                                    alt="world pollution"
                                                    width={41}
                                                    height={41}
                                                />
                                            </li>
                                            <li>
                                                <h6>Analysis: Worlds most polluted cities and countries.</h6>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li>
                                                <Image
                                                    src="https://www.pranaair.com/wp-content/uploads/2023/10/weather.png"
                                                    alt="weather data"
                                                    width={41}
                                                    height={41}
                                                />
                                            </li>
                                            <li>
                                                <h6>Weather forecast of your current selected location</h6>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="data-icon-box1">
                                        <ul>
                                            <li>
                                                <Image
                                                    src="https://www.pranaair.com/wp-content/uploads/2023/10/health-recommendation.png"
                                                    alt="health recommendation"
                                                    width={41}
                                                    height={41}
                                                />
                                            </li>
                                            <li>
                                                <h6>Health advice based on real-time air quality index</h6>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li>
                                                <Image
                                                    src="https://www.pranaair.com/wp-content/uploads/2023/10/Compare.png"
                                                    alt="compare the air quality data"
                                                    width={41}
                                                    height={41}
                                                />
                                            </li>
                                            <li>
                                                <h6>Compare different air quality parameters of two or more location</h6>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="aqi-tv-btn-box">
                                    <ul>
                                        <li>
                                            <a className="apple-btn" href="https://www.aqi.in/userlogin">
                                                View Dashboard
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="indoor-index-image">
                                <Image
                                    className="aqidash-img"
                                    src="https://www.pranaair.com/wp-content/uploads/2023/10/aqi-dashboard-co2.png"
                                    alt="aqi data web-dashboard"
                                    width={600}
                                    height={400}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="mobile-app" role="tabpanel" aria-labelledby="mobile-app-tab">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="aqi-tv-app-box">
                                <ul className="aqi-tv-img">
                                    <li>
                                        <Image
                                            src="https://www.pranaair.com/wp-content/uploads/2023/10/aqi-dashboard-co2.png"
                                            alt="aqi mobile app"
                                            width={85}
                                            height={85}
                                        />
                                    </li>
                                    <li>
                                        <h4>AQI Mobile App</h4>
                                        <p>Access your ambient air monitor data on the app.</p>
                                    </li>
                                </ul>
                                <div className="data-icon">
                                    <div className="data-icon-box1">
                                        <ul>
                                            <li>
                                                <Image
                                                    src="https://www.pranaair.com/wp-content/uploads/2023/10/real-time-co2-level.png"
                                                    alt="real-time data"
                                                    width={41}
                                                    height={41}
                                                />
                                            </li>
                                            <li>
                                                <h6>Real-time air quality API for accurate global data</h6>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li>
                                                <Image
                                                    src="https://www.pranaair.com/wp-content/uploads/2023/10/historic-data.png"
                                                    alt="air quality historic data"
                                                    width={41}
                                                    height={41}
                                                />
                                            </li>
                                            <li>
                                                <h6>Insightful Air quality monitoring dashboard</h6>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="data-icon-box1">
                                        <ul>
                                            <li>
                                                <Image
                                                    src="https://www.pranaair.com/wp-content/uploads/2023/10/World-air-pollution.png"
                                                    alt="world air pollution data"
                                                    width={41}
                                                    height={41}
                                                />
                                            </li>
                                            <li>
                                                <h6>World air pollution map and weather map</h6>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li>
                                                <Image
                                                    src="https://www.pranaair.com/wp-content/uploads/2023/10/Compare.png"
                                                    alt="compare air quality data"
                                                    width={41}
                                                    height={41}
                                                />
                                            </li>
                                            <li>
                                                <h6>Compare different air quality parameters of two or more location</h6>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="aqi-tv-btn-box">
                                    <ul>
                                        <li>
                                            <a className="apple-btn" href="https://apps.apple.com/tt/app/aqi/id1439684571">
                                                <Image
                                                    src="https://www.pranaair.com/wp-content/uploads/2023/10/apple-icon.png"
                                                    alt="aqi ios app"
                                                    width={15}
                                                    height={15}
                                                />
                                                Download for <span className="iso">iOS</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="apple-btn andro-btn"
                                                href="https://play.google.com/store/apps/details?id=com.aqi.data"
                                            >
                                                <Image
                                                    src="https://www.pranaair.com/wp-content/uploads/2023/10/android-icon.png"
                                                    alt="aqi android app"
                                                    width={15}
                                                    height={15}
                                                />
                                                Download for <span className="andro">android</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="indoor-index-image">
                                <Image
                                    className="mobile-app"
                                    src="https://www.pranaair.com/wp-content/uploads/2023/10/ambient-pm-only-pm.png"
                                    alt="aqi mobile app"
                                    width={300}
                                    height={400}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="tv-app" role="tabpanel" aria-labelledby="tv-app-tab">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="aqi-tv-app-box">
                                <ul className="aqi-tv-img">
                                    <li>
                                        <Image
                                            src="https://www.pranaair.com/wp-content/uploads/2023/10/AQI-Dashboard-icon.png"
                                            alt="aqi tv app"
                                            width={85}
                                            height={85}
                                        />
                                    </li>
                                    <li>
                                        <h4>AQI TV App</h4>
                                        <p>Display your ambient monitor data on big TV screen.</p>
                                    </li>
                                </ul>
                                <div className="data-icon">
                                    <div className="data-icon-box1">
                                        <ul>
                                            <li>
                                                <Image
                                                    src="https://www.pranaair.com/wp-content/uploads/2023/10/Compare.png"
                                                    alt="compare air quality data"
                                                    width={41}
                                                    height={41}
                                                />
                                            </li>
                                            <li>
                                                <h6>Outdoor vs Indoor Air Quality data</h6>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li>
                                                <Image
                                                    src="https://www.pranaair.com/wp-content/uploads/2023/10/24-hours.png"
                                                    alt="historic data on tv"
                                                    width={41}
                                                    height={41}
                                                />
                                            </li>
                                            <li>
                                                <h6>24*7 remote access to the monitored data</h6>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="data-icon-box1">
                                        <ul>
                                            <li>
                                                <Image
                                                    src="https://www.pranaair.com/wp-content/uploads/2023/10/AQI.png"
                                                    alt="aqi data on tv"
                                                    width={41}
                                                    height={41}
                                                />
                                            </li>
                                            <li>
                                                <h6>AQI TV app controlled by AQI mobile app.</h6>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li>
                                                <Image
                                                    src="https://www.pranaair.com/wp-content/uploads/2023/10/Choose.png"
                                                    alt="choose aqi tv app theme"
                                                    width={41}
                                                    height={41}
                                                />
                                            </li>
                                            <li>
                                                <h6>Choose from multiple ranges of themes.</h6>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="aqi-tv-btn-box">
                                    <ul>
                                        <li>
                                            <a className="apple-btn" href="https://play.google.com/store/apps/details?id=com.aqitv.aqitvnew">
                                                Download for <span className="iso">TV</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="indoor-index-image">
                                <Image
                                    className="tv-app"
                                    src="https://www.pranaair.com/wp-content/uploads/2023/10/aqi-tv-app-dashboard.png"
                                    alt="aqi tv app"
                                    width={600}
                                    height={400}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
