"use client"

export default function AQIAppsTabs() {
    return (
        <div className="dash-tabs">
            <ul className="nav nav-tabs" id="aqi-tabs-nav" role="tablist">
                <li className="nav-item" role="presentation">
                    <button
                        className="nav-link active"
                        id="mobile-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#mobile"
                        type="button"
                        role="tab"
                        aria-controls="mobile"
                        aria-selected="true"
                    >
                        Mobile App
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button
                        className="nav-link"
                        id="tv-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#tv"
                        type="button"
                        role="tab"
                        aria-controls="tv"
                        aria-selected="false"
                    >
                        TV App
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button
                        className="nav-link"
                        id="web-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#web"
                        type="button"
                        role="tab"
                        aria-controls="web"
                        aria-selected="false"
                    >
                        Web Dashboard
                    </button>
                </li>
            </ul>

            <div className="tab-content">
                <div className="tab-pane fade show active" id="mobile" role="tabpanel" aria-labelledby="mobile-tab">
                    <div className="row mob-row">
                        <div className="col-md-6">
                            <div className="mob-dash-img">
                                <img
                                    src="https://www.pranaair.com/wp-content/uploads/2024/03/aqi-mobile-app-dashboard.webp"
                                    alt="aqi mobile app dashboard"
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="aqi-text">
                                <h6>One-Stop Solution</h6>
                                <h3>
                                    <img src="https://www.pranaair.com/wp-content/uploads/2023/10/aqi-logo.png" alt="aqi logo" /> Mobile
                                    App
                                </h3>
                            </div>
                            <div className="dash-content">
                                <ul>
                                    <li>
                                        <img
                                            src="https://www.pranaair.com/wp-content/uploads/2024/02/get-health-advice.png"
                                            alt="Get health advices"
                                        />
                                    </li>
                                    <li>
                                        <h4>Get health advices</h4>
                                        <p>Take some precautions about what to do and not to do when the air quality is good and bad.</p>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <img
                                            src="https://www.pranaair.com/wp-content/uploads/2024/02/real-time-data-historic-data.png"
                                            alt="Real-time and historic data access"
                                        />
                                    </li>
                                    <li>
                                        <h4>Real-time and historic data access</h4>
                                        <p>Access real-time and historic air quality data (24 hours, week, or months) via AQI app.</p>
                                    </li>
                                </ul>
                                <ul className="dashbord-btn">
                                    <li>
                                        <a href="https://apps.apple.com/tt/app/aqi/id1439684571?utm_campaign=ios_app_install%27&utm_medium=iOS+app&utm_source=app+store">
                                            <img src="https://www.pranaair.com/wp-content/uploads/2024/01/ios-icon.png" alt="ios icon" />{" "}
                                            Download for <strong>iOS</strong>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://play.google.com/store/apps/details?id=com.aqi.data&hl=en&utm_source=play+store&utm_medium=android&utm_campaign=android_app_install%27&pli=1">
                                            <img
                                                src="https://www.pranaair.com/wp-content/uploads/2024/01/android-icon.png"
                                                alt="android-icon"
                                            />{" "}
                                            Download for <strong>android</strong>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="tab-pane fade" id="tv" role="tabpanel" aria-labelledby="tv-tab">
                    <div className="row mob-row">
                        <div className="col-md-6">
                            <div className="tv-dash-img">
                                <img
                                    src="https://www.pranaair.com/wp-content/uploads/2024/03/aqi-tv-app-dashboard.webp"
                                    alt="aqi tv app dashboard"
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="aqi-text">
                                <h6>One-Stop Solution</h6>
                                <h3>
                                    <img src="https://www.pranaair.com/wp-content/uploads/2023/10/aqi-logo.png" alt="aqi logo" /> TV
                                    Application
                                </h3>
                            </div>
                            <div className="dash-content">
                                <ul>
                                    <li>
                                        <img
                                            src="https://www.pranaair.com/wp-content/uploads/2024/03/themes-variety.png"
                                            alt="Themes variety"
                                        />
                                    </li>
                                    <li>
                                        <h4>Themes variety</h4>
                                        <p>
                                            Get a variety of theme options to set on your TV for a better and more personalized data showcase.
                                        </p>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <img
                                            src="https://www.pranaair.com/wp-content/uploads/2024/03/24x7-data.png"
                                            alt="24*7 data accessibility"
                                        />
                                    </li>
                                    <li>
                                        <h4>24*7 data accessibility</h4>
                                        <p>Connect your device with the TV app and get 24*7 air quality data on your TV screen.</p>
                                    </li>
                                </ul>
                                <ul className="tv-web-btn">
                                    <li>
                                        <a href="https://play.google.com/store/apps/details?id=com.aqitv.aqitvnew">
                                            {" "}
                                            Download for <strong>TV</strong>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="tab-pane fade" id="web" role="tabpanel" aria-labelledby="web-tab">
                    <div className="row mob-row">
                        <div className="col-md-6">
                            <div className="web-dash-img">
                                <img
                                    src="https://www.pranaair.com/wp-content/uploads/2024/03/aqi-web-dashboard-for-prana-air-monitors.webp"
                                    alt="aqi web dashboard for prana air monitors"
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="aqi-text">
                                <h6>One-Stop Solution</h6>
                                <h3>
                                    <img src="https://www.pranaair.com/wp-content/uploads/2023/10/aqi-logo.png" alt="aqi logo" /> Web
                                    Dashboard
                                </h3>
                            </div>
                            <div className="dash-content">
                                <ul>
                                    <li>
                                        <img
                                            src="https://www.pranaair.com/wp-content/uploads/2024/03/remote-access-icon.png"
                                            alt="remote access icon"
                                        />
                                    </li>
                                    <li>
                                        <h4>Remote Access</h4>
                                        <p>Get Real-time and historical air quality, temperature, etc, data anytime and anywhere.</p>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <img
                                            src="https://www.pranaair.com/wp-content/uploads/2024/03/data-comparison.png"
                                            alt="Data comparison"
                                        />
                                    </li>
                                    <li>
                                        <h4>Data comparison</h4>
                                        <p>Compare multiple data from outdoor air quality to make informed decisions.</p>
                                    </li>
                                </ul>
                                <ul className="tv-web-btn">
                                    <li>
                                        <a href="https://www.aqi.in/userlogin">
                                            {" "}
                                            Download for <strong>Dashboard</strong>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
