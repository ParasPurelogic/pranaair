

import TvAppTabs from '@/Components/Pages/CairMonitor/TvApptabs'

export default function TrackQualityTabs() {
    return (
        <>
            <div className="plateform-tab">
                <ul className="nav nav-tabs" id="trackQualityTabs" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button
                            className="nav-link active"
                            id="mobile-app-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#mobile-app-tab-pane"
                            type="button"
                            role="tab"
                            aria-controls="mobile-app-tab-pane"
                            aria-selected="true"
                        >
                            Mobile App
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button
                            className="nav-link"
                            id="tv-app-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#tv-app-tab-pane"
                            type="button"
                            role="tab"
                            aria-controls="tv-app-tab-pane"
                            aria-selected="false"
                        >
                            TV App
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button
                            className="nav-link"
                            id="web-dashboard-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#web-dashboard-tab-pane"
                            type="button"
                            role="tab"
                            aria-controls="web-dashboard-tab-pane"
                            aria-selected="false"
                        >
                            Web Dashboard
                        </button>
                    </li>
                </ul>
            </div>
            <div className="tab-content" id="trackQualityTabsContent">
                <div
                    className="tab-pane fade show active"
                    id="mobile-app-tab-pane"
                    role="tabpanel"
                    aria-labelledby="mobile-app-tab"
                    tabIndex={0}
                >
                    <div className="row">
                        <div className="col-12">
                            <div className="mobile-screen">
                                <h3>Mobile App</h3>
                                <img
                                    src="https://www.pranaair.com/wp-content/uploads/2024/01/aqi-mobile-application.png"
                                    alt="aqi mobile application"
                                />
                            </div>
                            <div className="main-health-box">
                                <div className="health-real-time">
                                    <div className="health-data-box">
                                        <ul>
                                            <li>
                                                <img
                                                    src="https://www.pranaair.com/wp-content/uploads/2024/02/health-advice.png"
                                                    alt="health advice icon"
                                                />
                                            </li>
                                            <li>
                                                <h4>Get health advices</h4>
                                                Take some precautions about what to do and not to do when the air quality is good and bad.
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="health-data-box">
                                        <ul>
                                            <li>
                                                <img
                                                    src="https://www.pranaair.com/wp-content/uploads/2024/02/real-time-data.png"
                                                    alt="real time and historic data icon"
                                                />
                                            </li>
                                            <li>
                                                <h4>Real-time and historic data access</h4>
                                                Access real-time and historic air quality data (24 hours, week, or months) via AQI app.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="mob-app-btn">
                                <a className="m-btn iphone-btn" href="#">
                                    <img src="https://www.pranaair.com/wp-content/uploads/2024/01/ios-icon.png" alt="" /> Download for{" "}
                                    <strong>iOS</strong>
                                </a>
                                <a className="m-btn anddro-btn" href="#">
                                    <img src="https://www.pranaair.com/wp-content/uploads/2024/01/android-icon.png" alt="" /> Download for{" "}
                                    <strong>android</strong>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="tv-app-tab-pane" role="tabpanel" aria-labelledby="tv-app-tab" tabIndex={0}>
                    <TvAppTabs />
                    <div className="main-health-box">
                        <div className="health-real-time">
                            <div className="health-data-box">
                                <ul>
                                    <li>
                                        <img
                                            src="https://www.pranaair.com/wp-content/uploads/2024/02/theme-option.png"
                                            alt="theme option"
                                        />
                                    </li>
                                    <li>
                                        <h4>Themes option</h4>
                                        Offers a variety of themes for better access to data on your TV.
                                    </li>
                                </ul>
                            </div>
                            <div className="health-data-box">
                                <ul>
                                    <li>
                                        <img
                                            src="https://www.pranaair.com/wp-content/uploads/2024/02/connect-mob-app.png"
                                            alt="connect mob app"
                                        />
                                    </li>
                                    <li>
                                        <h4>Connect Mobile App</h4>
                                        The mobile app can connect with your TV screen to have details on a big screen.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <a className="tv-app-btn" href="https://play.google.com/store/apps/details?id=com.aqitv.aqitvnew">
                        Download for <strong>TV</strong>
                    </a>
                </div>
                <div
                    className="tab-pane fade"
                    id="web-dashboard-tab-pane"
                    role="tabpanel"
                    aria-labelledby="web-dashboard-tab"
                    tabIndex={0}
                >
                    <div className="web-screen">
                        <h3>Web Dashboard</h3>
                        <img
                            src="https://www.pranaair.com/wp-content/uploads/2024/01/aqi-website-dashboard.png"
                            alt="aqi-website-dashboard"
                        />
                    </div>
                    <div className="main-health-box">
                        <div className="health-real-time">
                            <div className="health-data-box">
                                <ul>
                                    <li>
                                        <img
                                            src="https://www.pranaair.com/wp-content/uploads/2024/02/remote-access.png"
                                            alt="remote access"
                                        />
                                    </li>
                                    <li>
                                        <h4>Remote access</h4>
                                        Get access to 24*7 monitored data of AQI or temperature on the go.
                                    </li>
                                </ul>
                            </div>
                            <div className="health-data-box">
                                <ul>
                                    <li>
                                        <img
                                            src="https://www.pranaair.com/wp-content/uploads/2024/02/data-comprasion.png"
                                            alt="data comprasion"
                                        />
                                    </li>
                                    <li>
                                        <h4>Data comparison</h4>
                                        Compare two different locations data at one place and get real-time results
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <a className="tv-app-btn" href="https://www.aqi.in/userlogin">
                        Login <strong>AQI dashboard</strong>
                    </a>
                </div>
            </div>
        </>
    )
}
