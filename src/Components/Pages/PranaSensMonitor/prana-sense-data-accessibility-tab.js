"use client"

import { useEffect } from "react"

export default function PranaSenseDataAccessibilityTab() {
    useEffect(() => {
        // Ensure the first tab is active by default
        const firstTab = document.querySelector(".aqi-data-tab-sec .nav-link")
        if (firstTab) {
            firstTab.classList.add("active")

            // Get the target content ID from data-bs-target
            const targetId = "#mobile-app-tab"

            // Show the corresponding tab content
            const targetContent = document.querySelector(targetId)
            if (targetContent) {
                targetContent.classList.add("show", "active")
            }
        }
    }, [])

    return (
        <section className="aqi-data-tab-sec">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="tab-heading">
                            <h2>Seamless accessibility</h2>
                            <h3>Air Quality Data at Your Fingertips</h3>
                        </div>
                    </div>
                </div>
                <div className="row tab-inner">
                    <div className="col-12">
                        <div className="tab-section">
                            <ul className="nav nav-tabs justify-content-center" id="accessibilityTabs" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link active"
                                        id="mobile-app-tab-btn"
                                        data-bs-toggle="tab"
                                        data-bs-target="#mobile-app-tab"
                                        type="button"
                                        role="tab"
                                        aria-controls="mobile-app-tab"
                                        aria-selected="true"
                                    >
                                        Mobile App
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link"
                                        id="web-dashboard-tab-btn"
                                        data-bs-toggle="tab"
                                        data-bs-target="#web-dashboard-tab"
                                        type="button"
                                        role="tab"
                                        aria-controls="web-dashboard-tab"
                                        aria-selected="false"
                                    >
                                        Web Dashboard
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link"
                                        id="tv-application-tab-btn"
                                        data-bs-toggle="tab"
                                        data-bs-target="#tv-application-tab"
                                        type="button"
                                        role="tab"
                                        aria-controls="tv-application-tab"
                                        aria-selected="false"
                                    >
                                        TV Application
                                    </button>
                                </li>
                            </ul>
                            <div className="tab-content" id="accessibilityTabsContent">
                                <div
                                    className="tab-pane fade show active"
                                    id="mobile-app-tab"
                                    role="tabpanel"
                                    aria-labelledby="mobile-app-tab-btn"
                                >
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="tab-txt">
                                                <h3>See the data on your smartphone</h3>
                                                <p>
                                                    Get Prana Senses real-time environmental insights right in your pocket for convenient
                                                    monitoring and peace of mind.
                                                </p>
                                                <div className="connect-btn-box">
                                                    <a href="https://apps.apple.com/tt/app/aqi/id1439684571" className="iso-btn">
                                                        <ul className="seamless-connect-btn">
                                                            <li>
                                                                <img
                                                                    src="https://www.pranaair.com/wp-content/uploads/2024/07/app-store.png"
                                                                    alt="ios app logo"
                                                                />
                                                            </li>
                                                            <li>
                                                                <span className="btn-txt-small">Download on the</span>
                                                                <br />
                                                                <span className="btan-txt">App Store</span>
                                                            </li>
                                                        </ul>
                                                    </a>
                                                    <a
                                                        href="https://play.google.com/store/apps/details?id=com.aqi.data"
                                                        className="play-store-btn"
                                                    >
                                                        <ul className="seamless-connect-btn">
                                                            <li>
                                                                <img
                                                                    src="https://www.pranaair.com/wp-content/uploads/2024/07/google-play.png"
                                                                    alt="android app"
                                                                />
                                                            </li>
                                                            <li>
                                                                <span className="btn-txt-small">Get it on</span>
                                                                <br />
                                                                <span className="btan-txt">Google Play</span>
                                                            </li>
                                                        </ul>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="tab-img smart-phn">
                                                <img
                                                    src="https://www.pranaair.com/wp-content/uploads/2024/09/air-quality-data-at-your-smartphone.webp"
                                                    alt="insightful air quality data accessibility on AQI mobile app"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="web-dashboard-tab"
                                    role="tabpanel"
                                    aria-labelledby="web-dashboard-tab-btn"
                                >
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="tab-txt">
                                                <h3>Air Quality Data on Web Dashboard</h3>
                                                <p>
                                                    Monitor real-time Prana Senses data on your laptop anytime anywhere with the web-dashboard
                                                    data accessibility feature.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="tab-img web-img">
                                                <img
                                                    src="https://www.pranaair.com/wp-content/uploads/2024/08/aqi-web-dashboard.png"
                                                    alt="more details air quality data insights on AQI web-dashboard"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="tv-application-tab"
                                    role="tabpanel"
                                    aria-labelledby="tv-application-tab-btn"
                                >
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="tab-txt">
                                                <h3>See the data on your Smart TV</h3>
                                                <p>
                                                    Get real-time environmental insights of Prana Sense on your smart TV to ensure continuous
                                                    monitoring.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="tab-img tv-img">
                                                <img
                                                    src="https://www.pranaair.com/wp-content/uploads/2024/07/Tv-connectivity.png"
                                                    alt="air quality data on AQI TV app"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
